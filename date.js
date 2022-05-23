module.exports = getDate ;


function getDate(){

var today = new Date();
//javascript object
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
var day = today.toLocaleDateString("en-US", options);
return day;
}
