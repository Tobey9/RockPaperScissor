let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const resultEl = document.querySelector(".result");
const computerMoveEl = document.querySelector(".computerMove");

function startGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie";
      computerMoveEl.innerHTML = "✊";
    } else if (computerMove === "paper") {
      result = "lose";
      computerMoveEl.innerHTML = "🖐";
    } else if (computerMove === "scissor") {
      result = "win";
      computerMoveEl.innerHTML = "✌";
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "win";
      computerMoveEl.innerHTML = "✊";
    } else if (computerMove === "paper") {
      result = "tie";
      computerMoveEl.innerHTML = "🖐";
    } else if (computerMove === "scissor") {
      result = "lose";
      computerMoveEl.innerHTML = "✌";
    }
  }

  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "lose";
      computerMoveEl.innerHTML = "✊";
    } else if (computerMove === "paper") {
      result = "win";
      computerMoveEl.innerHTML = "🖐";
    } else if (computerMove === "scissor") {
      result = "tie";
      computerMoveEl.innerHTML = "✌";
    }
  }

  if (result === "win") {
    score.wins += 1;
  } else if (result === "lose") {
    score.losses += 1;
  } else if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  resultEl.innerHTML = `Wins : ${score.wins} Losses : ${score.losses} Ties : ${score.ties}`;
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  resultEl.innerHTML = `Wins : ${score.wins} Losses : ${score.losses} Ties : ${score.ties}`;
  computerMoveEl.innerHTML = "";
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "scissor";
  }

  return computerMove;
}
