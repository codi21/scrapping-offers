const axios = require('axios');
const cheerio = require('cheerio');

const url ="https://www.changomas.com.ar/contenidos/revistas"

async function changomas(){
    const resp = await axios.get(url);
    const resp2 = await axios.get('https://www.tiendeo.com.ar/_integrations/slider.js?origin=changomas');
    console.log(resp2);
    const $ = cheerio.load(resp.data);
    scrap = $('.container-revistas div').html();
    
    console.log(scrap);
}
changomas();
module.exports = changomas;

