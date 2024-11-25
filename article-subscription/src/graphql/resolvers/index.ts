import { Resolvers } from "../../__generated__/types";
import { productMutation, productQuery } from "./products";
import { productSubscription } from "./products/product.subscription";

export const resolvers: Resolvers = {
  Subscription: {
    ...productSubscription,
  },
  Query: {
    ...productQuery,
  },
  Mutation: {
    ...productMutation,
  },
};
