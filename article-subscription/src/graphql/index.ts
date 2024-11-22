import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

// Load all .gql files from the schemas directory
const typesArray = loadFilesSync(__dirname + "/schemas", {
  extensions: ["gql"],
});

const typeDefs = mergeTypeDefs(typesArray);

const schema = makeExecutableSchema({
  typeDefs,
});

export default schema;
