import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationCreateUserArgs,
  MutationDeleteUserArgs,
  MutationResolvers,
  MutationUpdateUserArgs,
  User,
} from "../../../__generated__/types";

const users: User[] = [
  {
    id: 1,
    email: "manolotsoadaniel@gmail.com",
    password: "1234567890",
  },
  {
    id: 2,
    email: "tilt@gmail.com",
    password: "0987654321",
  },
];
const prisma = new PrismaClient();

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userMutation: MutationResolvers = {
  createUser: async (_: any, args: MutationCreateUserArgs, context: any) => {
    const { input } = args;
    const user = await prisma.user.create({
      data: { ...input, profile: undefined },
    });
    return user;
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
    return user;
  },
  deleteUser: async (_: any, args: MutationDeleteUserArgs, context: any) => {
    const { id } = args;
    const dataToDelete: Prisma.UserDeleteArgs = {
      where: {
        id,
      },
    };
    const user = await prisma.user.delete(dataToDelete);
    return user;
  },
};
