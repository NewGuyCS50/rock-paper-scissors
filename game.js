//pseudocode: get player's selection
//            get computer's selection
//            compare both
//             get the winner.
//
//
//
//
//

let input = prompt("Rock, Paper or Scissors");
let playerchoice = input.toLowerCase();

console.log(playerchoice);

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



//               For playing a single round

function round(playerselection, computerselection)
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

console.log(round(playerchoice, getcomputerchoice()))