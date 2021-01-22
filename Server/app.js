const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require('./db');

const journal = require('./controllers/journalcontrollers');
const user = require('./controllers/usercontroller');

// app.use('/test', function(req,res){
//     res.send('This is a message from the test endpoint on the server!');
// })

// app.use('/joylynn', function(req,res){
//     res.send('My name is Joylynn and I am 40 years old!');
// })\



//Have endpoint of journal/practice
//send a response from that endpoint (This is a practice route)
sequelize.sync();
//sequelize.sync({force: true}):


app.use(express.json());

/**************************
  ***Exposed route***
***************************/

app.use('/user', user);

/**************************
  ***Protected route***
***************************/
// app.use(require('.middleware/validate-session'));
app.use('/journal', journal);

app.listen(3000, function(){
    console.log("App is listening on port 3000");
});