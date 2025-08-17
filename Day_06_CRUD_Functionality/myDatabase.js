const { MongoClient } = require("mongodb");
require("dotenv").config();
const url = process.env.URL;
let client = new MongoClient(url);

let dbConnection = async () => {
  await client.connect();

  return client.db("MyDatabase_6");
};

module.exports = { dbConnection };
