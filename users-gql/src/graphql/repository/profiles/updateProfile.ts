import {
  MutationUpdateProfileArgs,
  Profile,
} from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const updateProfile = async (args: MutationUpdateProfileArgs) => {
  const { name, user, id } = args;
  const profile = await prisma.profile.update({
    data: {
      name,
      userId: user.id as string,
    },
    where: {
      id,
    },
  });
  return profile as unknown as Profile;
};
