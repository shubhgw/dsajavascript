
// Qs on valid voter !

// age >= 18 ;
// & its crimes :(

let age = Number(prompt("What is your age ?"))

if (isNaN(age)) {
    console.log("Enter valid age");
    alert("Enter valid age");
}
else if (age<18) {
    console.log("You r not eligible to vote !");
    alert("You r not eligible to vote !");
}
else{
    console.log("You r eligible to vote !")
    alert("You r eligible to vote !")
}