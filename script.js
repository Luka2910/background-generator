var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.getElementById("button");

// console.log(button)

window.onload=setColorGradient();

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// body.style.background="linear-gradient(to right, "+"rgb(0,3,10)"+", "+"rgb(5,7,25)"+")";-proba neka
//body.style.background="blue";-promena boje(proba da vidim da li radi)

//ovaj input listener okida se svaki put kada se input promeni (boja u inputu ,tekst u inputu ...)

function setColorGradient(){
    body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
    css.textContent=body.style.background +";";
}

function rndNumber(){
    
    return Math.floor((Math.random() * 255));
    
}
 function rgbToHex(){
    var hex= rndNumber().toString(16);
    if(hex<2)
    {
        hex="0"+hex;
    }
    return hex;
 }
 
 function generateHex(){
    var num="#"+rgbToHex()+rgbToHex()+rgbToHex();
    return num;
 }
function rndColorChangeBackground(){
    color1.value=generateHex();
    color2.value=generateHex();
    setColorGradient();
}



button.addEventListener("click",rndColorChangeBackground)
color1.addEventListener("input",setColorGradient);
color2.addEventListener("input",setColorGradient);