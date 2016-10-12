var express = require('express'); //Express for deployment and initialzation of servers
var morgan = require('morgan'); //for logs
var path = require('path');


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var comments=[];
app.get('/arti-1.html', function (req, res) {
  var commentvalue = document.getElementById('comment1').value;
  comments.push(commentvalue);
  res.send(JSON.stringify(comments));
});
var counter=1;
app.get('/counter1', function (req, res) {
  counter = counter*2;
  res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit', function (req, res){
    //var name = req.params.name; //One way with parameter in the URL
    var name = req.query.name; // other way with using //submit?name=xxx
    names.push(name);
    res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
