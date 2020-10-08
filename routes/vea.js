const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const url = "https://supermercadosvea.com.ar/mendoza/";

//arreglar vea 
async function vea(){
    const resp = await axios.get(url);
    const $ = cheerio.load(resp.data);
    const pdf = new Set();
    scrap = $('.slide a').each(function(index,element){
     pdf.add($(element).attr('href'));
    });
    links = [...pdf];

    return links[1];
}

module.exports = vea; 
