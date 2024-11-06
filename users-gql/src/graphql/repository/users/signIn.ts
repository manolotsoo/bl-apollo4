import { GraphQLError } from "graphql/error/GraphQLError";
import { MutationSignInArgs } from "../../../__generated__/types";
import { userByEmail } from "./userByEmail";
import { compare } from "bcrypt";

export const signIn = async (args: MutationSignInArgs) => {
  const { email, password } = args.input;
  try {
    const user = await userByEmail({ email });
    const match = await compare(password, user.password);
    return String(match);
  } catch (error: any) {
    throw error as GraphQLError;
  }
};
