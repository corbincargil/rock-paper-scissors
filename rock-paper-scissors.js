/* Plan of attack:
1. computerPlay() function that will randomly return rock, paper, or scissors.

2. singleRound() function that will run one round of the game using two parameters: playerSelection and computerSelection. Need to make the user input case-insensitive.

3. game() function that will call the singleRound function and run for 5 rounds of the game. Needs to keep score and report a winner & loser at the end of the 5 rounds.
*/

//Declaring some variables
let computerScore = 0; 
let playerScore = 0;
let playerChoice = 'scissors';

//Random number (1-3) to be used for the computers selection
let random = function() {
    let rand = Math.ceil(Math.random()*3);
    return rand;
};

// computerPlay function for taking the computers random selections/inputs
let computerPlay = function() {
    let option = random();
    if (option === 1) {
        console.log('Computer chooses: ' + 'rock');
        return 'rock';
    } else if (option === 2 ) {
        console.log('Computer chooses: ' + 'paper');
        return 'paper';
    } else if (option === 3) {
        console.log('Computer chooses: ' + 'scissors');
        return 'scissors';
    } else {
        console.log('Invalid computer input.');
    }

};



//single round if player clicks rock button
let singleRoundRock = function(playerSelection, computerSelection) {

    //Input from computer
    playerSelection = 'rock';   
    console.log('Player chooses: '+playerSelection);computerSelection = computerPlay();
    
    //Conditional statements for each outcome
    
    // tie
    if (playerSelection === computerSelection) {
        console.log('This round was a tie!');
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //human loses
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('The computer wins this round!');
        computerScore++;
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //player wins
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player 1 wins this round!');
        playerScore++;
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    } else {
        console.log('An error occured this round.');
    }
};

//single round if player clicks paper button
let singleRoundPaper = function(playerSelection, computerSelection) {

    //Input from computer
    playerSelection = 'paper';   
    console.log('Player chooses: '+playerSelection);computerSelection = computerPlay();
    
    //Conditional statements for each outcome
    
    // tie
    if (playerSelection === computerSelection) {
        console.log('This round was a tie!');
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //human loses
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('The computer wins this round!');
        computerScore++;
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //player wins
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Player 1 wins this round!');
        playerScore++;
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    } else {
        console.log('An error occured this round.');
    }
};

//single round if player clicks scissors button
let singleRoundScissors = function(playerSelection, computerSelection) {

    //Input from computer
    playerSelection = 'scissors';   
    console.log('Player chooses: '+playerSelection);computerSelection = computerPlay();
    
    //Conditional statements for each outcome
    
    // tie
    if (playerSelection === computerSelection) {
        console.log('This round was a tie!');
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //human loses
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('The computer wins this round!');
        computerScore++;
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //player wins
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('Player 1 wins this round!');
        playerScore++;
        console.log('The score is... Player: ' + playerScore + ' and Computer: ' + computerScore);
    //error
    } else {
        console.log('An error occured this round.');
    }

};
// console.log(singleRound(playerChoice, computerPlay() ));


// game function that runs 5 rounds of RPC
// game = function(playerSelection, computerSelection) {
//     for (let i = 1; i <= 5; i++) {
//         console.log('ROUND '+ (i));
        
//         singleRound(playerSelection,computerSelection);
        
//     }
// };
// game();


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', singleRoundRock);

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', singleRoundPaper);

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', singleRoundScissors);