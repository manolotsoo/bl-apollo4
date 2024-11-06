import { QueryProfileByIdArgs } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const profileById = (args: QueryProfileByIdArgs) => {
  const { id } = args;
  return prisma.profile.findUnique({
    where: {
      id,
    },
  });
};
