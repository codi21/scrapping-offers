button = document.getElementById("logovea");
tadicor = document.getElementById("tadicor");
changomas = document.getElementById('changomas');


async function getData(){
    link =await axios.get('/link').then(function(data){
        return data.data.link;
    });
    return link;
}

button.addEventListener('click' , async function(){
    window.location.href = await getData();
});
tadicor.addEventListener("click" , function(){
    window.location.href = "/tadicor-folleto.html"
});
changomas.addEventListener("click",function(){
    window.location.href ="/changomas.html";
});
