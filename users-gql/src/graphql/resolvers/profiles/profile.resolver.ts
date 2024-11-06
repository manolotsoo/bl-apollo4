import {
  Profile,
  ProfileResolvers,
  QueryUserByIdArgs,
  User,
} from "../../../__generated__/types";
import { userById } from "../../repository/users";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const profileResolvers: ProfileResolvers = {
  id: (parent: any) => {
    return parent?.id;
  },
  name: (parent: any) => {
    return parent?.name;
  },
  userId: (parent: Profile) => {
    return parent?.userId as string;
  },
  user: (parent: Profile) => {
    return userById({
      id: parent.userId,
    } as QueryUserByIdArgs) as unknown as User;
  },
};
