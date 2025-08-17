let express = require("express");
let cors = require("cors");
require("dotenv").config();
let app = express();
app.use(express.json());
const { dbConnection } = require("./myDatabase");
const { ObjectId } = require("mongodb");

//Allowing to use the API in diffent files and folders without causing cors error
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

//This is the function to get data declared only because optional parameters are not working ,will find the reason..
let getRequest = async (request, response) => {
  try {
    let mydb = await dbConnection();
    let dbcollections = mydb.collection("dataBase_6");
    let { id } = request.params;
    let data;
    if (id) {
      // Checking if the id exist or provided  in the url
      if (!ObjectId.isValid(id)) {
        // check if id is valid or not
        return response.send({
          status: 0,
          msg: "Invalid id",
        });
      }
      data = await dbcollections.find({ _id: new ObjectId(id) }).toArray(); // if id exist and valid than set the data to the id data
    } else {
      data = await dbcollections.find().toArray(); // if id is not exist in url or not valid than set the whole database
    }
    response.send({
      status: 1,
      msg: "Data Fetched Sucessfully..",
      data,
    });
  } catch (error) {
    // do this if something goes wrong
    response.send("Something went wrong..");
  }
};

//This is get request block
app.get("/get-data/:id", getRequest);
app.get("/get-data", getRequest);

//This is the post request block
app.post("/post-data", async (request, response) => {
  try {
    let mydb = await dbConnection(); // connecting to the database and waiting until connction is established
    let dbcollections = mydb.collection("dataBase_6"); //creating or using the database as "database_6"
    let { name, age, email } = request.body; // destructring the data from body
    let obj = {
      name,
      age,
      email,
    };
    let postData = await dbcollections.insertOne(obj);
    response.status(201).send({
      status: 1,
      msg: "Post request sucessfull..",
      postData,
    });
  } catch (error) {
    response.send({
      status: 0,
      msg: "Something went wrong..",
    }); // Send this error code "500" and return and oject
  }
});

// This is the Delete request block;
app.delete("/delete-data/:id", async (request, response) => {
  try {
    const mydb = await dbConnection(); // Establish connection
    const dbcollections = mydb.collection("dataBase_6");
    let { id } = request.params; //Acessing the id from url

    let deleteData = await dbcollections.deleteOne({ _id: new ObjectId(id) }); // deleting the data
    response.send({
      status: 1,
      msg: "Data deleted Sucesfully",
      deleteData,
    });
  } catch (error) {
    //Throwing the error if something went wrong.
    response.send({
      status: 0,
      msg: "Something went wrong..",
    });
  }
});

app.put("/update-data/:id", async (request, response) => {
  try {
    let db = await dbConnection();
    let dbcollections = db.collection("dataBase_6");

    let { id } = request.params;
    let { name, age, email } = request.body;
    let obj = {
      name,
      age,
      email,
    };

    let updateData = await dbcollections.updateOne(
      { _id: new ObjectId(id) },
      { $set: obj }
    ); // Finding the id and updating the values

    response.send({
      status: 1,
      msg: "Data updated Sucessfully..",
      updateData,
    });

  } catch (error) {
    response.send({
      status: 0,
      msg: "Something went wrong..",
    });
  }
});


app.listen(process.env.PORT); // Listening the port
