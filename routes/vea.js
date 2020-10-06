const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const url = "https://supermercadosvea.com.ar/mendoza/";

async function vea(){
    const resp = await axios.get(url);
    const $ = cheerio.load(resp.data);
    scrap = $('.slide a').attr('href');
    return scrap;
}

module.exports = vea; 
