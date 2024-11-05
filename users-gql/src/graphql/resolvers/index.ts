import { userQuery, userResolvers, userMutation } from "./users";
import { Resolvers } from "../../__generated__/types";
import { profileQuery, profileResolvers } from "./profiles";

export const resolvers: Resolvers = {
  Query: {
    ...userQuery,
    ...profileQuery,
  },
  Mutation: {
    ...userMutation,
  },
  // userResolver
  User: {
    ...userResolvers,
  },
  Profile: {
    ...profileResolvers,
  },
};
