button = document.getElementById("logovea");
tadicor = document.getElementById("tadicor");
changomas = document.getElementById('changomas');

button.addEventListener("click",async (event)=>{
    link = await axios.get("codi-x555LAB:3000/link").then(function(data){
        console.log(data);
       window.location.href = data.data.link;
    });
});

tadicor.addEventListener("click" , function(){
    window.location.href = "http://localhost:3000/tadicor-folleto.html"
});
changomas.addEventListener("click",function(){
    window.location.href ="http://localhost:3000/changomas.html";
});
