import express from "express";
import cors from "cors";
import services from "./services/index.js";
import createDefaultTables from "./scripts/create-tables.js";

const { PORT } = process.env;

const server = express();
server.use(express.json());
server.use(cors());
server.use("/", services);

server.listen(PORT, async () => {
    await createDefaultTables();
    console.log(`Server running at ${PORT}/`);
  });
server.on("error", (error) => console.log(`Server is failed  :  ${error}`))