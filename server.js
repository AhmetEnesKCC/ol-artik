const express = require("express");

const cors = require("cors");

const parser = require("body-parser");
const bodyParser = require("body-parser");

const fs = require("node:fs");

const app = express();

const helmet = require("helmet");

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.post("/get-token", (req, res) => {
  const token = req.body.token;
  fs.writeFileSync("token.txt", token);
  return res.status(200).json({ message: "success" });
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("Server listening at port: " + port);
});
