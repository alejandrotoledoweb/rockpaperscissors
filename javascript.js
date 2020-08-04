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

    function letsplay() {
        let round = 0;
        while (round <5) {
            let playerSelection = promp("Pick one: Rock, Paper or Scissors");
            const computerSelection = computerPlay;
            console.log(game(playerSelection, computerSelection));
            round++;
        }
        whosWin(playerCount, computerCount);
    }

    function whosWin(n1, n2) {
        let message = document.getElementById("final");
        if (n1 > n2) {
            message.innerHTML = 'You are a WINNER <br> player ${n1} - computer ${n2} - tie ${5-n1-n2}';
        } else if (n1 < n2) {
            MessageChannel.innerHTML = "You are a LOSER <br> player ${n1} - computer ${n2} - tie ${5-n1-n2}";
        } else {
            MessageChannel.innerHTML = "Ok, It's a tie <br> player ${n1} - computer ${n2} - tie ${5-n1-n2}";
        }
    }
    