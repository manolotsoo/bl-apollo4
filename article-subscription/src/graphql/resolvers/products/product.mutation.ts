import { MyContext } from "../../..";
import {
  MutationCreatePostArgs,
  MutationResolvers,
} from "../../../__generated__/types";

export const productMutation: MutationResolvers = {
  createPost: (_: any, args: MutationCreatePostArgs, __: MyContext) => {
    return JSON.stringify(args);
  },
};
