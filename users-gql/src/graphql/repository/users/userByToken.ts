import { decode } from "jsonwebtoken";
import { userById } from "./userById";
import { User } from "../../../__generated__/types";

interface UserByToken {
  token: string;
}

interface DataToken {
  id: string;
}

export const userByToken: (args: UserByToken) => User = (args: UserByToken) => {
  const { token } = args;
  const { id } = decode(token) as DataToken;
  return userById({ id }) as unknown as User;
};
