import { ProfileResolvers, User } from "../../../__generated__/types";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const profileResolvers: ProfileResolvers = {
  id: (parent: any) => {
    return parent?.id;
  },
  name: (parent: any) => {
    return parent?.name;
  },
  user: (parent: any) => {
    return parent?.user as User;
  },
};
