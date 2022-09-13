const express = require("express");
const cors = require("cors");
const plantRouter = require("./routers/plants");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plants", plantRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
