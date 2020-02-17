// Requires
var express = require('express');
var mongoose = require('mongoose');


// iniatilizing
var app = express();


// Database connection
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;
    console.log('Mongo DB port 27017: \x1b[32m%s\x1b[0m', 'online');
})

// Routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: false,
        mensaje: 'Petición realizada correctamente'
    })
})

// listening
app.listen(3000, () => {
    console.log('Express server port 3000: \x1b[32m%s\x1b[0m', 'online');
})


