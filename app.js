const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

mongoose.connect();

const app = express();

const users = require('./routes/users');

const port = '3000';

app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use('/users',users);

app.get('/',(req,res) =>{
    res.send('Invalid Endpoint');
});

app.listen(port, (req,res)=>{
    console.log(`server started on ${port}`);
});

