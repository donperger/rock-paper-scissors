const options = ['Rock', 'Paper', 'Scissors'];

console.log(computerPlay(options));

function computerPlay(options) {
    return options[Math.floor(Math.random()*options.length)];
}