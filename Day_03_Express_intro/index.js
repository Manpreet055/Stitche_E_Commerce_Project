// const { response } = require("express");
// let http = require("http");

// let server = http.createServer((req, res) => {
//   if (req.url == "/about") {
//     res.end("You are at About Page..");
//   }
//   if (req.url == "/") {
//     res.end("You are at home Page..");
//   }
//   if (req.url == "/contact") {
//     res.end("You are at contact Page..");
//   }
//   if (req.url == "/products") {
//     res.end("You are at products Page..");
//   }
// });

// server.listen("7000");

let express = require("express");
require("dotenv").config();
let app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Your are at Home page ..");
});
app.get("/about", (req, res) => {
  res.send("Your are at About page ..");
});

app.get("/contact/:Id", (req, res) => {
  //   let currentId = req.params.Id; This is how to use Parameters
  res.send("Your are at Contact page .." + currentId);
});

app.post("/login", (req, res) => {
// req.status(200,res.send(JSON.stringify(req.body)))
res.send(req.query)
});

app.listen(process.env.PORT);
