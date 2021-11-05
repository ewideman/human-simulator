// Variables
let imageUrls 
let timeSecond = 30;
const timeH = document.querySelector("h1");
const timer_text = document.getElementById("timer_text");
const imageElement = document.getElementById("imageElement");
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};
let textNode = null;

// FUNCTIONS
function showTextNode(textNodeIndex) {
  textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  if (textNode.imageUrls != null) {
    imageElement.src = textNode.imageUrls[0];
  }
  timeH.style.visibility = textNode.hasTimer ? 'visible' : 'hidden';
  // clear all the previous buttons

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }
  
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => { 
        selectOption(option)
      });
      optionButtonsElement.appendChild(button);
    }
  })
}

// show options
function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  // startTimer();
  //run in code for changing
  timeSecond = 40;
  
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


function startTimer() {
  const countDown = setInterval(() => {
    timeSecond--;
    console.log(timeSecond);
  }, 1000)
}



let gif1Bull = true
let gif2Bull = true
let gif3Bull = true
let gif4Bull = true
//function hasTimer ()
//setting interval to variable to clear it later
const countDown = setInterval(() => {
  // check your images array and see if its time to show a new image
  timeSecond--;
  displayTime(timeSecond);
  let image;
  // // let imageIndex = /*Math.floor(timeSecond / 10) % textNode.imageUrls.length; */
  //   if ((timeSecond < 40) && (timeSecond >= 38)) {
  //     if (gif1Bull === true) {
  //       if (textNode.imageUrls !== null) {
  //         image = textNodes[3].imageUrls[0];
  //         imageElement.src = image;
  //       console.log("img1", image)
  //     }
  //     gif1Bull = false
  //   }
    
  // }

  //   if ((timeSecond < 38) && (timeSecond >= 20)) {
  //     if (gif2Bull === true) {
  //       console.log("gif2Bull")
  //       if (textNode.imageUrls !== null) {
  //         image = textNodes[3].imageUrls[1];
  //         imageElement.src = image;
  //         console.log("notNull")
  //         console.log("img2", image)
  //         gif2Bull = false
  //       }
  //     } 
  // }
// if ((timeSecond < 20) && (timeSecond >= 10)) {
//   if (gif1Bull === true) {
//     if (textNode.imageUrls !== null) {
//       image = textNode.imageUrls[2];
//       imageElement.src = image;
//   }
//   gif1Bull = false
// }
// }
// if ((timeSecond < 10) && (timeSecond > 0)) {
//   if (gif1Bull === true) {
//     if (textNode.imageUrls !== null) {
//       image = textNode.imageUrls[3];
//       imageElement.src = image;
//   }
//   gif1Bull = false
// }
// }
    

  // Math.floor(timeSecond / 10) % textNode.imageUrls.length;

  // console.log (textNode.imageUrls.length)
  // if (textNode.imageUrls !== null) {
  //   image = textNode.imageUrls[imageIndex];
  //   console.log(image)
  // }
  
  if (timeSecond < 1) {     
    endCount();
    clearInterval(countDown);
  } 
}, 1000);

function displayTime(second) {
  if (textNode !== undefined) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
  }
  else {
    timeH.innerHTML = ""
  }
}

function endCount() {
  if(textNode.hasTimer){
    showTextNode(3);
  }
}

displayTime(timeSecond);

function startGame() {
  state = {};
  showTextNode(1);
}

startGame()

