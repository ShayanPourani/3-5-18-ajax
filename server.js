// Do not change lines 1-16
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var listener = app.listen(8081, function() {
  console.log('Your app is listening on port 8081');
});
var databaseFile = fs.readFileSync(__dirname +'/database.json', 'utf8');
var usersDatabase = JSON.parse(databaseFile);
// -------------------------

app.post("/listUsers", function (request, response) {
  response.send(userList(Number(request.body.index)));
});

function userList(username,password){
  var length = usersDatabase.length;
  var ul = '<table>';  
  for(var i = 0 ; i < length; i++){
    if(i != 0){
    ul += '<tr><td>'+usersDatabase[i].username+'</td><td>'+usersDatabase[i].password+'</td></tr>';
    }
  } 
  ul += '</table>';
  return ul;
}