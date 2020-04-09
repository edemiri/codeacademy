let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generates a random target number
const generateTarget = () => {
    return Math.floor(Math.random()*9);
};

//Gets the absolute distance between two numbers
const getAbsoluteDistance = (firstNr, secondNr) => {
    return Math.abs(firstNr - secondNr);
};


const compareGuesses = (userGuess, compGuess, targetNumber) => {
    if (getAbsoluteDistance(targetNumber, userGuess) < getAbsoluteDistance(targetNumber,compGuess) || targetNumber === userGuess) {
        console.log('Target Nr:' + targetNumber + '\nUser Guess:' + userGuess + '\nComputer Guess:' + compGuess);
        return 'Human won';
        return true;
    } else if (getAbsoluteDistance(targetNumber,userGuess) > getAbsoluteDistance(targetNumber,compGuess) || targetNumber === compGuess) {
        console.log('Target Nr:' + targetNumber + '\nUser Guess:' + userGuess + '\nComputer Guess:' + compGuess)
        return 'Computer won';
        return false;
    }  else if (getAbsoluteDistance(targetNumber,userGuess) === getAbsoluteDistance(targetNumber,compGuess)) {
        console.log('Target Nr:' + targetNumber + '\nUser Guess:' + userGuess + '\nComputer Guess:' + compGuess);
        return 'Draw';
        return true;
    }  
};


const updateScore = winner =>{
    let humanScore 
    let computerScore

    if (winner === 'humans'){
        humanScore++;
    } else if (winner === 'computers') {
        computerScore++;
    } 
};

const advanceRound = () => {
    currentRoundNumber++;
};

// Testing the Compare Guesses
console.log(compareGuesses(generateTarget(),generateTarget(),generateTarget()));