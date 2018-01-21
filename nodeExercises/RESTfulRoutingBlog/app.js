var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
//APP CONFIG    
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//MONGOOSE/MODEL CONFIG 
var blogSchema = new mongoose.Schema({
    title: String,
    image:  String, 
    body:   String,
    created:    {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog Post",
//     image: "https://cdn.pixabay.com/photo/2014/10/26/15/03/garden-by-the-bay-503897_960_720.jpg",
//     body:   "Hello, this is a test blog post" 
// });

//RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res ){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!");
        } else {
            res.render("index", {blogsContainer: blogs});        
        }
    });
    
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING");
});