import { Profile, QueryResolvers } from "../../../__generated__/types";
import { prisma } from "../../../db/prisma";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const profileQuery: QueryResolvers = {
  profiles: (_: any, __: any, context: any) => {
    return prisma.profile.findMany() as unknown as Profile[];
  },
};
