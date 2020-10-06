const axios = require('axios');
const cheerio = require('cheerio');

const url = "http://www.tadicormendoza.com/folleto-semanal.html"
async function tadicor(){
    const resp = await axios.get(url);
    const $ = cheerio.load(resp.data);
    const folletosURL = new Set();
    
   $('.container-fluid .row .col-lg-6' ).each(function(index , element ) {
         folletosURL.add('http://www.tadicormendoza.com/'+$(element).children().attr('src'));
     }) ;
    folletos = [...folletosURL];
    return folletos
}
module.exports = tadicor;
