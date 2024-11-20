import {
  PaginatedProducts,
  QueryProductsArgs,
  QueryResolvers,
} from "../../../__generated__/types";
import { listProducts } from "../../repository";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const productQuery: QueryResolvers = {
  products: (_: any, args: QueryProductsArgs, context: any) => {
    return listProducts(args) as unknown as PaginatedProducts;
  },
};
