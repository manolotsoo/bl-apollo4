import {
  QueryResolvers,
  QueryUserByEmailArgs,
  QueryUserByIdArgs,
  QueryUserByTokenArgs,
} from "../../../__generated__/types";
import { userById, userByToken } from "../../repository/users";
import { userByEmail } from "../../repository/users/userByEmail";
import { allUsers } from "../../repository/users/allUser";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const userQuery: QueryResolvers = {
  users: (_: any, __: any, ___: any) => {
    return allUsers();
  },
  userById: (_: any, queryArgs: QueryUserByIdArgs, context: any) => {
    return userById(queryArgs);
  },
  userByEmail: (_: any, queryArgs: QueryUserByEmailArgs, __: any) => {
    return userByEmail(queryArgs);
  },
  userByToken: (_: any, queryArgs: QueryUserByTokenArgs, __: any) => {
    return userByToken(queryArgs);
  },
};
