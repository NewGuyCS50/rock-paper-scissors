//pseudocode: get player's selection
//            get computer's selection
//            compare both
//             get the winner.
//
//
//
//
//

//let playerchoice = prompt("Rock, Paper or Scissors").toLowerCase();
//getcomputerchoice()


let tally = 0;
let TotalRounds = 5;
let RoundsPlayed = 0;


let playerchoice = "";



    let btn1 = document.querySelector("#btn1")
    let btn2 = document.querySelector("#btn2")
    let btn3 = document.querySelector("#btn3")
    let btn4 = document.querySelector("#btn4")
    let div = document.querySelector("#div")

    btn1.addEventListener("click", () => {
       playerchoice = "rock";
      godly();
    })
    

    btn2.addEventListener("click", () => {
      playerchoice = "paper"
       godly();  
    })
   

    btn3.addEventListener("click", () => {
      playerchoice = "scissors"
       godly();
    })
   
    div.textContent = `Your score is ${tally}`

  

   









//              Picking computer's choice

function getcomputerchoice ()
{
  let randnum = Math.floor(Math.random() * 3);

  if (randnum == 0)
  {
    return "rock";
  }

  else if (randnum == 1)
  {
    return "paper";
  }

  else 
  {
    return "scissors";
  }

}

function godly(){

//               For playing a single round

function playround(playerselection, computerselection)
{
  console.log(playerselection, computerselection);

  //          For draw
  if (playerselection == computerselection)
  {
    return "Draw";
  }

  //            WHEN PLAYER WINS

  else if (
    (playerselection == "rock" && computerselection == "scissors") ||
    (playerselection == "scissors" && computerselection == "paper") ||
    (playerselection == "paper" && computerselection == "rock")
        )
  {
    return "You win";
  }

  else 
  {
    return "Computer wins";
  }
}




// NEW FUNCTION TO GET BEST OUT OF FIVE

// call playround once, and assign to variable
// if user wins we add +1 to tally
// if computer wins we add -1 to tally
// it draw do nothing
// do it five times





function game()

{
 
  


  let InterT = 0;
  

  // first round

  let first = playround(playerchoice, getcomputerchoice());
  
  if (first == "Computer wins")
  {
    tally = tally - 1;
    InterT = InterT - 1;
  }

  else if ( first == "You win")
  {
    tally = tally + 1;
    InterT = InterT + 1;
  }

 
  
RoundsPlayed++;
div.textContent = `Round ${RoundsPlayed} and your score is ` + tally;
if (RoundsPlayed == TotalRounds)
{
  if (tally > 0)
  {div.textContent = "You Won! Your score is " + tally}

  if (tally < 0)
  {div.textContent = "You Lost! Your score is " + tally}

  else if (tally == 0)
  {div.textContent = "Draw! Your score is " + tally}
}




  


console.log(tally);

if ( InterT == 0)
{
  return "draw";
}

else if ( InterT > 0)
{
  return "You win";
}

else {
  return "computer wins";
}





 
}

console.log(game());



}



