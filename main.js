let currentElement = "main";

// images
let carImg = document.getElementById("fullCar");
let wheelImg = document.getElementById("wheels");
let engineImg = document.getElementById("engine");

// visibility
wheelImg.style.visibility = 'hidden';
engineImg.style.visibility = 'hidden';

carImg.addEventListener('click', zoom);

function zoom() {
    carImg.src = "./images/barbie_half_ver2.png";
    currentElement = "half";

    wheelImg.style.visibility = 'visible';
    engineImg.style.visibility = 'visible';
}

const wheelText = "Barbie's Dream Car wheels are made of special Barbie rubber.";
wheelImg.addEventListener('click', () => { showInfo(wheelText) });

const engineText = "This is the engine! With a splash of Barbie Land magic, it never stops working!";
engineImg.addEventListener('click', () => { showInfo(engineText) });

function showInfo(text) {
    const textBox = document.getElementById("allInfo");
    textBox.innerText = text;
}

// back button functionality
const backBtn = document.getElementById("backButton");
backBtn.addEventListener('click', () => { back() });

function back() {
    switch (currentElement) {
        case "half":
            currentElement = "main";
            carImg.src = "./images/barbie_main_ver2.png";
            wheelImg.style.visibility = 'hidden';
            engineImg.style.visibility = 'hidden';
            break;
        default:
            break;
    }
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

