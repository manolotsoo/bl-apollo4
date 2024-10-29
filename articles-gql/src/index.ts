import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./graphql";
import { bookQuery, bookResolvers } from "./graphql/resolvers";

export interface MyContext {
  token?: String;
}

// const books = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopin",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ];

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };

const server = new ApolloServer<MyContext>({
  typeDefs: schema,
  resolvers: { ...bookQuery, ...bookResolvers },
});

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// const server = new ApolloServer<MyContext>({
//   schema,
//   resolvers: resolver as any,
// });

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
