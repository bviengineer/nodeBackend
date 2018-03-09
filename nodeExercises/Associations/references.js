//1. require a database
var mongoose = require("mongoose");


//2. connect to database
mongoose.connect("mongodb://localhost/blog_demo_2");


/*3. define DATABASE model or schema
a. user: email, name
b. POST: title, content
*/

//postSchema listed above userSchema b/c userSchema is referencing postSchema in its post key/value pair which needs to be declared first
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [
        {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Post"
        }
        ]
});

//4. create DATA model from the schema
var User = mongoose.model("User", userSchema); //User will be the name of the table while userSchema will be the model it uses to create the User table
var Post = mongoose.model("Post", postSchema); //Post will be the name of the table while postSchema will be the model it uses to create the Post table

