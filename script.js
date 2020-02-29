var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background + ";";
}

function generateRandomColor () {
    const randomColor ='#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
};

function generateRandomHEX() {
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
}

color1.addEventListener("change", setGradient);
color2.addEventListener("change", setGradient);
window.addEventListener("load", setGradient);
randomButton.addEventListener("click", generateRandomHEX);