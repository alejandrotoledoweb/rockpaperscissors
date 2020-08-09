const choises = ["rock", "paper", "scissors"]
let manCount = 0;
let pcCount = 0;

function computerPlay() {
    let pcchoise = choises[Math.floor(Math.random()*3)];
    return pcchoise;
}

function allLowerCase(str) {
    return str.toLowerCase();
}

function letsPlay(man,pc) {
    let manc = allLowerCase(man);
    let pcc = pc;

    if ((manc == "rock" && pcc == "scissors") || (manc == "paper" && pcc == "rock") || (manc == "scissors" && pcc == "paper")) {
        return 'Man wins';
        manCount++;
    } else if (manc == pcc) {
        return "It's a tie";
    } else if ((pcc == "rock" && manc == "scissors") || (pcc == "paper" && manc == "rock") || (pcc == "scissors" && manc == "paper")) {
        pcCount++;
    } else {
        return 'Wrong information';
    }
}

function manplay() {
    for (let i=0; i<5; i++) {
        let man = prompt("write one choise every time: paper, rock, scissors; max times = 5")
        const pcc = computerPlay();
        console.log(lesPlay(man,pc));
    }
    whosWin(manCount,pcCount);
}

    function whosWin(n1, n2) {
        let message = document.getElementById("final");
        if (n1 > n2) {
            message.innerHTML = 'You are a WINNER' <br> + 'player ${n1} - computer ${n2} - tie ${5 - n1 - n2}';
        } else if (n1 < n2) {
            message.innerHTML = 'You are a LOSER <br>player ${n1} - computer ${n2} - tie ${5 - n1 - n2}';
        } else {
            message.innerHTML = 'Ok, It\'s a tie <br>player n1 - computer ${n2} - tie ${5 - n1 - n2}';
        }
    }
    