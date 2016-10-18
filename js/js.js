window.onload = function(){ 
document.getElementById("start-game").onclick = playTournament;

    // user select rocks, paper or scissors
    function getUserChoice(){
        var userSelection = prompt("Do you choose rock, paper or scissors?");
        if (userSelection.match(/^(paper|Papers|papers|Paper)$/)) {
            console.log('its paper Jim.');
        } else if (userSelection.match(/^(scissor|scissors|Scissors|Scissor)$/)) {
            console.log('its scissors Jim.');
        } else if (userSelection.match(/^(rock|Rocks|Rock|rocks)$/)) {
            console.log('its rock Jim.');
        } else {
           getUserChoice(alert("You didn't pick a correct game peice. What will you choose? Rock, paper or scissors?"));
        }

        return userSelection;
    }

    // get computer choice
    function getComputerChoice(){
        var computerSelection = Math.random();
        if (computerSelection < 0.34) {
            computerSelection = "rock";
        } else if(computerSelection <= 0.67) {
            computerSelection = "paper";
        } else {
            computerSelection = "scissors";
        }
        alert("Computer chose " + computerSelection);
        return computerSelection;
    }

    // Get winner
    function getWinner(computer, user){
        if (computer === user ) {
            return "Tie";
        } else if ( (computer === "rock" && user == "scissors") || (computer === "paper" && user == "rock") || (computer === "scissors" && user == "paper") ){
            return "Computer";
        }else {
            return("User");
        }
    }

    function runProgram(){
            var userSelection = getUserChoice();
            var computerSelection = getComputerChoice();
            var winner = getWinner(computerSelection, userSelection);
            alert("Winner is "+ winner);
            return winner;
    }

    function playTournament(){
        var userScore = 0;
        var computerScore = 0;
        var winningScore = prompt("How many games until you win?")
        while (userScore < winningScore && computerScore < winningScore){
            var gameWinner = runProgram();

            if (gameWinner === "Computer"){
                computerScore++;
                alert("Computer won round");
            } else if (gameWinner === "User"){
                userScore++;
                alert("User won round");
            }  else {
                alert("Round was tie");
            }
        }

        if (userScore > computerScore){
            alert("User wons game.  Score: Computer-" + computerScore + " User-" + userScore); 
        } else{
            alert("Computer wons game.  Score: Computer-" + computerScore + " User-" + userScore);
        }
    }

    // your code 

    // Paper, Papers, paper, or papers
    // Scissor, Scissors, scissor or scissors
    // Rock, Rocks, rock or roc

};