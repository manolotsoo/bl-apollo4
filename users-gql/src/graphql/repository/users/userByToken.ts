import { decode } from "jsonwebtoken";
import { userById } from "./userById";
import { User, UserTokenized } from "../../../__generated__/types";

export const userByToken: (args: { token: string }) => UserTokenized = (args: {
  token: string;
}) => {
  const { token } = args;
  return decode(token) as UserTokenized;
};
