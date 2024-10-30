import { userQuery, userResolvers } from "./users";
import { bookQuery, bookResolvers } from "./books";

export const resolvers = {
  Query: {
    ...userQuery.Query,
    ...bookQuery.Query,
  },
  ...userResolvers,
  ...bookResolvers,
};
