import { userQuery, userResolvers } from "./users";
import { bookQuery, bookResolvers } from "./books";
import { Resolvers } from "../../__generated__/types";
import { profileQuery, profileResolvers } from "./profiles";

export const resolvers: Resolvers = {
  Query: {
    ...userQuery,
    ...bookQuery,
    ...profileQuery,
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
