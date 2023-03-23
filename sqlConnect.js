/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'terminkalender' 

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "SELECT * FROM terminkalender";
  con.query(sql, function(err){
    if (err) throw err;  
    console.log("ist  was angekommen!")
  });    
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "INSERT INTO teminkalender (ID, Termin) VALUES ('2', 'Saufen')";
  con.query(sql, function(err){
    if (err) throw err;  
    console.log("ist  was angekommen!")
  })

  document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const form = document.querySelector('form') 
  textHtmlFeld1 = form.elements.text1.value  
  console.log(textHtmlFeld1)      
})
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'terminkalender' 

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "SELECT * FROM terminkalender";
  con.query(sql, function(err){
    if (err) throw err;  
    console.log("ist  was angekommen!")
  });    
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  var sql = "INSERT INTO teminkalender (ID, Termin) VALUES ('', '"+textHtmlFeld1+"')";
  con.query(sql, function(err){
    if (err) throw err;  
    console.log("ist  was angekommen!")
  })
});*/