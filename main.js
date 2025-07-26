let textIndex = 0;
const btn = document.getElementById("splitButton");

function changeText() {
    const text = ["show half car", "show full car"];
    textIndex = (textIndex + 1) % 2;
    btn.innerHTML = text[textIndex];
}

