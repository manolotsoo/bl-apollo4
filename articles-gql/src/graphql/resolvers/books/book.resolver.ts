import { MyContext } from "../../../";
import { BookResolvers } from "./../../../__generated__/types";

export const bookResolvers: BookResolvers<MyContext> = {
  author: (parent) => {
    // Here, `parent` represents the Book object, so `parent.author` would typically hold the author's name
    return parent?.author || null;
  },
  title: (parent) => {
    // `parent.title` holds the title of the book
    return parent?.title || null;
  },
};
