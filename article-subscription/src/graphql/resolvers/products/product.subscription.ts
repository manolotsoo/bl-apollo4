import { PubSub } from "graphql-subscriptions";
import { SubscriptionResolvers } from "../../../__generated__/types";

const pubsub = new PubSub();
export const productSubscription: SubscriptionResolvers = {
  postCreated: {
    // More on pubsub below
    subscribe: () => pubsub.asyncIterableIterator(["POST_CREATED"]),
  },
};
