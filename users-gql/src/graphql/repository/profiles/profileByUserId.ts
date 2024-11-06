import { Profile } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

export const profileByUserId = (userId: string) => {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
  }) as unknown as Profile;
};
