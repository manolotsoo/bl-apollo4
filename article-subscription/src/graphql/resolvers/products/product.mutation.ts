import { PubSub } from "graphql-subscriptions";
import {
  MutationCreatePostArgs,
  MutationResolvers,
} from "../../../__generated__/types";

const pubsub = new PubSub();

export const productMutation: MutationResolvers = {
  createPost: (_: any, args: MutationCreatePostArgs, __: any) => {
    pubsub.publish("POST_CREATED", {
      postCreated: JSON.stringify({
        author: "Ali Baba",
        comment: "Open sesame",
      }),
    });
    return JSON.stringify(args);
  },
};
