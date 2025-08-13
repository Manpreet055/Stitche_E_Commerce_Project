let express = require("express");
const { myDatabaseConnection } = require("./myDatabase");
let app = express();

app.use(express.json());

app.get("/show-data", async (request, response) => {
  let myDB = await myDatabaseConnection();
  let collection = myDB.collection("users");

  let data = await collection.find().toArray();

  response.send({
    status: 1,
    msg: "Data Fetched ..",
    data,
  });
});

app.post("/insert-data", async (request, response) => {
  let myDB = await myDatabaseConnection();
  let collection = myDB.collection("users");
  let { name, age, email } = request.body;
  let obj = {
    name,
    age,
    email,
  };
  let duplicateEmail = collection.findOne({ email: email });
  if (duplicateEmail) {
    response.status(400).send("Duplicate Email Found...");
    return;
  }
  let insertData = await collection.insertOne(obj);
  response.send({
    status: 1,
    msg: "Data inserted succesfully",
    insertData,
  });
});

app.listen("3000");
