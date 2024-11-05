import { Prisma } from "@prisma/client";
import {
  MutationDeleteProfileArgs,
  Profile,
} from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const deleteProfile = async (args: MutationDeleteProfileArgs) => {
  const { id } = args;
  const dataToDelete: Prisma.ProfileDeleteArgs = {
    where: {
      id,
    },
  };
  const profile = await prisma.profile.delete(dataToDelete);
  return profile as unknown as Profile;
};
