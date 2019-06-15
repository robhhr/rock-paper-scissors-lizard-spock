const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoard = document.getElementsByClassName('score-board');
const results = document.getElementsByClassName('result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

function mainGame() {

  function gameStart(choice) {
    console.log("hey", choice)
  };

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