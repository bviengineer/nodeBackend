/* 
Express Routing Assignment

1. Create a brand new express app from scratch
2. Create a package.json using 'npm init' and add express as a dependency
3. In your main app.js file, add 3 different routes

Visiting "/" should print "Hi there, welcome to my assignment"
===============================================================
a. Visting "/speak/pig" should print "The pig says 'Oink'"
b. Visiting "/speak/cow" should print "The cows says 'Moo'"
c. Visting "/speak/dog" should print "The dog says 'Woof Woof!'"
=================================================================
a. Visiting "/repeat/hello/3" should print "hello hello hello"
b. Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
c. Visiting "/repeat/blah/2" should print "blah blah"

If a user visits any other route, print:
"Sorry, page not found ...What are you doing with your life?"

*/

//importing of express module
var express = require("express"),
    app = express();

//ROUTES
/* 
    MY method which is not incorrect but can be refactored to better follow the DRY principle, as overtime, as animals and sounds are added, the else if will become long and convaluded
    
    app.get("/speak/:pageRequested", function(req, res){
    var userSelection = req.params.pageRequested.toUpperCase();
    
    if(userSelection =="PIG"){
        res.send("The " + userSelection.toLowerCase() + " says \"Oink\"");
    } else if(userSelection == "COW"){
        res.send("The " + userSelection.toLowerCase() + " says \"Moo\"");     
    } else if(userSelection == "DOG"){
        res.send("The " + userSelection.toLowerCase() + " says \"Woof Woof\"");
    }
 }); */


//Colt's method which better follows the DRY principle
app.get("/speak/:pageRequested", function(req, res){
    var userSelection = req.params.pageRequested.toUpperCase();
    
    var animalsInfo = {
        PIG: "Oink",
        COW: "Moo",
        DOG: "Woof Woof"
    }
  
    res.send("The " + userSelection.toLowerCase() + " says " + animalsInfo[userSelection]);    
});


app.get("/repeat/hello/:pageRequested", function(req, res){
    var userSelection = parseInt(req.params.pageRequested);
    var outPut = "hello";
    for(var i = 1; i < userSelection; i++){
        outPut += " hello ";
    }
    res.send(outPut);
});

app.get("/repeat/blah/:pageRequested", function(req, res){
    var userSelection = parseInt(req.params.pageRequested);
    var outPut = "blah";
    for(var i = 1; i < userSelection; i++){
        outPut += " blah ";
    }
    console.log(outPut);
    res.send(outPut);
});


app.get("*", function(req, res){
    res.send("Sorry, page not found ...What are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Express Server Has Started");    
});