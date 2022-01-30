const options = [{name: 'Rock', nemesis: 'Paper'},
    {name: 'Paper', nemesis: 'Scissors'},
    {name: 'Scissors', nemesis: 'Rock'}
];

playRound('Scissors', computerPlay(options));

function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound (playerSelection, computerSelection) {
    const playerSelectionObj = options.filter(obj => playerSelection === obj.name)[0];
    
    if (computerSelection.name === playerSelectionObj.nemesis) {
        console.log(`You lose! ${computerSelection.name} beats ${playerSelectionObj.name}`)
    } else if (computerSelection.name === playerSelectionObj.name) {        
        console.log(`It's a draw!${computerSelection.name} and ${playerSelectionObj.name} are equal`)
    } else {        
        console.log(`You win! ${playerSelectionObj.name} beats ${computerSelection.name}`)
        }
}