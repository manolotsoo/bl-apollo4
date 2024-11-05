import { userQuery, userResolvers, userMutation } from "./users";
import { Resolvers } from "../../__generated__/types";
import { profileQuery, profileResolvers } from "./profiles";
import { profileMutation } from "./profiles/profile.mutation";

export const resolvers: Resolvers = {
  Query: {
    ...userQuery,
    ...profileQuery,
  },
  Mutation: {
    ...userMutation,
    ...profileMutation,
  },
  // userResolver
  User: {
    ...userResolvers,
  },
  Profile: {
    ...profileResolvers,
  },
};
