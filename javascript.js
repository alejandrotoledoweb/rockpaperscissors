const choises = ["rock", "paper", "scissors"]
var playerCount = 0;
var computerCount = 0;


function computerPlay() {
    let pcchoise = choises[Math.floor(Math.random()*3)];
    return pcchoise;

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

function game(playerSelection, computerSelection) {
    let player = capitalize(playerSelection);
    let computer = computerSelection;
    if ((player == "Rock" && computer == "Scissors") || (
        player == "Paper" && computer == "Rock") || (
            player == "Scissors" && computer == "Paper"
        )){
        playerCount++;
        return 'You win! ${player} beats ${computer};
        } else if (player == computer) {
            return "It's a tie";
        } else {
            computerCount++;
            return 'You lose ${computer} beats ${player}'
        }
    } 

    function game() {
        
    }
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection))

}