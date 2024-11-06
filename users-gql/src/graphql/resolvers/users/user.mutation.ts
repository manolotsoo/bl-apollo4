import { Prisma } from "@prisma/client";
import {
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationResolvers,
  MutationSignInArgs,
  MutationSignUpArgs,
  MutationUpdateUserArgs,
  User,
} from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";
import { signUp } from "../../repository/users";
import { signIn } from "../../repository/users/signIn";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userMutation: MutationResolvers = {
  createUser: async (_: any, args: MutationCreateUserArgs, __: any) => {
    const { input } = args;
    const user = await prisma.user.create({
      data: {
        ...input,
        profile: undefined,
      },
    });
    return user as unknown as User;
  },
  updateUser: async (_: any, args: MutationUpdateUserArgs, context: any) => {
    const { id, input } = args;
    const dataUpdated: Prisma.UserUpdateInput = {
      ...input,
      profile: undefined,
    };
    const user = await prisma.user.update({
      data: dataUpdated,
      where: {
        id,
      },
    });
    return user as unknown as User;
  },
  deleteUser: async (_: any, args: MutationDeleteUserArgs, context: any) => {
    const { id } = args;
    const dataToDelete: Prisma.UserDeleteArgs = {
      where: {
        id,
      },
    };
    const user = await prisma.user.delete(dataToDelete);
    return user as unknown as User;
  },
  signUp: (_: any, args: MutationSignUpArgs, context: any) => {
    return signUp(args);
  },
  signIn: (_: any, args: MutationSignInArgs, context: any) => {
    return signIn(args);
  },
};
