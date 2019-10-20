let menu=document.querySelector(".dropdown");

let btclic=document.getElementById("btn");

btclic.onclick=function(){
    
    btclic.classList.toggle(".down");
    
        menu.classList.toggle("show");
    }