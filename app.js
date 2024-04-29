let userChoice;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const DevChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
};

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
    userChoice = 'rock';
    play();
});

paper.addEventListener('click', () => {
    userChoice = 'paper';
    play();
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    play();
});

function play() {
    const playerOption = document.querySelector('.playeroption');
    const devOption = document.querySelector('.Devoption');
    const roundWinner = document.querySelector('.roundWinner');
    const playerCounter = document.querySelector('.player');
    const devCounter = document.querySelector('.Dev');
    const winner = document.querySelector('.win');

    playerOption.innerText = "";
    devOption.innerText = "";
    roundWinner.innerText = "";

    setTimeout(() => {
        playerOption.innerText = "You choose: " + userChoice;
    }, 200);

    const devChoice = DevChoice();

    setTimeout(() => {
        devOption.innerText = "Dev chooses: " + devChoice;
    }, 500);

    if (userChoice === "rock") {
        if (devChoice === "paper") {
            setTimeout(() => {
                roundWinner.innerText = "Developer wins";
                roundWinner.style.color = 'red';
            }, 800);
            computerScore++;
            devCounter.innerText = computerScore;
        } else if (devChoice === "scissors") {
            setTimeout(() => {
                roundWinner.innerText = "You win!";
                roundWinner.style.color = 'green';
            }, 800)
            playerScore++;
            playerCounter.innerText = playerScore;
        } else {
            setTimeout(() => {
                roundWinner.innerText = "It's a tie!"
                roundWinner.style.color = 'grey';
            }, 800)
        }
    } else if (userChoice === "paper") {
        if (devChoice === "rock") {
            setTimeout(() => {
                roundWinner.innerText = "You win!";
                roundWinner.style.color = 'green';
            }, 800)
            playerScore++;
            playerCounter.innerText = playerScore;
        } else if (devChoice === "scissors") {
            setTimeout(() => {
                roundWinner.innerText = "Developer wins";
                roundWinner.style.color = 'red';
            }, 800);
            computerScore++;
            devCounter.innerText = computerScore;
        } else {
            setTimeout(() => {
                roundWinner.innerText = "It's a tie!"
                roundWinner.style.color = 'grey';
            }, 800)
        }
    } else {
        if (devChoice === "rock") {
            setTimeout(() => {
                roundWinner.innerText = "Developer wins";
                roundWinner.style.color = 'red';
            }, 800);
            computerScore++;
            devCounter.innerText = computerScore;
        } else if (devChoice === "paper") {
            setTimeout(() => {
                roundWinner.innerText = "You win!";
                roundWinner.style.color = 'green';
            }, 800)
            playerScore++;
            playerCounter.innerText = playerScore;
        } else {
            setTimeout(() => {
                roundWinner.innerText = "It's a tie!"
                roundWinner.style.color = 'grey';
            }, 800)
        }
    }

    if (playerScore === 5) {
        setTimeout(() => {
            winner.innerText = "You won the game!";
        },1000);
        winner.style.color = 'green';
        setTimeout(resetGame, 3000);
    } else if (computerScore === 5) {
        setTimeout(() => {
        winner.innerText = "Developer won the game!";
    },1000);
        winner.style.color = 'red';
        setTimeout(resetGame, 3000);
    }
}

function resetGame() {
    const playerOption = document.querySelector('.playeroption');
    const devOption = document.querySelector('.Devoption');
    const roundWinner = document.querySelector('.roundWinner');
    const playerCounter = document.querySelector('.player');
    const devCounter = document.querySelector('.Dev');
    const winner = document.querySelector('.win');

    playerOption.innerText = "";
    devOption.innerText = "";
    roundWinner.innerText = "";
    winner.innerText = "";
    playerCounter.innerText = "0";
    devCounter.innerText = "0";
    playerScore = 0;
    computerScore = 0;
    winner.style.color = 'inherit';
}
// {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     for(let i = 0; i < 5; i++)
//     {
//         const playerSelection = prompt("Enter Rock, paper or scissors");
//         const computerSelection = getComputerChoice();
//         console.log("You choose: " + playerSelection + "\n Computer chooses: " + computerSelection);
//         let result = RPS(playerSelection, computerSelection);
//         console.log(result);
//         if(result.substring(4,8) === "win!")
//             scorePlayer++;
//         else if(result.substring(4,8) === "lose")
//             scoreComputer++;
//     }
//     let scoreDifference = Math.abs(scorePlayer - scoreComputer);
//     if (scorePlayer > scoreComputer)
//         console.log("Player wins by " + scoreDifference + " points");
//     else if (scoreComputer > scorePlayer)
//         console.log("Computer wins by " + scoreDifference + " points");
//     else
//         console.log("Tie");
//     function RPS(playerSelection, computerSelection)
//     {
//         let p = playerSelection.toLowerCase();
//         if(p === "rock")
//         {
//             if(computerSelection == "rock")
//                 return "Its a It's a tie!";
//             else if(computerSelection == "paper")
//                 return "You lose! paper beats rock!"
//             else
//                 return "You win! Rock beats scissors";
//         }
//         else if(p === "paper")
//         {
//             if(computerSelection == "rock")
//                 return "You win! paper beats rock!";
//             else if(computerSelection == "paper")
//                 return "Its a It's a tie!"
//             else
//                 return "You lose! Rock beats scissors";
//         }
//         else
//         {
//             if(computerSelection == "rock")
//                 return "You lose! Rock beats scissors";
//             else if(computerSelection == "paper")
//                 return "You win! paper beats rock!"
//             else
//                 return "Its a It's a tie!";
//         }
//     }
// }
// playGame();