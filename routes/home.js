const express = require('express');
const app = express();
const vea = require('./vea.js');
const tadicor = require('./tadicor.js');

app.get('/link',async (req, res) => {
    let link = await vea(); 
    console.log(link);
    console.log(typeof(link));
    res.json ({
        ok : true ,
        link 
    });
});
app.get('/tadicor', async(req , res ) => {
    let tadicorImg = await tadicor();
    console.log(tadicorImg);
    res.json({
        ok : true ,
        tadicor : tadicorImg
    });
});

module.exports = app;


