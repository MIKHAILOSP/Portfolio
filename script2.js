// import "./style.css";
const leftButton = document.getElementById("btn-left");
const rightButton = document.getElementById("btn-right");
leftButton.addEventListener('click',()=>{
    let content=document.getElementById("content");
    content.className="slide-content0";
})
rightButton.addEventListener('click',()=>{
    let content=document.getElementById("content");
    content.className="slide-content1";
})