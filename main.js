let currentElement = "main";

// images
let carImg = document.getElementById("fullCar");
let frontWheelImg = document.getElementById("frontWheel");
let rearWheelImg = document.getElementById("rearWheel");
let engineImg = document.getElementById("engine");
let windshieldImg = document.getElementById("windshield");
let headLightImg = document.getElementById("headLight");
let seatImg = document.getElementById("seat");
let sideMirrorImg = document.getElementById("sideMirror");
let tailLight = document.getElementById("tailLight");

// visibility
frontWheelImg.style.visibility = 'hidden';
rearWheelImg.style.visibility = 'hidden';
engineImg.style.visibility = 'hidden';
windshieldImg.style.visibility = 'hidden';
headLightImg.style.visibility = 'hidden';
seatImg.style.visibility = 'hidden';
sideMirrorImg.style.visibility = 'hidden';
tailLight.style.visibility = 'hidden';

// cursor
carImg.addEventListener('mouseover', () => {
    carImg.style.cursor = 'pointer';
});
frontWheelImg.addEventListener('mouseover', () => {
    frontWheelImg.style.cursor = 'pointer';
});
rearWheelImg.addEventListener('mouseover', () => {
    rearWheelImg.style.cursor = 'pointer';
});
engineImg.addEventListener('mouseover', () => {
    engineImg.style.cursor = 'pointer';
});
windshieldImg.addEventListener('mouseover', () => {
    windshieldImg.style.cursor = 'pointer';
});
headLightImg.addEventListener('mouseover', () => {
    headLightImg.style.cursor = 'pointer';
});
seatImg.addEventListener('mouseover', () => {
  seatImg.style.cursor = 'pointer';
});
sideMirrorImg.addEventListener('mouseover', () => {
  sideMirrorImg.style.cursor = 'pointer';
});
tailLight.addEventListener('mouseover', () => {
  tailLight.style.cursor = 'pointer';
});

carImg.addEventListener('click', zoom);

function zoom() {
    carImg.src = "./images/barbie_half_ver2.png";
    currentElement = "half";

    frontWheelImg.style.visibility = 'visible';
    rearWheelImg.style.visibility = 'visible';
    engineImg.style.visibility = 'visible';
    windshieldImg.style.visibility = 'visible';
    headLightImg.style.visibility = 'visible';
    seatImg.style.visibility = 'visible';
    sideMirrorImg.style.visibility = 'visible';
    tailLight.style.visibility = 'visible';
}

const wheelText = "These fabulous wheels are made from ultra-glam Barbie rubber. Perfect for cruising through Barbie Land in style!";
frontWheelImg.addEventListener('click', () => { showInfo("Wheel", wheelText) });
rearWheelImg.addEventListener('click', () => { showInfo("Wheel", wheelText) });

const engineText = "Meet the heart of the Dream Car: a sparkle-powered engine that runs on Barbie magic and dreams. It never stops!";
engineImg.addEventListener('click', () => { showInfo("Engine", engineText) });

const windshieldText = "This dazzling windshield keeps Barbie safe from wind, glitter storms, and anything else on the road to adventure!";
windshieldImg.addEventListener('click', () => { showInfo("Windshield", windshieldText) });

const headLightText = "These twinkle bright headlights light up every dream filled road trip Barbie takes—day or night!";
headLightImg.addEventListener('click', () => { showInfo("Headlight", headLightText) });

const seatText = "Sit back in these glam-tastic seats designed for comfort, style, and fabulousness on the go!";
seatImg.addEventListener('click', () => { showInfo("Seat", seatText) });

const sideMirrorText = "Barbie never misses a moment, these sparkling side mirrors help her see every magical memory behind her!";
sideMirrorImg.addEventListener('click', () => { showInfo("SideMirror", sideMirrorText) });

const tailLightText = "These shimmering tail lights shine as Barbie makes her stylish exit. Always leaving a little sparkle behind!";
tailLight.addEventListener('click', () => { showInfo("Tail Light", tailLightText) });

function showInfo(heading, text) {
    const textBox = document.getElementById("allInfo");
    textBox.style.display = "block";
    textBox.innerHTML = "<h6>" + heading + "</h6>";
    textBox.innerHTML += "<p>" + text + "</p>";
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
            headLightImg.style.visibility = 'hidden';
            seatImg.style.visibility = 'hidden';
            sideMirrorImg.style.visibility = 'hidden';
            tailLight.style.visibility = 'hidden';
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

