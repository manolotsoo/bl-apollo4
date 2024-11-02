import { PrismaClient } from "@prisma/client";

import {
  MutationCreateUserArgs,
  MutationResolvers,
  QueryResolvers,
  QueryUserByIdArgs,
  User,
  UserInput,
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
    console.log("user ", user);

    return user;
  },
};
