import { GraphQLError } from "graphql";
import {
  QueryResolvers,
  QueryUserByEmailArgs,
  QueryUserByIdArgs,
  User,
} from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

const users: User[] = [
  {
    id: "1",
    email: "manolotsoadaniel@gmail.com",
    password: "1234567890",
  },
  {
    id: "2",
    email: "tilt@gmail.com",
    password: "0987654321",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userQuery: QueryResolvers = {
  users: (parent: any, args: any, context: any) => users,
  userById: (_: any, queryArgs: QueryUserByIdArgs, context: any) => {
    const { id } = queryArgs;
    const userFound = users?.find((user) => user?.id === id);
    return userFound as User;
  },
  userByEmail: async (_: any, queryArgs: QueryUserByEmailArgs, __: any) => {
    const { email } = queryArgs;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new GraphQLError(`User with email ${email} not found`, {
        extensions: {
          code: "USER_NOT_FOUND",
        },
      });
    }
    return user as unknown as User;
  },
};
