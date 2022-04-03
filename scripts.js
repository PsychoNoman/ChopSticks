let selectI = false;
let selectRI = false;
let selectnU = false;
let selectR = false;

// let ruleKeep = false;

let botTurn = false;

let confirmButton = document.getElementById("confirmButton");

//transfer betweens hands
let multChoice = false;

let el1 = document.getElementById("one");
let el2 = document.getElementById("two");
let el3 = document.getElementById("three");
let el4 = document.getElementById("four");

//transfer betweens hands end

// window.scrollTo(
//   -1,
//   document.body.scrollHeight / 0.8 - window.innerHeight / 0.8
// );
let clickerAudio = document.getElementById("click");

// clickerAudio.play();

let winnerAudio = document.getElementById("winnn");

// winnerAudio.play();

// random vars
function randomNums() {
  x2 = Math.floor(Math.random() * 2) + 1;
  xx2 = Math.floor(Math.random() * 2) + 1;
  x3 = Math.floor(Math.random() * 3) + 1;
  xx3 = Math.floor(Math.random() * 3) + 1;
  x4 = Math.floor(Math.random() * 4) + 1;
  x5 = Math.floor(Math.random() * 5) + 1;
}
// random vars end
randomNums();
if (x2 === 1) {
  botTurn = true;
} else if (x2 === 2) {
  botTurn = false;
}

//
let startCount = document.getElementById("start");
document.addEventListener("DOMContentLoaded", function () {
  function Two() {
    startCount.textContent = "2";
  }
  function One() {
    startCount.textContent = "1";
  }
  function Go() {
    startCount.style.fontSize = "53px";
    startCount.textContent = "Start Thinking!";
  }
  function removeEl() {
    startCount.remove();
  }
  function turningText() {
    startCount.textContent = "Your Turn btw!";
  }
  setTimeout(Two, 1000);
  setTimeout(One, 2000);
  setTimeout(Go, 3000);
  setTimeout(removeEl, 5000);
  setTimeout(() => {
    clickerAudio.play();
  }, 4000);
  if (botTurn === false) {
    setTimeout(turningText, 4000);
  }
});
//

let mainPlayer = document.getElementById("mainPlayer");
let botAI = document.getElementById("Bot");

let imgR = document.getElementById("imgR");
let imgRI = document.getElementById("imgRI");
let imgnU = document.getElementById("imgnU");
let imgI = document.getElementById("imgI");

let R = document.getElementById("R");
let RI = document.getElementById("RI");
let nU = document.getElementById("nU");
let I = document.getElementById("I");

let transTextEl = document.getElementById("transText");
let transText = "";

let winLoss = "";
let winLossEl = document.getElementById("winLoss");

function playerTurn() {
  if (botTurn === false) {
    document.getElementById("playerTurn").style.color = "white";
    document.getElementById("playerTurn").textContent = "Your Turn";
    mainPlayer.style.borderColor = "black";
    botAI.style.borderColor = "white";
    RI.disabled = false;
    R.disabled = false;
    nU.disabled = false;
    I.disabled = false;
  } else if (botTurn === true) {
    document.getElementById("playerTurn").style.color = "black";
    mainPlayer.style.borderColor = "white";
    botAI.style.borderColor = "black";
    RI.disabled = true;
    R.disabled = true;
    nU.disabled = true;
    I.disabled = true;
  }
}
playerTurn();

function selectFeatureR() {
  R.style.backgroundColor = "black";
  selectR = true;
  winnerAudio.play();
}

function selectFeatureRI() {
  RI.style.backgroundColor = "black";
  selectRI = true;
  winnerAudio.play();
}

function selectFeaturenU() {
  nU.style.backgroundColor = "black";
  selectnU = true;
  winnerAudio.play();
}

function selectFeatureI() {
  I.style.backgroundColor = "black";
  selectI = true;
  winnerAudio.play();
}

function restartGame() {
  imgR.src = "images/1R.jpg";
  imgRI.src = "images/1RI.jpg";
  imgnU.src = "images/1.jpg";
  imgI.src = "images/1I.jpg";
  resetSelection();
}

function resetSelection() {
  if (botTurn !== false) {
    R.style.backgroundColor = "white";
    I.style.backgroundColor = "white";
    nU.style.backgroundColor = "white";
    RI.style.backgroundColor = "white";
    (selectI = false),
      (selectRI = false),
      (selectnU = false),
      (selectR = false);
  }
}

