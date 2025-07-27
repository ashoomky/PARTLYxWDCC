// change text code
let textIndex = 0;
const splitBtn = document.getElementById("splitButton");

// change image code
const imgArray = ["./images/barbie_main_ver2.png", 
    ["./images/barbie_half_ver2.png", ["wheel.png", "engine.png", [part1, part2]]]
];

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

// back button functionality
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener('click', back);

function back() {

}