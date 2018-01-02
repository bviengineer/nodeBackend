var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!");
});
// "/dog" => "Woof"
app.get("/dog", function(req, res){
    res.send("Woof!");
});

app.get("/:bvidevsubpage", function(req, res){
    console.log(req.params);
    var params = req.params.bvidevsubpage;
    res.send("This page was returned using a dynamic route created in Express. " + params + "was the name of the page you selected");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");    
});