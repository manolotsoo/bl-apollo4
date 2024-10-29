import { QueryResolvers } from "../../../__generated__/types";

const books = [
  {
    title: "The Awakening setset",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const bookQuery: QueryResolvers = {
  Query: {
    books: (parent: any, args: any, context: any) => books,
  },
};
