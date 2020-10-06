const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
//bodyParser no se todavia

const app = express();

app.use(express.static('public'));
app.use(require('./routes/index.js'));


app.listen(3000,() => {
   console.log("Escuchando puerto 3000"); 
});
