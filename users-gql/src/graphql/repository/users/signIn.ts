import { GraphQLError } from "graphql/error/GraphQLError";
import { MutationSignInArgs, User } from "../../../__generated__/types";
import { userByEmail } from "./userByEmail";
import { compare } from "bcrypt";
import { generateToken } from "./generateToken";

export const signIn = async (args: MutationSignInArgs) => {
  const { email, password } = args.input;
  try {
    const user = (await userByEmail({
      email,
    })) as User;

    const match = await compare(password, user?.password);
    const data = {
      id: user?.id,
      name: user?.name,
      email: user?.email,
    };
    if (!match) {
      throw new GraphQLError(`email or password doesn't match`, {
        extensions: {
          code: "CREDENTIAL_NOT_MATCH",
        },
      });
    }
    return generateToken(data, "AccessToken");
  } catch (error: any) {
    throw error as GraphQLError;
  }
};
