import { Profile, User, UserResolvers } from "../../../__generated__/types";
import { profileByUserId } from "../../repository/profiles";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userResolvers: UserResolvers = {
  id: (parent: User) => {
    return parent?.id as string;
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
  profile: (parent: User) => {
    return profileByUserId(parent.id as string) as unknown as Profile;
  },
};
