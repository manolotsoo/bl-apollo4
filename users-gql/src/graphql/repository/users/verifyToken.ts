import { userByToken } from "./userByToken";

export const verifyToken: (args: {
  token: string;
}) => Promise<boolean> = async (args: { token: string }) => {
  try {
    const { token } = args;
    const { id } = await userByToken({ token });
    if (!id) {
      return false;
    }
    return true;
  } catch (_) {
    return false;
  }
};
