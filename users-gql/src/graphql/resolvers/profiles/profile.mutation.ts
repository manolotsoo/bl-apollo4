import {
  MutationCreateProfileArgs,
  MutationDeleteProfileArgs,
  MutationResolvers,
  MutationUpdateProfileArgs,
} from "../../../__generated__/types";
import {
  createProfile,
  deleteProfile,
  updateProfile,
} from "../../repository/profiles";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const profileMutation: MutationResolvers = {
  createProfile: async (_: any, args: MutationCreateProfileArgs, __: any) =>
    createProfile(args),
  updateProfile: async (_: any, args: MutationUpdateProfileArgs, __: any) =>
    updateProfile(args),
  deleteProfile: async (_: any, args: MutationDeleteProfileArgs, __: any) =>
    deleteProfile(args),
};
