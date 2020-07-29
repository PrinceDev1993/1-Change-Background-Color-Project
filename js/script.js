
//DECLARE CONSTs
//Get button
const colorBtn = document.querySelector(".btn");
//Get body
const body = document.querySelector("body");
//Set init background  color
body.style.backgroundColor = '#429';
//Trigger an event (click event)
colorBtn.addEventListener("click", changeBgColor);
//Declare function
function changeBgColor() {
    const colorIndex = parseInt(Math.round(Math.random()*9));
    const colorIndex1 = parseInt(Math.round(Math.random()*9));
    const colorIndex2 = parseInt(Math.round(Math.random()*9));
    //pass the random color index as hexCode
    const bgColor = `#${colorIndex}${colorIndex1}${colorIndex2}`;
    body.style.backgroundColor = bgColor;
};



