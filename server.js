require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const UserController = require("./controllers/user");
const RecipesController = require("./controllers/recipe");
const app = express();

mongoose.Promise = global.Promise;

// mongoose connection
mongoose.connect(process.env.MONGODB_URI); 
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));

app.use("/api/user", UserController);
app.use("/api/recipe", RecipesController);
app.get("/", (req, res) => {
  res.json("Hello World");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("App connecting to port: " + PORT);
});