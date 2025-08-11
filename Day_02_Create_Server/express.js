let express = require("express");
let app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("You are at home page")
})
app.get("/contact",(req,res)=>{
    res.send("You are at contact page")
})
app.get("/about",(req,res)=>{
    res.send("You are at about page")
})

app.post("/login",(req,res)=>{
    res.send("You are at login page..")
})

app.listen("9000")
