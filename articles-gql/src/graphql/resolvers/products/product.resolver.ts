import { MyContext } from "../../../";
import { Product, ProductResolvers } from "./../../../__generated__/types";

export const productResolvers: ProductResolvers<MyContext> = {
  id: (parent: Product) => {
    return parent?.id as number;
  },
  description: (parent: Product) => {
    return parent?.description as string;
  },
  image: (parent: Product) => {
    return parent?.image as string;
  },
  label: (parent: Product) => {
    return parent?.label as string;
  },
  price: (parent: Product) => {
    return parent?.price as number;
  },
  user: (parent: Product) => {
    return parent?.user as string;
  },
};
