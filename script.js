const rulesButton = document.querySelector(".rules-button");
const header = document.querySelector("header");
const main = document.querySelector("main");
const rulesDiv = document.querySelector(".rules");
const closeRules = document.querySelector(".close-btn");
const scoreEl = document.querySelector(".scoreboard");
const playAgainBtn = document.querySelector(".play-again");

const pickButtons = document.querySelectorAll(".pick-btn");

const scissor = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");

rulesButton.addEventListener("click", () => {
  rulesDiv.classList.remove("invisible");
  header.classList.add("blur");
  main.classList.add("blur");
});
closeRules.addEventListener("click", () => {
  rulesDiv.classList.add("invisible");
  header.classList.remove("blur");
  main.classList.remove("blur");
});

let score = 0;
scoreEl.innerHTML = score;
let computerPick;
let myPick = "";

const init = () => {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = Math.trunc(Math.random() * 3);
  computerPick = options[randomIndex];
};

init();

pickButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    myPick = e.target.id;
    let isWin = false;
    let isDraw = false;

    if (myPick === "scissors") {
      if (computerPick === "paper") {
        isWin = true;
        setTimeout(() => {
          scoreEl.innerHTML = score += 1;
        }, 2500);
      } else if (computerPick === "rock") {
        isWin = false;
        setTimeout(() => {
          scoreEl.innerHTML = score -= 1;
        }, 2500);
      } else {
        isDraw = true;
        scoreEl.innerHTML = score;
      }
    } else if (myPick === "paper") {
      if (computerPick === "scissors") {
        isWin = false;
        setTimeout(() => {
          scoreEl.innerHTML = score -= 1;
        }, 2500);
      } else if (computerPick === "rock") {
        isWin = true;
        setTimeout(() => {
          scoreEl.innerHTML = score += 1;
        }, 2500);
      } else {
        isDraw = true;
        scoreEl.innerHTML = score;
      }
    } else if (myPick === "rock") {
      if (computerPick === "scissors") {
        isWin = true;
        setTimeout(() => {
          scoreEl.innerHTML = score += 1;
        }, 2500);
      } else if (computerPick === "paper") {
        isWin = false;
        setTimeout(() => {
          scoreEl.innerHTML = score -= 1;
        }, 2500);
      } else {
        isDraw = true;
        scoreEl.innerHTML = score;
      }
    }

    main.classList.add("invisible");

    let html = `
          <div class='result-div flex'>
            <div class='you-pick-div'>
              <h1 class='you-pick-title'>You Picked</h1>
              <div class='${myPick}c'>
                  <img src='/images/icon-${myPick}.svg'/>
              </div>
            </div>
              <div class='message-div invisible1'>${
                !isDraw
                  ? isWin
                    ? "<span>You win</span>"
                    : "<span>You lose</span>"
                  : "<span>Draw</span>"
              }
                <button class='play-again'>Play Again</button>
              </div>
              <div class='computer-pick-div invisible1'>
                <h1 class='computer-pick-title'>The House Picked</h1>
                <div class='${computerPick}c'>
                  <img class='' src='/images/icon-${computerPick}.svg'/>
                </div>
              </div>
              <div class='circle'></div>
          </div>
        
        
        
        `;
    header.insertAdjacentHTML("afterend", html);

    const messageDiv = document.querySelector(".message-div");
    const computerDiv = document.querySelector(".computer-pick-div");

    setInterval(() => {
      computerDiv.classList.remove("invisible1");
    }, 1000);
    setInterval(() => {
      messageDiv.classList.remove("invisible1");
    }, 2000);

    const resultDiv = document.querySelector(".result-div");
    const playAgainBtn = document.querySelector(".play-again");
    const playAgain = () => {
      main.classList.remove("invisible");
      resultDiv.classList.remove("flex");
      resultDiv.classList.add("invisible");
      init();
    };

    playAgainBtn?.addEventListener("click", playAgain);
  });
  rulesButton.addEventListener("click", () => {
    const resultDiv = document.querySelector(".result-div");
    rulesDiv.classList.remove("invisible");
    header.classList.add("blur");
    resultDiv.classList.add("blur");
  });
  closeRules.addEventListener("click", () => {
    const resultDiv = document.querySelector(".result-div");
    rulesDiv.classList.add("invisible");
    header.classList.remove("blur");
    resultDiv.classList.remove('blur')
  });
});
