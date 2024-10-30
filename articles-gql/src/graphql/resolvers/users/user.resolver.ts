import { User, UserResolvers } from "../../../__generated__/types";

const users: User[] = [
  {
    id: "1",
    email: "manolotsoadaniel@gmail.com",
    password: "1234567890",
  },
  {
    id: "2",
    email: "tilt@gmail.com",
    password: "0987654321",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userResolvers: UserResolvers = {
  User: {
    id: (parent: any) => {
      return parent?.id;
    },
    email: (parent: any) => {
      return parent?.email;
    },
    password: (parent: any) => {
      return parent?.password;
    },
  },
};
