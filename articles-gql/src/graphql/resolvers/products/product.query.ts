import { Product, QueryResolvers } from "../../../__generated__/types";

const products: Product[] = [
  {
    id: 1,
    description: "description 1",
    image: "https://image_1",
    label: "product 1",
    price: 12000,
    user: "user1",
  },
  {
    id: 2,
    description: "description 2",
    image: "https://image_2",
    label: "product 2",
    price: 22000,
    user: "user2",
  },
  {
    id: 3,
    description: "description 3",
    image: "https://image_3",
    label: "product 3",
    price: 32000,
    user: "user3",
  },
  {
    id: 4,
    description: "description 4",
    image: "https://image_4",
    label: "product 4",
    price: 42000,
    user: "user4",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const productQuery: QueryResolvers = {
  products: (_: any, __: any, context: any) => products,
};
