import { Resolvers } from "../../__generated__/types";
import { productMutation } from "./products";
import { productSubscription } from "./products/product.subscription";

export const resolvers: Resolvers = {
  Subscription: {
    ...productSubscription,
  },
  Mutation: {
    ...productMutation,
  },
};
