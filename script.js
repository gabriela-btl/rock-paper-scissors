console.log("Hello world!")

function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random()*3)];
}

function firstCharUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function round(playerSelection, computerSelection) {

    let playerSelectionLowerCase = playerSelection.toLowerCase();

    if (playerSelectionLowerCase == computerSelection) {
        return ("Nobody wins ! It's a tie");
    }

    else if (playerSelectionLowerCase == "rock" && computerSelection == "scissors"
            || playerSelectionLowerCase == "paper" && computerSelection == "rock"
            || playerSelectionLowerCase == "scissors" && computerSelection == "paper") {
        return ("You win! " + firstCharUpperCase(playerSelectionLowerCase) + " beats " + computerSelection);
    }

    else {
        return ("You lose! " + firstCharUpperCase(computerSelection) + " beats " + playerSelectionLowerCase);
    }
}

function game() {

    let player_score = 0,
        computer_score = 0;

    for (let i=0; i < 5; i++) {
        let playerSelection = prompt("Choose your move"),
            computerSelection = computerPlay(),
            round_result;

        round_result = round(playerSelection, computerSelection);
        
        if (round_result.slice(0, 9) == "You win! ") {
            player_score += 1;
            console.log("You win the round");
        }

        else if (round_result.slice(0, 9) == "You lose!") {
            computer_score += 1;
            console.log("You lose the round");
        }

        else {
            console.log("It's a tie !")
        }
    }

    console.log("Final score : Player has " + player_score + "points and Computer has " + computer_score + "points !")

}

game();