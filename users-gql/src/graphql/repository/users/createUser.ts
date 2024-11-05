import { MutationCreateUserArgs } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const createUser = (args: MutationCreateUserArgs) => {
  const { input } = args;
  return prisma.user.create({
    data: { ...input, profile: undefined },
  });
};
