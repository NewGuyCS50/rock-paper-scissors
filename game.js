//pseudocode: get player's selection
//            get computer's selection
//            compare both
//             get the winner.
//
//
//
//
//

let playerchoice = prompt("Rock, Paper or Scissors").toLowerCase();
//let playerchoice = input.toLowerCase();

//console.log(playerchoice);

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

//console.log(playround(playerchoice, getcomputerchoice()))


// NEW FUNCTION TO GET BEST OUT OF FIVE

// call playround once, and assign to variable
// if user wins we add +1 to tally
// if computer wins we add -1 to tally
// it draw do nothing
// do it five times

function game()

{
  let tally = 0;

  // first round

  let first = playround(playerchoice, getcomputerchoice());
  
  if (first == "Computer wins")
  {
    tally = tally - 1;
  }

  else if ( first == "You win")
  {
    tally = tally + 1;
  }

  // second round
  let  playerchoice2 = prompt("rock paper or scissors").toLowerCase();


  let second = playround(playerchoice2, getcomputerchoice());
  
  if (second == "Computer wins")
  {
    tally = tally - 1;
  }

  else if ( second == "You win")
  {
    tally = tally + 1;
  }

  // third round
  let  playerchoice3 = prompt("rock paper or scissors").toLowerCase();

  let third = playround(playerchoice3, getcomputerchoice());
  
  if (third == "Computer wins")
  {
    tally = tally - 1;
  }

  else if ( third == "You win")
  {
    tally = tally + 1;
  }

  // fourth round
  let  playerchoice4 = prompt("rock paper or scissors").toLowerCase();



  let fourth = playround(playerchoice4, getcomputerchoice());
  
  if (fourth == "Computer wins")
  {
    tally = tally - 1;
  }

  else if ( fourth == "You win")
  {
    tally = tally + 1;
  }

  // fifth round

 let  playerchoice5 = prompt("rock paper or scissors").toLowerCase();


  let fifth = playround(playerchoice5, getcomputerchoice());
  
  if (fifth == "Computer wins")
  {
    tally = tally - 1;
  }

  else if ( fifth == "You win")
  {
    tally = tally + 1;
  }



console.log(tally);

if ( tally == 0)
{
  return "draw";
}

else if ( tally > 0)
{
  return "You win";
}

else {
  return "computer wins";
}

 //return tally;
 
}

console.log(game());


