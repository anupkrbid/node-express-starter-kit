import express from "express";

import { config } from "./configs";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.PORT, () => {
  console.log("Server is running on port 3000");
  console.log("Press Ctrl+C to stop the server");
});
