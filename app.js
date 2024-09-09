const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

//? Database Connection
const connectDB = require("./db");
connectDB();

//? Middleswares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//? Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("APP is running on the Server");
});

//? Starting Server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
