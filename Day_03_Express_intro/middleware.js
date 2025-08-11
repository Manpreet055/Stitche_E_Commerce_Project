let express = require("express");
let app = express();
require("dotenv").config();
const tokenVerify = (req, res, next) => {
  if (req.query.token == "12345") {
    next();
  } else {
    return res.send({
      status: 0,
      msg:"Give token is invalid!!"
    });
  }
  // Do not call next() after sending a response
};

app.use(tokenVerify);

app.get("/",tokenVerify, (req,res)=>{
    res.send({
      status: 1,
      mdg:"Token verified"
    });
})

app.listen(process.env.PORT);
