var express = require('express');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

//-- Definição para udso do ejs --//
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());
//-------------------------------//


//-------------- ROTAS --------------//

app.get('/', (req, res) => {
  res.render('pages/index');
})


app.get('/combate', (req, res) => {
  res.render('pages/combate');
})

app.get('/escolheCombate', (req, res) => {
  res.render('pages/escolheCombate');
})

/*
app.get('/consultas', function(req, res) {
  var sqlite = require('sqlite3').verbose();
  let db = new sqlite.Database('C:/Users/mhenr/ConexaoDB_Combate/CombateDB.db');

  var ID = req.query.ID;
  var Name = req.query.Name;
  var Score = req.query.Score;

  if(ID != "" && Name == "" && Score == ""){
    let sql = `SELECT ID id,
                Name name,
                Score score
                FROM Robot
                WHERE ID  = ?`;

    db.get(sql, [ID], (err, row) => {
      if (err) {
          return console.error(err.message);
      }
      return row
        ? res.send(row.id + " " + row.name + " " + row.score)
        : res.send(`No Data found!`);
      
      });
  }
  else if(ID == "" && Name != "" && Score == ""){
    let sql = `SELECT ID id,
                Name name,
                Score score
                FROM Robot
                WHERE Name  = ?`;

    db.get(sql, [Name], (err, row) => {
      if (err) {
          return console.error(err.message);
      }
      return row
        ? res.send(row.id + " " + row.name + " " + row.score)
        : res.send(`No Data found!`);
      
      });
  }
  else if(ID == "" && Name == "" && Score != ""){
    let sql = `SELECT ID id,
                Name name,
                Score score
                FROM Robot
                WHERE Score  = ?`;

    db.get(sql, [Score], (err, row) => {
      if (err) {
          return console.error(err.message);
      }
      return row
        ? res.send(row.id + " " + row.name + " " + row.score)
        : res.send(`No Data found!`);
      
      });
  }
  
  // close the database connection
  db.close();
})


app.get('/inserts', (req, res) => {
  res.render('pages/inserts');
})

app.get('/insertsData', (req, res) => {
  var sqlite = require('sqlite3').verbose();
  let db = new sqlite.Database('C:/Users/mhenr/ConexaoDB_Combate/CombateDB.db');

  var insertName = req.query.insertName;
  var insertScore = req.query.insertScore;

  let sql = 'INSERT INTO Robot (Name, Score) VALUES ("' + insertName + '",' + insertScore +')';
  
  db.run(sql, function(err) {
    if (err) {
      console.log(err.message);
    }
    res.render('pages/inserts');
  });
 
  db.close();
})
//----------------------------------------//
*/

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Servidor iniciado em http://localhost:' + port);
