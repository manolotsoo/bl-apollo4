import { GraphQLError } from "graphql";
import { QueryUserByEmailArgs, User } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const userByEmail = async (args: QueryUserByEmailArgs) => {
  const { email } = args;
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
};
