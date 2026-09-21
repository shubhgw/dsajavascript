// create a radnom number & let the user guess it & guide it to reach number using low & high relative to random number keywords.

const rNumber = Math.floor(Math.random() * 100) + 1;
console.log(rNumber);

while (rNumber !== gNuber) {
  var gNuber = (prompt("Guess a number between 1 to 100 & q to quit : "));
  if (gNuber == "q") {
    break;
  } else if (gNuber == rNumber) {
    console.log("You guessed it correct !");
    break;
  } else if (gNuber < rNumber) {
    console.log("low");
  } else if (gNuber > rNumber) {
    console.log("high");
  }
  else{
    continue
  }
}
