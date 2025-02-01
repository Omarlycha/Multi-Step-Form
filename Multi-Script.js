"use strict"

const form1= document.getElementById("form1");
const form2= document.getElementById("form2");
const form3= document.getElementById("form3");
const form4= document.getElementById("form4");

const progressEl = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentactive= 1;

//====================================== next form ===================================================
function nextOne(){
    form1.style.left = "-500px";
    form2.style.left = "35px";

    
}

//=======================================back One ========================================================
function bacKOne(){
    form1.style.left = "35px";
    form2.style.left = "-500px";
} 

//========================================== second form================================================
function nextTwo(){
    form2.style.left = "500px";
    form3.style.left = "-35px";
}


//=======================================back Two ========================================================
function bacKTwo(){
    form2.style.left = "-35px";
    form3.style.left = "500px";
} 

//========================================== third form================================================
function nextThree(){
    form3.style.left = "500px";
    form4.style.left = "35px";
}


//=======================================back Three ========================================================
function bacKThree(){
    form3.style.left = "35px";
    form4.style.left = "500px";
} 

//========================================== Fourth form================================================
function nextFour(){
    form4.style.left = "-500px";
    form5.style.left = "-35px";
}


//=======================================back Four ========================================================
function bacKFour(){
    form4.style.left = "-35px";
    form5.style.left = "-500px";
}    

//===========================btn Events=====================================================================
const btnsEvents= ()=>{
    
    const next1= document.getElementById("next1");
    const next2= document.getElementById("next2");
    const next3= document.getElementById("next3");
    const next4= document.getElementById("next4");
    const back1= document.getElementById("back1");
    const back2= document.getElementById("back2");
    const back3= document.getElementById("back3");
    const back4= document.getElementById("back4");

    //next1
    next1.addEventListener("click", nextOne);

    // back1
    back1.addEventListener("click", backOne);

    //next2
    next2.addEventListener("click", nextTwo);

    // back2
    back2.addEventListener("click", backTwo);

    //next3
    next3.addEventListener("click", nextThree);

    // back3
    back3.addEventListener("click", backThree);

     //next4
     next4.addEventListener("click", nextFour);

     // back4
     back4.addEventListener("click", backFour);
}

document.addEventListener("DOMContentLoaded", btnsEvents);