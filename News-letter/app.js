const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const https = require("https");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
//the public folder with css and images
app.use(express.static("public"));
//mail chimp confi
mailchimp.setConfig({
    apiKey: "35930b7d03ac0cfb11b8515c9cbca75e-us1",
    server: "us1"

});


//the home page sent

app.get("/", function(req,res){
    res.sendFile(__dirname+"/singup.html");
});

app.get("/failure.html", function(req,res) {

    res.sendFile(__dirname+"/singup.html");
    
})

//post req


app.post("/",function(req,res) {
   //getting data from html page
    var firstName , secondName , emails ;
    fname= req.body.first;
    sname= req.body.second;
    emails= req.body.email
    //mail chimp config
    mailchimp.setConfig({
        apiKey: "35930b7d03ac0cfb11b8515c9cbca75e-us1",
        server: "us1",
      });
      //making new list item
    const listId = "2315d3f9a6";
    const newMem = {
        firstName: fname,
        lastName: sname,
        email: emails
      };
      //making post req to the server 
        async function run() {
            const response = await mailchimp.lists.addListMember(listId, {
              email_address: newMem.email,
              status: "subscribed",
              merge_fields: {
                FNAME: newMem.firstName,
                LNAME: newMem.lastName
              }
            });
            //if everything is fine
            res.sendFile(__dirname+"/sucess.html");
          }
          //error
      run().catch(e =>  res.sendFile(__dirname+"/failure.html"));
      
});
    //server port listner
    app.listen(3000,function(){
    console.log("server is up");
});

//api-key
//35930b7d03ac0cfb11b8515c9cbca75e-us1
//list id
//2315d3f9a6