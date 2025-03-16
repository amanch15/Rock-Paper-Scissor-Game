let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const userPoint = document.querySelector("#user-score");
const computerPoint = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    message.innerText = "Game was draw!";
    message.style.backgroundColor = "black";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userPoint.innerText = userScore;
        message.innerText = "You win!";
        message.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerPoint.innerText = computerScore;
        message.innerText = "Computer win!";
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);

    const computerChoice = genComputerChoice();
    console.log("computer choice=", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false : true;
        }
        else {
            (userChoice === "scissor")
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});