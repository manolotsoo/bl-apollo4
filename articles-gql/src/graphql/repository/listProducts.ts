import { QueryProductsArgs } from "../../__generated__/types";
import { prisma } from "../../db/prisma";

export const listProducts = async (args: QueryProductsArgs) => {
  const { filter, page, pageSize, sort } = args;

  const skip = ((page || 1) - 1) * (pageSize || 10);
  // build filter variable
  const filters: Record<string, any> = {};
  // build orderBy variable
  const orderBy: Record<string, any> =
    sort?.label && sort?.direction
      ? {
          [sort.label]: sort.direction,
        }
      : {};

  // Add conditions to the `filters` object only when the corresponding filter exists.
  if (filter?.label) {
    filters.label = {
      contains: filter.label,
    };
  }

  if (filter?.user) {
    filters.user = {
      equals: filter.user,
    };
  }

  const [products, total] = await prisma.$transaction([
    prisma.product.findMany({
      where: filters,
      skip,
      take: pageSize || 10,
      orderBy,
    }),
    prisma.product.count({
      where: filters,
    }),
  ]);

  return { products, total, currentPage: page || 1, pageSize: pageSize || 10 };
};
