/* Overiview:
1. computerPlay() function will randomly return rock, paper, or scissors for computer.

2. There is a 'singlRound()' function for each player choice. Each singleRound() function  will run one round of the game using two parameters: playerSelection and computerSelection. One of these functions is ran every time a user clicks one of the rock paper or scissors buttons.

3. Each singleRound() function also contains some DOM manipulation. Some of it is to update the scoreboard after each round (each time a player clicks one of the three buttons). The DOM mnaipulation will remove the previous round results (if a previous round was played) and the display the new round results when a play clicks one of the three buttons (i.e. it will display what the user chose, what the computer "chose" and who the winner is). */

//Declaring some variables
let computerScore = 0; 
let playerScore = 0;
let playerChoice;
let compPlayResult; 
let roundResult;
let compPlayOutput;
let humanPlayOutput;

//Random number (1-3) to be used for the computers selection
let random = function() {
    let rand = Math.ceil(Math.random()*3);
    return rand;
};

// computerPlay function for taking the computers random selections/inputs
let computerPlay = function() {
    let option = random();
    if (option === 1) {
        compPlayResult = 'Rock '
        return 'rock';
    } else if (option === 2 ) {
        compPlayResult = 'Paper '
        return 'paper';
    } else if (option === 3) {
        compPlayResult = 'Scissors '
        return 'scissors';
    } else {
        console.log('Invalid computer input.');
    }
};



//single round if player clicks rock button
let singleRoundRock = function(playerSelection, computerSelection) {

    //Inputs from player and computer
    playerSelection = 'rock';   
    computerSelection = computerPlay();
    
    //Conditional statements for each outcome
    
    // tie
    if (playerSelection === computerSelection) {
        roundResult = 'This round was a draw.';
    //human loses
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundResult = 'Computers win this round!';
        computerScore++;
    //player wins
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundResult = 'Humans win this round!';
        playerScore++;
    } else {
        roundResult = 'An error occured this round.';
    }

    //Update the human score on the score board
    let humanScoreNumber = document.getElementById('human-score-number');
    humanScoreNumber.textContent = playerScore;

    //Update the computer score on the score board
    let computerScoreNumber = document.getElementById('computer-score-number');
    computerScoreNumber.textContent = computerScore;

    //Remove prev results (if they exist) and output new results
    if (compPlayOutput != null) {
       let computerResultToRemove = document.getElementById('computer-chose');
       computerResultToRemove.remove(); 
    }
    compPlayOutput = document.createElement('p')
    compPlayOutput.setAttribute('id','computer-chose');
    compPlayOutput.textContent = compPlayResult;
    let compChoseDiv = document.getElementById('comp-chose-div');
    compChoseDiv.appendChild(compPlayOutput);

    if (humanPlayOutput != null) {
        let humanResultToRemove = document.getElementById('human-chose');
        humanResultToRemove.remove(); 
     }
    humanPlayOutput = document.createElement('p')
    humanPlayOutput.setAttribute('id','human-chose');
    humanPlayOutput.textContent = 'Rock';
    let humanChoseDiv = document.getElementById('human-chose-div');
    humanChoseDiv.appendChild(humanPlayOutput);
    

    //Display the winner of the round
    let roundResultsOutput = document.getElementById('round-result')
    roundResultsOutput.textContent = roundResult;
};

//single round if player clicks paper button
let singleRoundPaper = function(playerSelection, computerSelection) {

    //Inputs from player and computer
    playerSelection = 'paper';   
    computerSelection = computerPlay();
    
    //Conditional statements for each outcome
    
    // tie
    if (playerSelection === computerSelection) {
        roundResult = 'This round was a draw.';
    //human loses
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundResult = 'Computers win this round!';
        computerScore++;
    //player wins
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundResult = 'Humans win this round!';
        playerScore++;
    } else {
        roundResult = 'An error occured this round.';
    }

    //Update the human score on the score board
    let humanScoreNumber = document.getElementById('human-score-number');
    humanScoreNumber.textContent = playerScore;

    //Update the computer score on the score board
    let computerScoreNumber = document.getElementById('computer-score-number');
    computerScoreNumber.textContent = computerScore;


    //Remove prev results (if they exist) and output new results
    if (compPlayOutput != null) {
        let needRemoved = document.getElementById('computer-chose');
         needRemoved.remove(); 
     }
    compPlayOutput = document.createElement('p')
    compPlayOutput.setAttribute('id','computer-chose');
    compPlayOutput.textContent = compPlayResult;
    let compChoseDiv = document.getElementById('comp-chose-div');
    compChoseDiv.appendChild(compPlayOutput);

    if (humanPlayOutput != null) {
        let humanResultToRemove = document.getElementById('human-chose');
        humanResultToRemove.remove(); 
     }
    humanPlayOutput = document.createElement('p')
    humanPlayOutput.setAttribute('id','human-chose');
    humanPlayOutput.textContent = 'Paper';
    let humanChoseDiv = document.getElementById('human-chose-div');
    humanChoseDiv.appendChild(humanPlayOutput);
    
    //Display the winner of the round
    let roundResultsOutput = document.getElementById('round-result')
    roundResultsOutput.textContent = roundResult;
};

//single round if player clicks scissors button
let singleRoundScissors = function(playerSelection, computerSelection) {

    //Inputs from player and computer
    playerSelection = 'scissors';   
    computerSelection = computerPlay();
    
    //Conditional statements for each outcome
    
    // tie
    if (playerSelection === computerSelection) {
        roundResult = 'This round was a draw.';
    //human loses
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundResult = 'Computers win this round!';
        computerScore++;
    //player wins
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundResult = 'Humans win this round!';
        playerScore++;
    //error
    } else {
        roundResult = 'An error occured this round.';
    }
    //Update the human score on the score board
    let humanScoreNumber = document.getElementById('human-score-number');
    humanScoreNumber.textContent = playerScore;

    //Update the computer score on the score board
    let computerScoreNumber = document.getElementById('computer-score-number');
    computerScoreNumber.textContent = computerScore;

    //Remove prev results (if they exist) and output new results
    if (compPlayOutput != null) {
        let needRemoved = document.getElementById('computer-chose');
         needRemoved.remove(); 
     }
    compPlayOutput = document.createElement('p')
    compPlayOutput.setAttribute('id','computer-chose');
    compPlayOutput.textContent = compPlayResult;
    let compChoseDiv = document.getElementById('comp-chose-div');
    compChoseDiv.appendChild(compPlayOutput);

    if (humanPlayOutput != null) {
        let humanResultToRemove = document.getElementById('human-chose');
        humanResultToRemove.remove(); 
     }
    humanPlayOutput = document.createElement('p')
    humanPlayOutput.setAttribute('id','human-chose');
    humanPlayOutput.textContent = 'Scissors';
    let humanChoseDiv = document.getElementById('human-chose-div');
    humanChoseDiv.appendChild(humanPlayOutput);
    
    //Display the winner of the round    
    let roundResultsOutput = document.getElementById('round-result')
    roundResultsOutput.textContent = roundResult;
};

//DOM manipulation for the three buttons
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', singleRoundRock);

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', singleRoundPaper);

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', singleRoundScissors);


// game function that runs 5 rounds of RPC
// game = function(playerSelection, computerSelection) {
//     for (let i = 1; i <= 5; i++) {
//         console.log('ROUND '+ (i));
        
//         singleRound(playerSelection,computerSelection);
        
//     }
// };
// game();

// let resultsDiv = document.getElementById('results');
//     resultsDiv.insertBefore(compPlayOutput, resultsDiv.lastElementChild);