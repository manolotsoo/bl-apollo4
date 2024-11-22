import schema from "./index";
import { printSchema } from "graphql";
import fs from "fs";
import path from "path";

// Define the path where you want to save the schema
const schemaPath = path.join(__dirname, "schemas/schema.graphql");

// Ensure the directory exists
fs.mkdirSync(path.dirname(schemaPath), { recursive: true });

// Export the merged schema to a single .graphql file
fs.writeFileSync(schemaPath, printSchema(schema), { encoding: "utf-8" });
