// variables 
let state = {};
let textnode;
let timeSecond = 30;
let textNode = null;

// dom variables
const imageElement = document.getElementById("imageElement")
const timeH = document.querySelector("h1");
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');


// functions
function startTimer() {
    let timeSeconds = 40;
    const countDown = setInterval(() => {
        timeSeconds--;
        console.log(timeSeconds)
    }, 1000)
}

function selectOption(option) {
    startTimer();
    timeSecond = 40;
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

function showTextNode(id) {
    textNode = textNodes.find(textNode => textNode.id === id);
    textElement.innerHTML = textNode.text;
    if (textNode.imageUrls.length > 0) {
        imageElement.scr = textNode.imageUrls[0]
    }
    timeH.style.visibility = textNode.hasTimer ? 'visible' : 'hidden';

    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            selectOption(option)
        });
        optionButtonsElement.appendChild(button);
    })
}

function startGame() {
    showTextNode(1);
}

startGame();


