//1. require a database
var mongoose = require("mongoose");

//2. connect to database
mongoose.connect("mongodb://localhost/blog_demo");

/*3. define DATABASE model or schema
a. user: email, name
b. POST: title, content
*/
var userSchema = new mongoose.Schema({
    name: String,
    email: String
});

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//4. create DATA model from the schema
var User = mongoose.model("User", userSchema); //User will be the name of the table while userSchema will be the model it uses to create the User table
var postModel = mongoose.model("Post", postSchema); //Post will be the name of the table while postSchema will be the model it uses to create the Post table