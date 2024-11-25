import express from "express";
import { createServer } from "http";
import { PubSub } from "graphql-subscriptions";
import { gql } from "graphql-tag";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";

interface createNewsEventInput {
  title: String;
  description: String;
}

(async function () {
  // Server code in here!
  const pubsub = new PubSub(); // Publish and Subscribe
  const app = express();
  const httpServer = createServer(app);

  const typeDefs = gql`
    type NewsEvent {
      title: String
      description: String
    }

    type Query {
      placeholder: Boolean
    }

    type Mutation {
      createNewsEvent(title: String, description: String): NewsEvent
    }

    type Subscription {
      newsFeed: NewsEvent
    }
  `;

  const resolvers = {
    Query: {
      placeholder: () => {
        return true;
      },
    },
    Mutation: {
      createNewsEvent: (_parent: any, args: createNewsEventInput) => {
        console.log(args);

        pubsub.publish("EVENT_CREATED", { newsFeed: args });
        return args;
      },
    },
    Subscription: {
      newsFeed: {
        subscribe: () => pubsub.asyncIterableIterator("EVENT_CREATED"),
      },
    },
  };

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  // ws Server
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql", // http://localhost:4002
  });

  const serverCleanup = useServer(
    {
      schema,
    },
    wsServer
  );

  // apollo Server
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  // start our server
  await server.start();

  // apply middlewares (cors, expressmiddlewares)
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server)
  );
  // Graphql typedefs and resolvers
  const PORT = 4002;

  // http server start
  httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
})();
