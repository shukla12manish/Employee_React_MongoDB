const express = require('express');
const mongoose=require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/employee';
const employees = require('./routes/api/employees');

const app = express();

app.use(bodyParser.json());


// Connect to mongodb

mongoose.connect(url,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected to employee....'))
  .catch(err => console.log(err));

  app.use('/api/employees',employees);

  const port = process.env.PORT || 5000;

  app.listen(port, ()=>console.log(`server started on port ${port}`));
