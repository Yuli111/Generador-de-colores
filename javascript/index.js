const button=document.getElementById("button");
const body=document.querySelector("body");
const colorNumber=document.querySelector(".color-number");
const colorCard=document.querySelector(".color-card");

const generate=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    const rbgColor=`rgb(${r},${g},${b})`;
    return rbgColor;
};

const setBackground=()=>{
    const newColor=generate();
    console.log(newColor);
    colorNumber.innerHTML=newColor;
    body.style.backgroundColor =newColor;
    colorCard.style.backgroundColor=newColor;
}

button.addEventListener("click",setBackground);
