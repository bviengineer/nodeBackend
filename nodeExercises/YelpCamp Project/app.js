var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {
            name: "Salmon Creek", 
            image: "https://cdn.pixabay.com/photo/2017/09/10/15/04/the-chusovaya-river-2735864_960_720.jpg"
        },
        {
            name: "Granite Hill", 
            image: "https://cdn.pixabay.com/photo/2016/07/29/08/23/camp-1551246_960_720.jpg"
        },
        {
            name: "Mountain Goat's Rest", 
            image: "https://cdn.pixabay.com/photo/2016/07/29/08/25/camp-1551271_960_720.jpg"
        }
    ]
    
    res.render("campgrounds", {campgroundsContainer: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});