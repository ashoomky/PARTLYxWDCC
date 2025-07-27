// change text code
let textIndex = 0;
const splitBtn = document.getElementById("splitButton");

function changeText() {
    const text = ["show half car", "show full car"];
    textIndex = (textIndex + 1) % 2;
    splitBtn.innerHTML = text[textIndex];
}

// change image code
const carImg = document.getElementById("fullCar");
carImg.addEventListener('click', wheel);

function wheel() {
    carImg.src = "./images/barbie_half_ver2.png";
}

// info card hover
const button = document.getElementById("infoButton");
const popup = document.getElementById("info");

function openInfo() {
    const popup = document.getElementById("info");
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("info");
    popup.style.display = "none";
}
