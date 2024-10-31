import { Profile, QueryResolvers, User } from "../../../__generated__/types";

const user: User[] = [
  {
    id: 1,
    email: "manolotsoadaniel@gmail.com",
    password: "1234567890",
  },
  {
    id: 2,
    email: "tilt@gmail.com",
    password: "0987654321",
  },
];

const profiles: Profile[] = [
  {
    id: 1,
    user: user[0] as User,
    name: "Manou",
  },
  {
    id: 1,
    user: user[1] as User,
    name: "Tilt",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const profileQuery: QueryResolvers = {
  profiles: (_: any, __: any, context: any) => profiles,
};
