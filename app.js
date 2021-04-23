const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// My Routes
const ContactRoutes = require("./routes/contactdata")

// Db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })  
  .then(() => { 
    console.log("DB CONNECTED");
  });
// Middelware
app.use(bodyParser.json());
// Routes
app.use("/api",ContactRoutes) 

// port
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
