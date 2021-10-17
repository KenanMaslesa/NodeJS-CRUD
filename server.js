//npm run server
const express = require('express');
const connectDB = require('./config/db')
const app = express();
const bodyParser= require('body-parser');
//Conect DB
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Define Routes
app.use('/api/videos', require('./routes/videos'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));