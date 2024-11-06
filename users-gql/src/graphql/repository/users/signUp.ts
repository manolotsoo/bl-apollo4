import { User } from "@prisma/client";
import { MutationSignUpArgs } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const signUp = async (args: MutationSignUpArgs) => {
  const { input } = args;
  const user = await prisma.user.create({
    data: {
      ...input,
      profile: undefined,
    },
  });
  return user as User;
};
