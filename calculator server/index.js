const express = require("express");
const bodyParser= require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/",function(req,res){
        res.sendFile(__dirname+"/bmi.html");
});
app.post("/",function(req,res){
    var num1= parseInt((req.body.weight));
    var num2=  parseInt((req.body.height));
    var bmi = num1/(Math.pow(num2,2));
    res.send("yourr bmi is "+bmi);
});
app.listen("3000",function(){
    console.log("server is up running");
});