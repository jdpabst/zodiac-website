const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
const userCtrl = require('./userController');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + './../build'))
app.use(cors());

massive({
  host: "ec2-54-163-236-33.compute-1.amazonaws.com",
  port: 5432,
  database: "d8dcgmh99r38gn",
  user: "cmgbyjhgpwetci",
  password: "f3610806c80e4f79fba373fb1ccc11e409d0cd7d79bb39bd84ba7cd91b51fcbe",
  ssl: true
}).then( db => {
  app.set('db', db);
  db.create_table().then( res => {
    console.log("Sign table init");
  })
})

//////////Endpoints for the front end/////////////////
app.get('/api/signs', userCtrl.virgo)
app.get('/api/signs', userCtrl.taurus)
app.get('/api/signs', userCtrl.scorpio)
app.get('/api/signs', userCtrl.sagi)
app.get('/api/signs', userCtrl.pisces)
app.get('/api/signs', userCtrl.libra)
app.get('/api/signs', userCtrl.cap)
app.get('/api/signs', userCtrl.can)
app.get('/api/signs', userCtrl.aries)
app.get('/api/signs', userCtrl.aqua)
app.get('/api/signs', userCtrl.leo)
app.get('/api/signs', userCtrl.gem)



const port = 3000;
app.listen(port, console.log("you are now connected"));
