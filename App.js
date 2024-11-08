let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options =["rock", "paper", "scissors"];
    let randInx=Math.floor(Math.random()*3);
    return options[randInx];
}

let drawGame=()=>{
    // console.log("The Game was Draw");
    msg.innerText="The Game was Draw, Play Again!";
    msg.style.backgroundColor="#081b31";
}

let showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=`${userScore}`;
        // console.log("You Win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=`${compScore}`;
        // console.log("You Lose");
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    // console.log("user choice =", userChoice);
    // Generate Computer Choice
    let compChoice=genCompChoice();
    // console.log("computer choice= ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin=compChoice==="paper" ? false:true;
        }
        else if (userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            // rock , paper
            userWin = compChoice==="rock" ? false : true;
        }
        // console.log(userWin);
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
    })
})