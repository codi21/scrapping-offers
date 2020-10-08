fo1= document.getElementById('fo1');
fo2= document.getElementById('fo2');
fo3= document.getElementById('fo3');

function init() {
    let data =  axios.get("/tadicor").then(function(data){

    fo1.src =   data.data.tadicor[0];
    fo2.src = data.data.tadicor[1];
    fo3.src = data.data.tadicor[2];
    });

}
init();

