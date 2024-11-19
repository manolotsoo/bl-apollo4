import { GraphQLError } from "graphql/error/GraphQLError";
import {
  AuthResponse,
  MutationSignInArgs,
  User,
} from "../../../__generated__/types";
import { userByEmail } from "./userByEmail";
import { compare } from "bcrypt";
import { generateToken } from "./generateToken";

export const signIn: (
  args: MutationSignInArgs
) => Promise<AuthResponse> = async (args) => {
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
    return {
      accessToken: generateToken(data, "AccessToken"),
      refreshToken: generateToken(data, "RefreshToken"),
    } as AuthResponse;
  } catch (error: any) {
    throw error as GraphQLError;
  }
};
