let mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log("Database Connected Sucessfully..")) // Trying to connect to the database and sending response
  .catch((err) => console.log(err.message)); //throwing error if something went wrong

//Defining Schema of the API
let ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

let Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
