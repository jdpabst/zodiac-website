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
app.get('/api/signs/virgo', userCtrl.virgo)
app.get('/api/signs/taurus', userCtrl.taurus)
app.get('/api/signs/scorpio', userCtrl.scorpio)
app.get('/api/signs/sagi', userCtrl.sagi)
app.get('/api/signs/pisces', userCtrl.pisces)
app.get('/api/signs/libra', userCtrl.libra)
app.get('/api/signs/cap', userCtrl.cap)
app.get('/api/signs/can', userCtrl.can)
app.get('/api/signs/aries', userCtrl.aries)
app.get('/api/signs/aqua', userCtrl.aqua)
app.get('/api/signs/leo', userCtrl.leo)
app.get('/api/signs/gem', userCtrl.gem)



const port = 3000;
app.listen(port, console.log("you are now connected"));
