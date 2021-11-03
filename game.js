const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
 // countdown 

}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  //...in some code responsible for changing to the next scenario...
  currentScenario = {
    time_texts: ["New stuff", "More new stuff", "etc"]
  }
  timeSecond = 30;

  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

startGame()

/* Timer Function*/
// function countdown() {
let timeSecond = 30;
let currentScenario = {
  time_texts: ["You look around nervously", "something", "whatever"]
}
const timeH = document.querySelector("h1");
const timer_text = document.getElementById("timer_text");

  

displayTime(timeSecond);

const countDown = setInterval(() => {
  if (timeSecond < 30 && timeSecond > 20){
  //  let countertxt1  = "You look around nervously"

  //  "You look around nervously"
   timer_text.innerHTML = currentScenario.time_texts[0];

   imageElement.src = something.imageUrls[0]
   imageElement.src = something.imageUrls[1]
   imageElement.setAttribute("src", value)
  }
  else if (timeSecond < 20 && timeSecond > 10){
    timer_text.innerHTML = currentScenario.time_texts[1];
  }
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

if (si)
if ((timeSecond % 2) == 0)

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Game Over"; //modify to got to game over. 
}
// 0}
