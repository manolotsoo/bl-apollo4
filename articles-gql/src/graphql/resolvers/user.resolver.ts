const users: any[] = [
  {
    id: "1",
    email: "kate@gmail.com",
    password: "asdf",
  },
];
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves users from the "users" array above.
export const userResolvers = {
  Query: {
    users: () => users,
  },
};
