import {
  JWT_SECRET_KEY,
  tokenExpireDateTime,
} from "../../../config/credentials";
import { TokenType } from "../../../extra.types";
import { sign } from "jsonwebtoken";

export const generateToken = (data: any, type: TokenType) => {
  return sign(data, JWT_SECRET_KEY, {
    algorithm: "HS256",
    expiresIn: tokenExpireDateTime[type] as string,
  });
};
