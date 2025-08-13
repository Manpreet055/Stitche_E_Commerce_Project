const { MongoClient } = require("mongodb");
const Databaseurl = "mongodb://127.0.0.1:27017";

let client = new MongoClient(Databaseurl);

let myDatabaseConnection = async () => {
  await client.connect();
  return client.db("MyDatabase");   
};

module.exports = { myDatabaseConnection };
