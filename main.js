let currentElement = "main";

// images
let carImg = document.getElementById("fullCar");
let frontWheelImg = document.getElementById("frontWheel");
let rearWheelImg = document.getElementById("rearWheel");
let engineImg = document.getElementById("engine");
let windshieldImg = document.getElementById("windshield");

// visibility
frontWheelImg.style.visibility = 'hidden';
rearWheelImg.style.visibility = 'hidden';
engineImg.style.visibility = 'hidden';
windshieldImg.style.visibility = 'hidden';

carImg.addEventListener('click', zoom);

function zoom() {
    carImg.src = "./images/barbie_half_ver2.png";
    currentElement = "half";

    frontWheelImg.style.visibility = 'visible';
    rearWheelImg.style.visibility = 'visible';
    engineImg.style.visibility = 'visible';
    windshieldImg.style.visibility = 'visible';
}

const wheelText = "Barbie's Dream Car wheels are made of special Barbie rubber.";
frontWheelImg.addEventListener('click', () => { showInfo(wheelText) });
rearWheelImg.addEventListener('click', () => { showInfo(wheelText) });

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
            frontWheelImg.style.visibility = 'hidden';
            rearWheelImg.style.visibility = 'hidden';
            engineImg.style.visibility = 'hidden';
            windshieldImg.style.visibility = 'hidden';
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

