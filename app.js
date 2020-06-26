let choices = ["rock", "paper", "scissors"]
let results = ["win", "lose", "draw"]
let winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}
function play(userInput) {
  let cChoice = compRand()
  console.log("computer choice: ", cChoice);
  console.log("player choice: ", userInput);
  //math way
  alert(results[(userInput - cChoice + (choices.length - 1)) % choices.length])

  //tylers way
  // userInput == cChoice ? alert("Tie") : winConditions[userInput] == cChoice ? alert("Winner winner chickens are for dinner!") : alert("Loserrrr")

  //Original Way
  // if (userInput == cChoice) {
  //   alert("Tie with " + userInput)
  // } else if (userInput == "rock") {
  //   if (cChoice == "scissors") {
  //     alert("You win")
  //   } else {
  //     alert("You Lose")
  //   }
  // } else if (userInput == "scissors") {
  //   if (cChoice == "paper") {
  //     alert("You win")
  //   } else {
  //     alert("You Lose")
  //   }
  // } else if (userInput == "paper") {
  //   if (cChoice == "rock") {
  //     alert("You win")
  //   } else {
  //     alert("You Lose")
  //   }
  // }

  document.getElementById(`${userInput}`).classList.add("fa-spin")
  setTimeout(() => {
    document.getElementById(`${userInput}`).classList.remove("fa-spin")
  }, 2000);
}

function compRand() {
  //original
  // return choices[Math.floor(Math.random() * choices.length)]
  return Math.floor(Math.random() * choices.length)
}