import { User } from "@prisma/client";
import {
  CreateProfileInput,
  MutationCreateProfileArgs,
  Profile,
} from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const createProfile = async (args: MutationCreateProfileArgs) => {
  const { name, user } = args.input as CreateProfileInput;
  const profile = await prisma.profile.create({
    data: {
      name,
      userId: user?.id as string,
    },
  });
  return profile as unknown as Profile;
};
