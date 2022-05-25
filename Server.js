const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/todoRoutes")

app.use(express.json())
app.use(cors())
app.use(routes)

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

app.listen("5001", () => {
  console.log("Server is running on port 5001");
});
