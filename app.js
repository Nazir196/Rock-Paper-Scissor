// Creating Variables

const userChoiceDisply = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const possibleChoices = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result-display');
const newGame = document.getElementById('new-game');
let selectedChoice
let computerChoice

//  selecting        Grabbing each choice 
possibleChoices.forEach(possibleChoices =>      
    possibleChoices.addEventListener('click', (e)=>{        // Adding click function & event
        selectedChoice = e.target.id                        // targeting id's of possible choices
        userChoiceDisply.innerHTML = selectedChoice         // Replacing selected Choice with User Choice Display
        generateComputerChoice()               // when user select choice random number generates automatically
        getResult()
    }));

    function restartGame() {
        // Clear displays
        userChoiceDisply.innerHTML = '';
        computerChoiceDisplay.innerHTML = '';
        resultDisplay.innerHTML = 'Lets see who wins!!';
    }
    
    // Add event listener for the new game button
    newGame.addEventListener('click', restartGame);


    // creating computer choice function
    function generateComputerChoice() {                         // Random number generator Function 
        const randomNumber = Math.floor(Math.random() * 3) + 1  // Creating random number generator Function 
        
        if(randomNumber === 1) {
            computerChoice = 'Rock';                            // Assigning computer choice values
        }
        if(randomNumber === 2) {
            computerChoice = 'Scissor';                         // Assigning computer choice values
        }
        if(randomNumber === 3) {
            computerChoice = 'Paper';                           // Assigning computer choice values
        }
        computerChoiceDisplay.innerHTML = computerChoice
    };

   // creating get result function
   function getResult(){
    if(computerChoice === selectedChoice) {
        resultDisplay.innerHTML = 'its a Draw'
    }
    if(computerChoice === 'Rock' && selectedChoice === 'Paper') {
        resultDisplay.innerHTML = 'Yeyy!! You Win.' 
    }
    if(computerChoice === 'Rock' && selectedChoice === 'Scissor') {
        resultDisplay.innerHTML = 'Oops!! You Lose.' 
    }
    if(computerChoice === 'Paper' && selectedChoice === 'Scissor') {
        resultDisplay.innerHTML = 'Yeyy!! You Win.' 
    }
    if(computerChoice === 'Paper' && selectedChoice === 'Rock') {
        resultDisplay.innerHTML = 'Oops!! You Lose.' 
    }
    if(computerChoice === 'Scissor' && selectedChoice === 'Rock') {
        resultDisplay.innerHTML = 'Yeyy!! You Win.'  
    }
    if(computerChoice === 'Scissor' && selectedChoice === 'Paper') {
        resultDisplay.innerHTML = 'Oops!! You Lose.' 
    }
   }