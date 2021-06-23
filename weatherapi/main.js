const { on } = require("events");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
        


});

app.post("/",function(req,res) {
    
     

    const apikey="54d09798c9d9bf0afa21538dbecc0c8a";

        const place=(req.body.city_name);;

    var url="https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+ apikey +"&units=metric";
    https.get(url,function(response) {
            console.log(response.statusCode);
            response.on("data",function(data) {
                const all = JSON.parse(data);
                const current = all.weather[0].main;
                const temp =all.main.temp
                const icon = all.weather[0].icon
                res.write("<h1>the weather in "+place+" "+ current +"</h1>");
                res.write("<h1>the Temprature today will be "+ temp +"</h1>");
                res.write("<img src=http://openweathermap.org/img/wn/"+icon+"@2x.png>");
                res.send();
            });
    });


});




app.listen(3000, function(){
    console.log("hey your server is running");
})