const options = [{name: 'Rock', nemesis: 'Paper'},
    {name: 'Paper', nemesis: 'Scissors'},
    {name: 'Scissors', nemesis: 'Rock'}
];

let playerScore = 0;
let computerScore = 0;
let draw = 0; 

game();

function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound (playerSelection, computerSelection) {
    const arrangedPlayerSelection = capitalize(playerSelection);
    const playerSelectionObj = options.filter(obj => arrangedPlayerSelection === obj.name)[0];
    
    if (computerSelection.name === playerSelectionObj.nemesis) {
        computerScore++;
        return (`You lose! ${computerSelection.name} beats ${playerSelectionObj.name}`)
    } else if (computerSelection.name === playerSelectionObj.name) {        
        draw++;
        return (`It's a draw!${computerSelection.name} and ${playerSelectionObj.name} are equal`)
    } else { 
        playerScore++;       
        return (`You win! ${playerSelectionObj.name} beats ${computerSelection.name}`)
        }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    draw = 0;

    const playerInput = window.prompt('Choose Rock, Paper or Scissor and get ready for the battle');
    const computerChoice = computerPlay(options);

    console.log(playRound(playerInput, computerChoice))

    if (playerScore < computerScore) {
        console.log(`You've lost the game, You scored ${playerScore}, the computer scored ${computerScore} (draw: ${draw}), see you next time!`);
    }
    else if (playerScore > computerScore) {
        console.log(`You've won the game, You scored ${playerScore}, the computer scored ${computerScore} (draw: ${draw}), see you next time!`);
    } else {
        console.log(`It's a draw, You scored ${playerScore}, the computer scored ${computerScore} (draw: ${draw}), see you next time!`);
    }
}

function capitalize(strng) {
    return strng[0].toUpperCase() + strng.slice(1).toLowerCase()
  }