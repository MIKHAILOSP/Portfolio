// import "./style.css";
const leftButton = document.getElementById("btn-left");
const rightButton = document.getElementById("btn-right");
let slides = document.getElementsByClassName("slide");
leftButton.addEventListener('click',()=>{
    let content=document.getElementById("content");
    let btn=document.getElementById("btn-left");
    let btn1=document.getElementById("btn-right");
    if (content.className == "slide-content0"){
    content.className="slide-content1";
    btn.className="leftbtn1";
    btn1.className="rightbtn1";
    } else {
    content.className="slide-content0";
    btn.className="leftbtn";
    btn1.className="rightbtn";
    }
})
rightButton.addEventListener('click',()=>{
    let content=document.getElementById("content");
    let btn=document.getElementById("btn-left");
    let btn1=document.getElementById("btn-right");
    if (content.className == "slide-content1"){
        btn.className="leftbtn";   
        btn1.className="rightbtn";
        content.className = "slide-content0";
    } else {
    content.className="slide-content1";
    btn.className="leftbtn1";
    btn1.className="rightbtn1";
    }
})