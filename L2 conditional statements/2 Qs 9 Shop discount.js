// Amount:  0-5000₹, Discount: 0%
// Amount:  5001-7000₹, Discount: 5%
// Amount:  7001-9000₹, Discount: 10%
// Amount:  more than 9000₹, Discount: 20%

// & calculate the final prize using discount :)

let amount = Number(prompt("What is the total amount ?"));

// alert(amount);

// } else if (0 < amount <= 5000) {
//   alert("You got 0% discount");             // bad way of writing :(

if (isNaN(amount)) {
  console.log("Not valid amount !");
} else if (0 < amount && amount <= 5000) {
  console.log("You got 0% discount");
  console.log("Your Final payable amount is : " + amount);
} else if (5000 < amount && amount <= 7000) {
    console.log("You got 5% discount");
    console.log("Your Final payable amount is : " + Math.floor(amount*0.95));
} else if (7000 < amount && amount <= 9000) {
    console.log("You got 10% discount");
    console.log("Your Final payable amount is : " + Math.floor(amount*0.90));
} else if (9000 < amount) {
    console.log("You got 20% discount");
    console.log("Your Final payable amount is : " + Math.floor(amount*0.80));
} else {
    console.log("Amount not in discount condition");
    console.log("Your Final payable amount is : " + amount);
}

// HW : Now optimize it & reduce number of lines
// keep editing discount simple in array