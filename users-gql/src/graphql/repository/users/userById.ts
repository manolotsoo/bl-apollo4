import { QueryUserByIdArgs } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const userById = (args: QueryUserByIdArgs) => {
  const { id } = args;
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};
