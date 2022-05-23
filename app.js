const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
app.use(bodyParser.urlencoded({extension:true}));
//use static body files that are not uploaded on the server by express
app.use(express.static("public"));
app.set('view engine', 'ejs');
//taki elements add karne baad override na hojaye,create an array
  var items = ["Play Videogames","Go out for a walk"];
  var workItems = [];


app.get("/",function(req,res){
  let day = date();
  // this uses view-engine set above it renders the page mentioned
  res.render("list", {listTitle: day, newListItem: items});
});


app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newListItem:workItems});
})
app.get("/about",function(req,res){
  res.render("about");
});

app.post("/work",function(req,res){

  let item = req.body.newItem;
  workItems.push(item);
  res.rediret("/work");
})




//posting the info taken from the form
app.post("/",function(req,res){
var item = req.body.newItem;
if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
}
  items.push(item);
//when post req is triggered redirect saves the value and rediret to the home route(app.get) passingg the new list item
  res.redirect("/");
})



app.listen(3000, function(){
  console.log("Server started on port 3000");
});
