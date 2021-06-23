const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

var items = ["brush","eat","work"];

app.get("/", function (req, res) {

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var today = new Date();
    var days = today.toLocaleDateString("en-US", options);
    
    res.render("dayList", {today:days, aitem: items});


});


app.post("/", function (req,res) {
   
    var item = req.body.add;
    items.push(item);
    res.redirect("/");

});













app.listen(3000, function () {
    console.log("server is up sir");
});