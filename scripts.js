const options = [{name: 'Rock', nemesis: 'Paper'},
    {name: 'Paper', nemesis: 'Scissors'},
    {name: 'Scissors', nemesis: 'Rock'}
];

let playerScore = 4;
let computerScore = 4; 

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultsDisplay = document.querySelector('#results');
const container = document.querySelector('.container');

displayScores();

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    const btnId = rockBtn.id;

    countdown(btnId);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', (e) => {
    const btnId = paperBtn.id;

    countdown(btnId);
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    const btnId = scissorsBtn.id;
    
    countdown(btnId);
});

function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}

function countdown(playerChoice) {
    resultsDisplay.textContent = `${options[0].name}`;
    let counter = 1;

    const timer = setInterval(() => {
        if (counter >= 3) {
            clearInterval(timer);
            
            const computerChoice = computerPlay(options);
            resultsDisplay.textContent = playRound(playerChoice, computerChoice);
            displayScores();
        } else {
            resultsDisplay.textContent = `${options[counter].name}`;
            counter += 1;
        }
    }, 1000); 
}

function playRound (playerSelection, computerSelection) {
    const arrangedPlayerSelection = capitalize(playerSelection);
    const playerSelectionObj = options.filter(obj => arrangedPlayerSelection === obj.name)[0];
    
    if (computerSelection.name === playerSelectionObj.nemesis) {
        computerScore++;
        return (`You lose! ${computerSelection.name} beats ${playerSelectionObj.name}`)
    } else if (computerSelection.name === playerSelectionObj.name) {        
        return (`It's a draw!${computerSelection.name} and ${playerSelectionObj.name} are equal`)
    } else { 
        playerScore++;       
        return (`You win! ${playerSelectionObj.name} beats ${computerSelection.name}`)
        }
}

function displayScores() {
    playerScoreDisplay.textContent = `Your score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer's score: ${computerScore}`
    compareScores();
}

function compareScores() {
    if ( playerScore === 5) {
        resultsDisplay.textContent = "Congratulations! You've won";
        container.classList.add('win');
        disableButtons();
    } else if (computerScore === 5) {
        resultsDisplay.textContent = "Sorry! You've lost";
        container.classList.add('lose');
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.setAttribute("disabled","disabled")
    })
}

function capitalize(strng) {
    return strng[0].toUpperCase() + strng.slice(1).toLowerCase()
  }