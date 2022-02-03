const options = [{name: 'Rock', nemesis: 'Paper'},
    {name: 'Paper', nemesis: 'Scissors'},
    {name: 'Scissors', nemesis: 'Rock'}
];

let playerScore = 0;
let computerScore = 0;
let draw = 0; 

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    const btnId = rockBtn.id;
    const computerChoice = computerPlay(options);

    console.log(playRound(btnId, computerChoice))
    
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    const btnId = paperBtn.id;
    const computerChoice = computerPlay(options);

    console.log(playRound(btnId, computerChoice))
    
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    const btnId = scissorsBtn.id;
    const computerChoice = computerPlay(options);

    console.log(playRound(btnId, computerChoice))
    
});

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

function capitalize(strng) {
    return strng[0].toUpperCase() + strng.slice(1).toLowerCase()
  }