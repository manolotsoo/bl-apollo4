import { userQuery, userResolvers, userMutation } from "./users";
import { bookQuery, bookResolvers } from "./books";
import { Resolvers } from "../../__generated__/types";
import { profileQuery, profileResolvers } from "./profiles";

export const resolvers: Resolvers = {
  Query: {
    ...userQuery,
    ...bookQuery,
    ...profileQuery,
  },
  Mutation: {
    ...userMutation,
  },
  // userResolver
  User: {
    ...userResolvers,
  },
  Book: {
    // bookResolver
    ...bookResolvers,
  },
  Profile: {
    ...profileResolvers,
  },
};
