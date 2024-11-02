import { UserResolvers } from "../../../__generated__/types";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userResolvers: UserResolvers = {
  id: (parent: any) => {
    return parent?.id;
  },
  email: (parent: any) => {
    return parent?.email;
  },
  password: (parent: any) => {
    return parent?.password;
  },
  name: (parent: any) => {
    return parent?.name;
  },
  profile: (parent: any) => {
    return parent?.profile;
  },
};
