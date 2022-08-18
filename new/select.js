
var mysql = require('mysql');
var d ;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ناشقئشلشس",
  database: "my"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;

    this.d= result;
    console.log(this.d);
  });
});

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);