import { MyContext } from "../../..";
import {
  MutationAddProductArgs,
  MutationResolvers,
  Product,
} from "../../../__generated__/types";
import { addProduct } from "../../repository/addProduct";

export const productMutation: MutationResolvers = {
  addProduct: (_: any, args: MutationAddProductArgs, context: MyContext) => {
    return addProduct(args) as unknown as Product;
  },
};
