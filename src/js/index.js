let userScore = 0;
const AIScore = 0;
const userScoreHTML = document.getElementById('user-score');
const AIScoreHTML = document.getElementById('computer-score');
const scoreBoard = document.getElementsByClassName('score-board');
const results = document.getElementsByClassName('result');
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

function userWin() {
  userScore++;
  userScoreHTML.innerHTML = userScore;
  AIScore.innerHTML = AIScore;
};

function userLost() {
  console.log("LOST");
};

function tie() {
  console.log("TIE")
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
      userWin();
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
      userLost();
      break;
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
    case "rockrock":
    case "scissorsscissors":
      tie();
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