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

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
