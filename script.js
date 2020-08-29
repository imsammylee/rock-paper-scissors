
//generate a random variable for computer
function computerPlay() {
    const items = ["rock", "paper", "scissors"];
    return items[Math.floor(Math.random() * 3)];  
}


//change player's selection image
function imageChange() {
    const playerRock = document.getElementById("rock");
    playerRock.addEventListener("click", () => { document.querySelector(".player-selection").src = "rock_image.png" });
    const playerPaper = document.getElementById("paper");
    playerPaper.addEventListener("click", () => { document.querySelector(".player-selection").src = "paper_image.png" });
    const playerScissors = document.getElementById("scissors");
    playerScissors.addEventListener("click", () => { document.querySelector(".player-selection").src = "scissors_image.png" });
  }
//change computer's selection image


//call functions
const playerRock = document.getElementById("rock");
playerRock.addEventListener("click", playRound, imageChange());
const playerPaper = document.getElementById("paper");
playerPaper.addEventListener("click", playRound, imageChange());
const playerScissors = document.getElementById("scissors");
playerScissors.addEventListener("click", playRound, imageChange());


//set initial values
let plays = 0;
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = this.className.toUpperCase();
    computerSelection = computerPlay().toUpperCase();
    plays++;

    document.querySelector('.round-number').textContent = "Round " + plays;

    //Change computer's selection image
    function computerImage(computerSelection) {
      if (computerSelection == "ROCK") {
        document.querySelector('.computer-selection').src = 'rock_image.png';
      } else if (computerSelection == "PAPER") {
        document.querySelector('.computer-selection').src = 'paper_image.png';
      } else {
        document.querySelector('.computer-selection').src = 'scissors_image.png';
      }
    }
    computerImage(computerSelection);

    if (playerSelection === "ROCK" && computerSelection === "ROCK" ||
    playerSelection === "PAPER" && computerSelection === "PAPER" ||
    playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {

    document.querySelector('.result').textContent = "It\'s a draw!";

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
    playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
    playerSelection === "SCISSORS" && computerSelection === "ROCK") {

    document.querySelector('.result').textContent = "You lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;

    } else {
    document.querySelector('.result').textContent = "You win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
    }
    //display score results
    document.querySelector('.player-score').textContent =+playerScore;
    document.querySelector('.computer-score').textContent =+computerScore;

  //display winner of match and reset
  if (plays == 5) {
    if (playerScore < computerScore) {
      document.querySelector('.result').textContent = "Game over! You lost";
      document.querySelector('.result').style.color = "red";
    }
    if (playerScore > computerScore) {
      document.querySelector('.result').textContent = "Congratulations! You won!";
      document.querySelector('.result').style.color = "green";
    }
    if (playerScore == computerScore) {
      document.querySelector('.result').textContent = "It\'s a tie! Try again.";
      document.querySelector('.result').style.color = "orange";
    }

    //remove buttons and result notes at the end of 5 rounds
    //create new button to reload page
    var elem = document.querySelector('.choices');
    elem.parentNode.removeChild(elem);
   
    var elem = document.querySelector('#command');
    elem.parentNode.removeChild(elem);

    const butt = document.querySelector('.restart-button');
    butt.textContent = 'New Match';
    butt.setAttribute('style', 'display: inline-block;');

    //reload page
    butt.addEventListener('click', () => {
      location.reload();
    });
  }

}
/*

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function game(userChoice) {
    const computerChoice = computerPlay();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("youwin");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss": 
            draw();
            break;
    }

}
*/
/*
//what happens when you click
rock_div.addEventListener("click", () => {
    computerPlay();
    playerImageChange();
})
paper_div.addEventListener("click", () => {
    computerPlay();
    playerImageChange();
})
scissors_div.addEventListener("click", () => {
    computerPlay();
    playerImageChange();
})
*/
