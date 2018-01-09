var express = require("express"),
    app = express(),
    request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    request("http://www.omdbapi.com/?apikey=thewdb&s=" + query, function(error, response, body){
          if(!error && response.statusCode == 200){
              var searchResults = JSON.parse(body);
              res.render("results", {returnData: searchResults});
            // res.send(results["Search"][0]);   
          }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening");
});

//movie db URL: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb