const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try{
    mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log('MongoDB Conected...');
  } catch(err){
    console.log(err.message);
    process.exit(1); // exit process with failure
  }
}

module.exports = connectDB;