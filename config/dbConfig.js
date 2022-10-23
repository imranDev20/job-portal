const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k8znc.mongodb.net/jobPortal?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connect successfully".bold.cyan);
  })
  .catch((err) => {
    console.log(err);
  });
