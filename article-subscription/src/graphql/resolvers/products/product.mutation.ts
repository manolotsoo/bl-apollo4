import { PubSub } from "graphql-subscriptions";
import { MyContext } from "../../..";
import {
  MutationCreatePostArgs,
  MutationResolvers,
} from "../../../__generated__/types";

const pubsub = new PubSub();

export const productMutation: MutationResolvers = {
  createPost: (_: any, args: MutationCreatePostArgs, __: MyContext) => {
    pubsub.publish("POST_CREATED", {
      postCreated: JSON.stringify({
        author: "Ali Baba",
        comment: "Open sesame",
      }),
    });
    return JSON.stringify(args);
  },
};
