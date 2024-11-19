import { JsonWebTokenError, TokenExpiredError, verify } from "jsonwebtoken";
import { UserTokenized } from "../../../__generated__/types";
import { JWT_SECRET_KEY } from "../../../config/credentials";
import { GraphQLError } from "graphql";

export const userByToken: (args: { token: string }) => UserTokenized = (args: {
  token: string;
}) => {
  try {
    const { token } = args;
    return verify(token, JWT_SECRET_KEY) as UserTokenized;
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      throw new GraphQLError("Token expired", {
        extensions: { code: "TOKEN_EXPIRED" },
      });
    }
    if (error instanceof JsonWebTokenError) {
      throw new GraphQLError("Invalid token", {
        extensions: { code: "INVALID_TOKEN" },
      });
    }
    throw new GraphQLError("Authentication error");
  }
};
