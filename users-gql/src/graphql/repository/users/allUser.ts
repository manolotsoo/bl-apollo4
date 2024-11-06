import { prisma } from "../../../db/prisma";

export const allUsers = () => {
  return prisma.user.findMany();
};
