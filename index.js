//Import/requires
const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
require('dotenv/config');

//route import
const shipsRoute = require('./routes/ships');
 
//middlewares
// app.use('/route', routeMiddlewareCallback);
app.use('/ships', shipsRoute);



//route
app.get('/', (req, res) => {
    res.send("Connected to root");
});

const callback = () => {
    console.log("Connecting...");
}


//DB connection
mongoose.connect(process.env.DB_Connection, {useNewUrlParser: true}, () => {
    console.log('connected');
});

app.listen(3000, callback);

