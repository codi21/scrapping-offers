const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
//bodyParser no se todavia

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(require('./routes/index.js'));


app.listen(3000,'0.0.0.0',() => {
   console.log("Escuchando puerto 3000"); 
});
