let userScore = 0;
let AIScore = 0;
const userScoreHTML = document.getElementById('user-score');
const AIScoreHTML = document.getElementById('computer-score');
const scoreBoard = document.getElementsByClassName('score-board');
const results = document.getElementById('outcome');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

function getAIChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
};

function convertText(letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  if (letter === "scissors") return "Scissors";
  if (letter === "lizard") return "Lizard";
  return "Spock";
}

function userWin(user, AI) {
  const colorSelector = document.getElementById(user);
  userScore++;
  userScoreHTML.innerHTML = userScore;
  AIScoreHTML.innerHTML = AIScore;
  results.innerHTML = `${convertText(user)} defeats ${convertText(AI)}. Congrats! 🏆`;
  colorSelector.classList.add('user-win');
  setTimeout(function() { colorSelector.classList.remove('user-win') }, 350);
};

function userLost(user, AI) {
  const colorSelector = document.getElementById(user);
  AIScore++;
  userScoreHTML.innerHTML = userScore;
  AIScoreHTML.innerHTML = AIScore;
  results.innerHTML = `${convertText(user)} losses to ${convertText(AI)}. Try again! ❌`;
  colorSelector.classList.add('user-loss');
  setTimeout(function() { colorSelector.classList.remove('user-loss') }, 350);
};

function tie(user, AI) {
  const colorSelector = document.getElementById(user);
  results.innerHTML = `${convertText(user)} equals ${convertText(AI)}. Draw! ♻`;
  colorSelector.classList.add('user-draw');
  setTimeout(function() { colorSelector.classList.remove('user-draw') }, 350);
};

function gameStart(userChoice) {
  const AIChoice = getAIChoice();
  switch (userChoice + AIChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
    case "lizardspock":
    case "spockscissors":
    case "rocklizard":
    case "scissorsspock":
    case "lizardpaper":
    case "paperspock":
    case "spockrock":
      userWin(userChoice, AIChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "scissorspaper":
    case "spocklizard":
    case "scissorsspock":
    case "lizardrock":
    case "spockscissors":
    case "paperlizard":
    case "spockpaper":
    case "rockspock":
      userLost(userChoice, AIChoice);
      break;
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
    case "rockrock":
    case "scissorsscissors":
      tie(userChoice, AIChoice);
      break;
  }
}

function mainGame() {

  rock.addEventListener('click', function() {
    gameStart("rock")
  });

  paper.addEventListener('click', function() {
    gameStart("paper")
  });

  scissors.addEventListener('click', function() {
    gameStart("scissors")
  });

  lizard.addEventListener('click', function() {
    gameStart("lizard")
  });

  spock.addEventListener('click', function () {
    gameStart("spock")
  });
};

mainGame();