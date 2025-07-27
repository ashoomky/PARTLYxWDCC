// change image code
let currentElement = "main";

let carImg = document.getElementById("fullCar");
carImg.addEventListener('click', zoom);

function zoom(imgIndex) {
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

// back button functionality
const backBtn = document.getElementById("backButton");
backBtn.addEventListener('click', back);

function back() {

}