let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let roundCounter = 0;

const playOptions = ["rock", "paper", "scissors"];

const showGameLog = document.getElementById("gameLog");

const playerRockBtn = document.getElementById("playerRockBtn");
const playerPaperBtn = document.getElementById("playerPaperBtn");
const playerScissorsBtn = document.getElementById("playerScissorsBtn");

const comRockBtn = document.getElementById("comRockBtn");
const comPaperBtn = document.getElementById("comPaperBtn");
const comScissorsBtn = document.getElementById("comScissorsBtn");

const showPlayerScore = document.getElementById("showPlayerScore");
const showComScore = document.getElementById("showComScore");
const showRoundCount = document.getElementById("roundLog");
const showComputerPick = document.getElementById("comPick");

document.getElementById("resetBtn").addEventListener("click", resetGame);

playerRockBtn.addEventListener("click", rockBtnClicked);
playerPaperBtn.addEventListener("click", paperBtnClicked);
playerScissorsBtn.addEventListener("click", scissorsBtnClicked);

// MAIN FUNCTIONS
function play() {
  const computerSelection = computerRandomPlay();
  playRound(playerSelection, computerSelection);
  roundCounter += 1;
  updateScoreTable();

  if (playerScore >= 5) {
    gameOver();

    showGameLog.innerText = `${playerSelection} beats ${computerSelection}\n\nYou won the game,congratulations!.`;
  } else if (computerScore >= 5) {
    gameOver();

    showGameLog.innerText = `${computerSelection} > ${playerSelection}\n\nYou Lose the game.\nBetter luck next time.`;
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    showGameLog.innerText = `You won the round\n\n${playerSelection} beats ${computerSelection}`;
    showGameLog.style.color = "green";
    playerScore += 1;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors")
    || (computerSelection === "paper" && playerSelection === "rock")
    || (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    showGameLog.innerText = `Computer won the round\n\n${computerSelection} beats ${playerSelection}`;
    showGameLog.style.color = "red";
    computerScore += 1;
  } else {
    showGameLog.style.color = "blue";
    showGameLog.innerText = "Round Draw";
  }
}

function computerRandomPlay() {
  const computerRandomPick = playOptions[Math.floor(Math.random() * playOptions.length)];
  if (computerRandomPick === "rock") {
    comRockBtn.style.opacity = "1";
    comPaperBtn.style.opacity = "0";
    comScissorsBtn.style.opacity = "0";
    showComputerPick.textContent = "Rock";
    setTimeout(() => {
      comRockBtn.style.opacity = "1";
      comPaperBtn.style.opacity = "1";
      comScissorsBtn.style.opacity = "1";
    }, 2000);
  } else if (computerRandomPick === "paper") {
    comPaperBtn.style.opacity = "1";
    comRockBtn.style.opacity = "0";
    comScissorsBtn.style.opacity = "0";
    showComputerPick.textContent = "Paper";
    setTimeout(() => {
      comPaperBtn.style.opacity = "1";
      comRockBtn.style.opacity = "1";
      comScissorsBtn.style.opacity = "1";
    }, 2000);
  } else if (computerRandomPick === "scissors") {
    comScissorsBtn.style.opacity = "1";
    comRockBtn.style.opacity = "0";
    comPaperBtn.style.opacity = "0";
    showComputerPick.textContent = "Scissors";
    setTimeout(() => {
      comScissorsBtn.style.opacity = "1";
      comRockBtn.style.opacity = "1";
      comPaperBtn.style.opacity = "1";
    }, 2000);
  }

  return computerRandomPick;
}

// HELPER FUNCTIONS
function rockBtnClicked() {
  playerSelection = "rock";
  playerRockBtn.style.pointerEvents = "none";
  playerPaperBtn.setAttribute("style", "opacity:0.070; pointer-events:none;");
  playerScissorsBtn.setAttribute(
    "style",
    "opacity:0.070; pointer-events:none;",
  );

  setTimeout(() => {
    playerRockBtn.style.pointerEvents = "initial";
    playerPaperBtn.setAttribute("style", "opacity:1; pointer-events:initial;");
    playerScissorsBtn.setAttribute(
      "style",
      "opacity:1; pointer-events:initial;",
    );
  }, 2000);

  play();
  return playerSelection;
}

function paperBtnClicked() {
  playerSelection = "paper";
  playerPaperBtn.style.pointerEvents = "none";
  playerRockBtn.setAttribute("style", "opacity:0.070; pointer-events:none;");
  playerScissorsBtn.setAttribute(
    "style",
    "opacity:0.070; pointer-events:none;",
  );

  setTimeout(() => {
    playerPaperBtn.style.pointerEvents = "initial";
    playerRockBtn.setAttribute("style", "opacity:1; pointer-events:initial;");
    playerScissorsBtn.setAttribute(
      "style",
      "opacity:1; pointer-events:initial;",
    );
  }, 2000);

  play();

  return playerSelection;
}

function scissorsBtnClicked() {
  playerSelection = "scissors";
  playerScissorsBtn.style.pointerEvents = "none";
  playerPaperBtn.setAttribute("style", "opacity:0.070; pointer-events:none;");
  playerRockBtn.setAttribute("style", "opacity:0.070; pointer-events:none;");

  setTimeout(() => {
    playerScissorsBtn.style.pointerEvents = "initial";
    playerRockBtn.setAttribute("style", "opacity:1; pointer-events:initial;");
    playerPaperBtn.setAttribute("style", "opacity:1; pointer-events:initial;");
  }, 2000);
  play();

  return playerSelection;
}

function updateScoreTable() {
  showPlayerScore.textContent = playerScore;
  showComScore.textContent = computerScore;
  showRoundCount.textContent = roundCounter;
}

function gameOver() {
  setTimeout(() => {
    playerRockBtn.style.pointerEvents = "none";
    playerPaperBtn.style.pointerEvents = "none";
    playerScissorsBtn.style.pointerEvents = "none";
  }, 2001);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
  showGameLog.innerText = "";
  updateScoreTable();
  playerRockBtn.style.pointerEvents = "initial";
  playerPaperBtn.style.pointerEvents = "initial";
  playerScissorsBtn.style.pointerEvents = "initial";
}
