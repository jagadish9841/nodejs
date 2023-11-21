'use strict';
/*const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

console.log(Mongoose);


// Log an error if the connection fails
Mongoose.connection.on('error', error =>{
    console.log("MongoDB error" , error);
})
*/


const connectionString =
  "dbconnectionstring";

const mongoose = require("mongoose");

mongoose.connect(connectionString, {
  useNewUrlParser: true
});

mongoose.connection.on("error", error => console.log(`MongoDB Error: ${error}`));


//Create a schema that defines the structure for storing user data
const chatUser = new mongoose.Schema({
  profileId: String,
  fullName: String,
  profilePic: String
});

//Turn the schema into a usable model
let userModel = mongoose.model('chatUser', chatUser);


module.exports = {
  mongoose,
  userModel
}
