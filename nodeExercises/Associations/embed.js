//1. require a database
var mongoose = require("mongoose");

//2. connect to database
mongoose.connect("mongodb://localhost/blog_demo");

/*3. define DATABASE model or schema
a. user: email, name
b. POST: title, content
*/

//postSchema listed above userSchema b/c userSchema is referencing postSchema in its post key/value pair which needs to be declared first
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//user schema
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});


//4. create DATA model from the schema
var User = mongoose.model("User", userSchema); //User will be the name of the table while userSchema will be the model it uses to create the User table
var postModel = mongoose.model("Post", postSchema); //Post will be the name of the table while postSchema will be the model it uses to create the Post table

//Creation of new user - Charlie
var newUser = new User({
    name: "Charlie Brown",
    email: "charlie@brown.edu" 
});

//Saving of new user - Charlie
newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

//Creation of new user - Hermione
var newUser = new User({
    name: "Hermione Granger",
    email: "hermione@somedomain.edu" 
});

//Addition of a post by Hermione's 
newUser.posts.push({
    title: "How to become a professional singer",
    content: "Go to a singing class or get specialized training from a professional vocalist"
});

//Saving of new user - Hermione
newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

//constructor for new post
var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

//saving new post to database
newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
}); 

//code to find a user in database & pushes a new post to the database after finding the user if there's no error
User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        //pushses a new "user-related" post to database if the finding of the specified user does not fail        
        user.posts.push({
            title: "Destination to visit",
            content: "British Virgin Islands located in the Caribbean."
        });
        //saves new post
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else{
                console.log(user);
            }
        });
    }  
});