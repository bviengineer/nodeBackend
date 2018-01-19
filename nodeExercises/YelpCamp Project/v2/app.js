var express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose");


// ./mongod to run mongod service from command prompt
mongoose.connect("mongodb://localhost/yelp_camp"); 
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP - schmea
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

//model which will be used to create or model each entry and allow JS to use the mongoose models to interact with the mongo DB
var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    //get all campgrounds from DB and then render the file
    Campground.find({}, function(err, allCampgrounds){
            if(err) {
                console.log(err);
            } else {
                res.render("campgrounds", {campgroundsContainer: allCampgrounds});         
            }
    });
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var newCampgroundName = req.body.newCampgroundName;
    var newCampgroundImage = req.body.newCampgroundImage;
    var newCampgroundObject = {name: newCampgroundName, image: newCampgroundImage};
    // create a new camp    ground and save to the database
    Campground.create(newCampgroundObject, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");    // will redirect to the campgrounds get route 
        }
    });
});

//route to render a form to create a new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});