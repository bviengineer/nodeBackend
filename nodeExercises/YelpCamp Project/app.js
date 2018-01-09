var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//campgrounds array
var campgrounds = [
        {
            name: "Salmon Creek", 
            image: "https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412__340.jpg"
        },
        {
            name: "Granite Hill", 
            image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050__340.jpg"
        },
        {
            name: "Mountain Goat's Rest", 
            image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197__340.jpg"
        }
    ]

//ROUTES
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgroundsContainer: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var newCampgroundName = req.body.newCampgroundName;
    var newCampgroundImage = req.body.newCampgroundImage;
    var newCampgroundObject = {name: newCampgroundName, image: newCampgroundImage};
    campgrounds.push(newCampgroundObject);
    //redirecdt back to campgrons page 
    res.redirect("/campgrounds"); //will redirect to the campgrounds page declared in the app.get route
});

//route to render a form to create a new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});