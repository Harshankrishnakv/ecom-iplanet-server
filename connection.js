require("dotenv").config();
const URL = process.env.MONGO_URL;

const mongoose = require("mongoose");

mongoose
  .connect(URL, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
