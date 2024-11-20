import { MutationAddProductArgs } from "../../__generated__/types";
import { prisma } from "../../db/prisma";

export const addProduct = (input: MutationAddProductArgs) => {
  return prisma.product.create({
    data: input,
  });
};
