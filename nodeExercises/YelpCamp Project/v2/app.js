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
    image: String,
    description: String     
});

//model which will be used to create or model each entry and allow JS to use the mongoose models to interact with the mongo DB
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050__340.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful grante!"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     }    
// );

//ROUTES

//INDEX route - what users will see when they are on the home page
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    //get all campgrounds from DB and then render the file
    Campground.find({}, function(err, allCampgrounds){
            if(err) {
                console.log(err);
            } else {
                res.render("index", {campgroundsContainer: allCampgrounds});         
            }
    });
});

// CREATE route  - will add new campground to the database
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var newCampgroundName = req.body.newCampgroundName;
    var newCampgroundImage = req.body.newCampgroundImage;
    var newCampgroundDescription = req.body.description;
    var newCampgroundObject = {name: newCampgroundName, image: newCampgroundImage, description: newCampgroundDescription};
    // create a new camp    ground and save to the database
    Campground.create(newCampgroundObject, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");    // will redirect to the get campgrounds soute 
        }
    });

});

//NEW route - render that allows users to create a new route
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

//SHOW - will show information about one campground
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campgroundContainer: foundCampground});
            }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});


/* RESTFUL Routes Covered

[file] name     route name          HTTP VERB   Purpose/description
===================================================================================
INDEX           /campgrounds        GET         Display a list of all campgrounds
NEW             /campgrounds/new    GET         Displays form to submit a new campground
CREATE          /campground/        POST        Adds new campground to the DB
SHOW            /campgrounds/:id    GET         Shows info about one dog

*/


/* OLD ARRAY
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
     ]; */