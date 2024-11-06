import { User } from "@prisma/client";
import { MutationSignUpArgs } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";
import { genSaltSync, hashSync } from "bcrypt";

export const signUp = async (args: MutationSignUpArgs) => {
  const salt = genSaltSync(10);
  const { input } = args;
  const userToSignUp = {
    ...input,
    password: hashSync(input.password, salt),
    profile: undefined,
  };

  const user = await prisma.user.create({
    data: {
      ...userToSignUp,
    },
  });
  return user as User;
};
