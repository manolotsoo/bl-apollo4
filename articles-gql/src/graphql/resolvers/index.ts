import { Resolvers } from "../../__generated__/types";
import { productMutation, productQuery, productResolvers } from "./products";

export const resolvers: Resolvers = {
  Query: {
    ...productQuery,
  },
  Mutation: {
    ...productMutation,
  },
  // productResolver
  Product: {
    ...productResolvers,
  },
};