function resetSelectionButton() {
  R.style.backgroundColor = "white";
  I.style.backgroundColor = "white";
  nU.style.backgroundColor = "white";
  RI.style.backgroundColor = "white";
  (selectI = false), (selectRI = false), (selectnU = false), (selectR = false);
}

// function selectAlt() {
//   if (
//     selectI === true ||
//     selectR === true ||
//     selectnU === true ||
//     selectRI === true
//   ) {
//     messageWarn = "To reset, Press reset selection";
//   }
//   warnTextEl.textContent = messageWarn;
// }
let win = document.getElementById("win");

//
let loss = document.getElementById("loss");

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function endBot() {
  setTimeout(playerTurn, 1601);
  setTimeout(() => {
    botTurn = false;
  }, 1600);
  setTimeout(resetSelectionButton, 1600);
}

// function endBot() {
// ruleKeep = false;
//   setTimeout(playerTurn, 1600);
//   setTimeout(() => {
//     botTurn = false;
//   }, 1600);
//   setTimeout(resetSelectionButton, 1600);
// }

// function endBot() {
// ruleKeep = false;
//   playerTurn();
//   botTurn = false;
//   resetSelectionButton();
// }

//
confirmButton.addEventListener("click", localGame);

function localGame() {
  // transFunc();
  let imgISRC = document.getElementById("imgI").getAttribute("src");
  let imgnUSRC = document.getElementById("imgnU").getAttribute("src");
  let imgRISRC = document.getElementById("imgRI").getAttribute("src");
  let imgRSRC = document.getElementById("imgR").getAttribute("src");

  if (
    (selectR === true &&
      selectnU === true &&
      imgRSRC === "images/4R.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectR === true &&
      (selectI === true || selectnU === true) &&
      imgRSRC === "images/3R.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectR === true &&
      (selectI === true || selectnU === true) &&
      imgRSRC === "images/4R.jpg" &&
      imgnUSRC === "images/1.jpg")
  ) {
    imgR.src = "images/0R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    (selectRI === true &&
      selectnU === true &&
      imgRISRC === "images/4RI.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectRI === true &&
      (selectI === true || selectnU === true) &&
      imgRISRC === "images/3RI.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectRI === true &&
      (selectI === true || selectnU === true) &&
      imgRISRC === "images/4RI.jpg" &&
      (imgnUSRC === "images/1.jpg" || imgISRC === "images/0I.jpg"))
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    (selectRI === true &&
      (selectI === true || selectnU === true) &&
      imgRISRC === "images/2RI.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectRI === true &&
      (selectI === true || selectnU === true) &&
      imgRISRC === "images/3RI.jpg" &&
      (imgnUSRC === "images/1.jpg" || imgISRC === "images/1I.jpg"))
  ) {
    imgRI.src = "images/4RI.jpg";
    botTurn = true;

    resetSelectionButton();
    playerTurn();
  } else if (
    selectRI === true &&
    selectnU === true &&
    imgnUSRC === "images/4.jpg" &&
    imgRISRC === "images/3RI.jpg"
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectI === true &&
    selectRI === true &&
    imgRISRC === "images/4RI.jpg" &&
    imgISRC === "images/1I.jpg"
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectI === true &&
    selectR === true &&
    imgISRC === "images/4I.jpg" &&
    imgRSRC === "images/1R.jpg"
  ) {
    imgRI.src = "images/0R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    imgnUSRC === "images/3.jpg" &&
    imgISRC === "images/0I.jpg" &&
    selectnU === true &&
    selectRI === true &&
    imgRISRC === "images/1RI.jpg"
  ) {
    imgRI.src = "images/4RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectRI === true &&
    selectnU === true &&
    imgRISRC === "images/1RI.jpg" &&
    imgnUSRC === "images/4.jpg"
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectI === true &&
    imgnUSRC === "images/1.jpg" &&
    imgISRC === "images/2I.jpg"
  ) {
    imgnU.src = "images/3.jpg";
    imgI.src = "images/0I.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectI === true &&
    imgnUSRC === "images/2.jpg" &&
    imgISRC === "images/1I.jpg"
  ) {
    imgnU.src = "images/3.jpg";
    imgI.src = "images/0I.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    (selectR === true &&
      (selectI === true || selectnU === true) &&
      imgRSRC === "images/2R.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectR === true &&
      (selectI === true || selectnU === true) &&
      imgRSRC === "images/3R.jpg" &&
      (imgnUSRC === "images/1.jpg" || imgISRC === "images/1I.jpg"))
  ) {
    imgR.src = "images/4R.jpg";
    botTurn = true;

    resetSelectionButton();
    playerTurn();
  } else if (
    (selectR === true &&
      (selectI === true || selectnU === true) &&
      imgRSRC === "images/1R.jpg" &&
      imgnUSRC === "images/2.jpg") ||
    (selectR === true &&
      (selectI === true || selectnU === true) &&
      imgRSRC === "images/2R.jpg" &&
      (imgnUSRC === "images/1.jpg" || imgISRC === "images/1I.jpg"))
  ) {
    imgR.src = "images/3R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    (imgRISRC === "images/2RI.jpg" &&
      selectRI === true &&
      ((imgISRC === "images/1I.jpg" && selectI === true) ||
        (selectnU === true && imgnUSRC === "images/1.jpg"))) ||
    ((selectI === true || selectnU === true) &&
      selectRI === true &&
      imgRISRC === "images/1RI.jpg" &&
      imgnUSRC === "images/2.jpg")
  ) {
    imgRI.src = "images/3RI.jpg";
    botTurn = true;

    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectR === true &&
    imgnUSRC === "images/3.jpg" &&
    (imgRSRC === "images/2R.jpg" ||
      imgRSRC === "images/3R.jpg" ||
      imgRSRC === "images/4R.jpg")
  ) {
    imgR.src = "images/0R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectI === true &&
    selectR === true &&
    imgISRC === "images/4I.jpg" &&
    imgRSRC === "images/3R.jpg"
  ) {
    imgR.src = "images/0R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectRI === true &&
    (imgRISRC === "images/2RI.jpg" ||
      imgRISRC === "images/3RI.jpg" ||
      imgRISRC === "images/4RI.jpg") &&
    imgnUSRC === "images/3.jpg"
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    imgRSRC === "images/1R.jpg" &&
    imgnUSRC === "images/3.jpg" &&
    selectnU === true &&
    selectR === true
  ) {
    imgR.src = "images/4R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectR === true &&
    imgnUSRC === "images/4.jpg" &&
    (imgRSRC === "images/1R.jpg" ||
      imgRSRC === "images/2R.jpg" ||
      imgRSRC === "images/3R.jpg" ||
      imgRSRC === "images/4R.jpg")
  ) {
    imgR.src = "images/0R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectRI === true &&
    imgnUSRC === "images/4.jpg" &&
    (imgRSRC === "images/1RI.jpg" ||
      imgRSRC === "images/2RI.jpg" ||
      imgRSRC === "images/3RI.jpg" ||
      imgRSRC === "images/4RI.jpg")
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectI === true &&
    selectnU === true &&
    imgISRC === "images/0I.jpg" &&
    imgnUSRC === "images/2.jpg"
  ) {
    imgnU.src = "images/1.jpg";
    imgI.src = "images/1I.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    (selectnU === true &&
      selectI === true &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/0I.jpg") ||
    (imgnUSRC === "images/0.jpg" && imgISRC === "images/3I.jpg")
  ) {
    imgnU.src = "images/1.jpg";
    imgI.src = "images/2I.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectI === true &&
    selectRI === true &&
    imgRISRC === "images/1RI.jpg" &&
    imgISRC === "images/2I.jpg"
  ) {
    imgRI.src = "images/3RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectI === true &&
    imgnUSRC === "images/4.jpg" &&
    imgISRC === "images/2I.jpg"
  ) {
    imgI.src = "images/0I.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectI === true &&
    selectnU === true &&
    imgISRC === "images/2I.jpg" &&
    imgnUSRC === "images/2.jpg"
  ) {
    imgnU.src = "images/4.jpg";
    imgI.src = "images/0I.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    selectRI === true &&
    selectnU === true &&
    (imgRISRC === "images/3RI.jpg" || imgRISRC === "images/4RI.jpg") &&
    imgRSRC === "images/2R.jpg" &&
    imgnUSRC === "images/4.jpg" &&
    imgISRC === "images/1I.jpg"
  ) {
    imgRI.src = "images/0RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (selectI === true && selectnU === true) {
    imgnU.src = "images/2.jpg";
    imgI.src = "images/0I.jpg";
    botTurn = true;

    resetSelectionButton();
    playerTurn();
  } else if (
    (selectI === true && selectR === true) ||
    (selectnU === true && selectR)
  ) {
    imgR.src = "images/2R.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (
    ((selectI === true && selectRI === true) ||
      (selectnU === true && selectRI)) &&
    !(imgISRC === "images/0I.jpg" && imgRISRC === "images/4RI.jpg")
  ) {
    imgRI.src = "images/2RI.jpg";
    botTurn = true;
    resetSelectionButton();
    playerTurn();
  } else if (selectnU === false && selectI === false) {
    resetSelectionButton();
    playerTurn();
  }

  function gameOver() {
    if (imgRSRC === "images/0R.jpg" && imgRISRC === "images/0RI.jpg") {
      winLoss = "Victorious!!";
      clickerAudio.play();
      openModal(modal);
    } else if (imgISRC === "images/0I.jpg" && imgnUSRC === "images/0.jpg") {
      winLossEl.style.color = "red";
      winLoss = "Defeat...";
      clickerAudio.play();
      openModal(modal);
    }
    winLossEl.textContent = winLoss;
  }
  // function transFunc() {
  //   if (selectI === true && selectnU === true && "assumed transfers") {
  //     transText = "⬆️ Buttons for unassumed finger transfers ⬆️";
  //   }
  //   transTextEl.textContent = transText;
  // }

  function disabledButtons() {
    if (imgRISRC === "images/0RI.jpg" && botTurn === false) {
      RI.disabled = true;
    } else if (imgRSRC === "images/0R.jpg" && botTurn === false) {
      R.disabled = true;
    } else if (imgRSRC !== "images/0R.jpg" && botTurn === true) {
      R.disabled = false;
    } else if (imgRISRC !== "images/0RI.jpg" && botTurn === true) {
      RI.disabled = false;
    }
  }
  bot();
  //Bot start for es6 change
  function bot() {
    randomNums();
    if (
      // xx3 === 1 &&
      botTurn === true &&
      imgnUSRC === "images/2.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgRISRC === "images/1RI.jpg" &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/3.jpg";
      }, 1250);
      endBot();
      // } else if (
      //   botTurn === true &&
      //   // xx3 === 2 &&
      //   imgRISRC === "images/1RI.jpg" &&
      //   imgRSRC === "images/1R.jpg"
      // ) {
      //   setTimeout(selectFeatureRI, 500);
      //   setTimeout(selectFeatureR, 1000);
      //   setTimeout(() => {
      //     imgR.src = "images/2R.jpg";
      //   }, 1250);
      //   setTimeout(() => {
      //     imgRI.src = "images/0RI.jpg";
      //   }, 1250);
      //   endBot();
      // } else if (
      //   botTurn === true &&
      //   xx3 === 3 &&
      //   imgRISRC === "images/1RI.jpg" &&
      //   imgRSRC === "images/1R.jpg" &&
      //   imgISRC === "images/1I.jpg" &&
      //   imgnUSRC === "images/1.jpg"
      // ) {
      //   setTimeout(selectFeatureR, 500);
      //   setTimeout(selectFeatureI, 1000);
      //   setTimeout(() => {
      //     imgI.src = "images/2I.jpg";
      //   }, 1250);
      //   endBot();
    } else if (
      botTurn === true &&
      imgnUSRC === "images/2.jpg" &&
      imgISRC === "images/0I.jpg" &&
      imgRISRC === "images/1RI.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      xx2 === 1
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/3.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRISRC === "images/1RI.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      xx2 === 1
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/2.jpg";
      }, 1250);
      console.log("awda");
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/1RI.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgnUSRC === "images/4.jpg" &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/4RI.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/0I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      xx2 === 2 &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRISRC === "images/1RI.jpg" &&
      imgRSRC === "images/1R.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureR, 1000);
      setTimeout(() => {
        imgRI.src = "images/2RI.jpg";
      }, 1250);
      setTimeout(() => {
        imgR.src = "images/0R.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/1RI.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/4.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRSRC === "images/2R.jpg" &&
      imgRISRC === "images/1RI.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureRI, 1000);
      setTimeout(() => {
        imgR.src = "images/0R.jpg";
      }, 1250);
      setTimeout(() => {
        imgRI.src = "images/3RI.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgRISRC === "images/2RI.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureRI, 1000);
      setTimeout(() => {
        imgR.src = "images/0R.jpg";
      }, 1250);
      setTimeout(() => {
        imgRI.src = "images/3RI.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/2R.jpg" &&
      imgnUSRC === "images/0.jpg" &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/3I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/3RI.jpg" &&
      imgRSRC === "images/4R.jpg" &&
      imgnUSRC === "images/0.jpg" &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/0I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRSRC === "images/4R.jpg" &&
      (imgnUSRC === "images/2.jpg" ||
        imgnUSRC === "images/3.jpg" ||
        imgnUSRC === "images/4.jpg") &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/0RI.jpg" &&
      imgRSRC === "images/4R.jpg" &&
      (imgnUSRC === "images/1.jpg" ||
        imgnUSRC === "images/2.jpg" ||
        imgnUSRC === "images/3.jpg" ||
        imgnUSRC === "images/4.jpg") &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      // (botTurn === true &&
      //   imgRISRC === "images/0RI.jpg" &&
      //   imgRSRC === "images/2R.jpg") ||
      botTurn === true &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/0R.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureR, 1000);
      setTimeout(() => {
        imgR.src = "images/1R.jpg";
      }, 1250);
      setTimeout(() => {
        imgRI.src = "images/1RI.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/4R.jpg" &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/4I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/0I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/1RI.jpg" &&
      imgRSRC === "images/0R.jpg" &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/2I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/3I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRISRC === "images/0RI.jpg" &&
      imgRSRC === "images/1R.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/2I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/0RI.jpg" &&
      imgRSRC === "images/2R.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureRI, 1000);
      setTimeout(() => {
        imgR.src = "images/1R.jpg";
      }, 1250);
      setTimeout(() => {
        imgRI.src = "images/1RI.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      x3 === 1 &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRSRC === "images/1R.jpg" &&
      imgRISRC === "images/2RI.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureRI, 1000);
      setTimeout(() => {
        imgR.src = "images/0R.jpg";
      }, 1250);
      setTimeout(() => {
        imgRI.src = "images/3RI.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      x3 === 1 &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRSRC === "images/2R.jpg" &&
      imgRISRC === "images/1RI.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureRI, 1000);
      setTimeout(() => {
        imgR.src = "images/0R.jpg";
      }, 1250);
      setTimeout(() => {
        imgRI.src = "images/3RI.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/3R.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgnUSRC === "images/1.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/4I.jpg";
      }, 1250);

      endBot();
    }

    // else if (
    //   botTurn === true &&
    //   imgRISRC === "images/0RI.jpg" &&
    //   imgRSRC === "images/2R.jpg"
    // ) {
    //   setTimeout(selectFeatureRI, 500);
    //   setTimeout(selectFeatureR, 1000);
    //   setTimeout(() => {
    //     imgR.src = "images/1R.jpg";
    //   }, 1250);
    //   setTimeout(() => {
    //     imgRI.src = "images/1RI.jpg";
    //   }, 1250);
    //   endBot();
    // }
    else if (
      botTurn === true &&
      imgRSRC === "images/1R.jpg" &&
      imgRISRC === "images/2RI.jpg" &&
      imgnUSRC === "images/1.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/3.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRSRC === "images/2R.jpg" &&
      imgRISRC === "images/1RI.jpg" &&
      imgnUSRC === "images/1.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/3.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgISRC === "images/0I.jpg" &&
      (imgnUSRC === "images/2.jpg" ||
        imgnUSRC === "images/3.jpg" ||
        imgnUSRC === "images/4.jpg") &&
      imgRISRC === "images/3RI.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRSRC === "images/4R.jpg" &&
      imgnUSRC === "images/2.jpg" &&
      imgISRC === "images/0I.jpg" &&
      imgRISRC === "images/0RI.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/4RI.jpg" &&
      imgRSRC === "images/2R.jpg" &&
      (imgnUSRC === "images/4.jpg" ||
        imgnUSRC === "images/3.jpg" ||
        imgnUSRC === "images/2.jpg" ||
        imgnUSRC === "images/1.jpg") &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/4RI.jpg" &&
      imgnUSRC === "images/0.jpg" &&
      imgISRC === "images/1I.jpg" &&
      imgRSRC === "images/3R.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/0I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRSRC === "images/4R.jpg" &&
      imgRISRC === "images/0RI.jpg" &&
      (imgnUSRC === "images/1.jpg" ||
        imgnUSRC === "images/2.jpg" ||
        imgnUSRC === "images/3.jpg" ||
        imgnUSRC === "images/4.jpg") &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/1RI.jpg" &&
      imgnUSRC === "images/3.jpg" &&
      imgISRC === "images/4I.jpg" &&
      imgRSRC === "images/0R.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/0I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/3RI.jpg" &&
      imgRSRC === "images/2R.jpg" &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/4.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRISRC === "images/3RI.jpg" &&
      (imgRSRC === "images/1R.jpg" ||
        imgRSRC === "images/2R.jpg" ||
        imgRSRC === "images/3R.jpg") &&
      imgnUSRC === "images/1.jpg" &&
      (imgISRC === "images/2I.jpg" ||
        imgISRC === "images/3I.jpg" ||
        imgISRC === "images/4I.jpg")
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/0I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgISRC === "images/0I.jpg" &&
      imgnUSRC === "images/2.jpg" &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/2R.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/4.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgISRC === "images/2I.jpg" &&
      imgnUSRC === "images/0.jpg" &&
      imgRISRC === "images/2RI.jpg" &&
      imgRSRC === "images/2R.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeatureI, 1000);
      setTimeout(() => {
        imgI.src = "images/4I.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      (imgRISRC === "images/4RI.jpg" || imgRSRC === "images/4R.jpg") &&
      imgnUSRC === "images/1.jpg" &&
      imgISRC === "images/1I.jpg"
    ) {
      setTimeout(selectFeatureRI, 500);
      setTimeout(selectFeatureR, 1000);
      setTimeout(() => {
        imgRI.src = "images/2RI.jpg";
      }, 1250);
      setTimeout(() => {
        imgR.src = "images/2R.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRSRC === "images/2R.jpg" &&
      (imgnUSRC === "images/3.jpg" || imgnUSRC === "images/4.jpg") &&
      imgISRC === "images/0I.jpg"
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    } else if (
      botTurn === true &&
      imgRSRC === "images/3R.jpg" &&
      (imgnUSRC === "images/2.jpg" ||
        imgnUSRC === "images/3.jpg" ||
        imgnUSRC === "images/4.jpg")
    ) {
      setTimeout(selectFeatureR, 500);
      setTimeout(selectFeaturenU, 1000);
      setTimeout(() => {
        imgnU.src = "images/0.jpg";
      }, 1250);
      endBot();
    }
  }
  //Bot end
  disabledButtons();
  gameOver();
}

function gameRules() {
  let imgISRC = document.getElementById("imgI").getAttribute("src");
  let imgnUSRC = document.getElementById("imgnU").getAttribute("src");
  let imgRISRC = document.getElementById("imgRI").getAttribute("src");
  let imgRSRC = document.getElementById("imgR").getAttribute("src");

  function disabledButtons() {
    if (imgRISRC === "images/0RI.jpg" && botTurn === false) {
      RI.disabled = true;
    } else if (imgRSRC === "images/0R.jpg" && botTurn === false) {
      R.disabled = true;
    } else if (imgRSRC !== "images/0R.jpg" && botTurn === true) {
      R.disabled = false;
    } else if (imgRISRC !== "images/0RI.jpg" && botTurn === true) {
      RI.disabled = false;
    }
  }
  if (selectnU === false && selectI === false) {
    resetSelectionButton();
    playerTurn();
  } else if (
    selectnU === true &&
    selectI === true &&
    (selectRI === true || selectR === true)
  ) {
    resetSelectionButton();
    playerTurn();
  }

  disabledButtons();
  function gameOver() {
    if (imgRSRC === "images/0R.jpg" && imgRISRC === "images/0RI.jpg") {
      winLoss = "Victorious!!";
      openModal(modal);
    } else if (imgISRC === "images/0I.jpg" && imgnUSRC === "images/0.jpg") {
      winLossEl.style.color = "red";
      winLoss = "Defeat...";
      openModal(modal);
    }
    winLossEl.textContent = winLoss;
  }
  gameOver();
}
