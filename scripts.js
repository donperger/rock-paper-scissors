const options = [{name: 'Rock', nemesis: 'Paper'},
    {name: 'Paper', nemesis: 'Scissors'},
    {name: 'Scissors', nemesis: 'Rock'}
];

 console.log(playRound('SciSsORs', computerPlay(options)));
 
function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound (playerSelection, computerSelection) {
    const arrangedPlayerSelection = capitalize(playerSelection);
    const playerSelectionObj = options.filter(obj => arrangedPlayerSelection === obj.name)[0];
    
    if (computerSelection.name === playerSelectionObj.nemesis) {
        return (`You lose! ${computerSelection.name} beats ${playerSelectionObj.name}`)
    } else if (computerSelection.name === playerSelectionObj.name) {        
        return (`It's a draw!${computerSelection.name} and ${playerSelectionObj.name} are equal`)
    } else {        
        return (`You win! ${playerSelectionObj.name} beats ${computerSelection.name}`)
        }
}

function capitalize(strng) {
    return strng[0].toUpperCase() + strng.slice(1).toLowerCase()
  }