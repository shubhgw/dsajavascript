// let say u r using 450 units of electricity

// first 100 units in 4.2₹/unit
// next 101-200 units in 6₹/unit
// next 201-400 units in 8₹/unit
// more than 400 units in 13₹/unit


let units = prompt("Total number of units used ?");
let prizes = [4.2, 6, 8, 13];
let amount = 0;

// method 1

// n1 = units - 100;
// if (n1 < 0) {
//   amount += units * 4.2;
// } else {
//   amount += 100 * 4.2;
//   n2 = n1 - 100;
//   if (n2 < 0) {
//     amount += n1 * 6;
//   } else {
//     amount += 100 * 6;
//     n3 = n2 - 200;
//     if (n3 < 0) {
//       amount += n2 * 8;
//     } else {
//       amount += 200 * 8;
//       amount += n3 * 13;
//     }
//   }
// }

// method 2 : Go from bottom to top :

if (units>400) {
    amount += (units-400)*13
    units=400
}
if (units<=400 && units>200) {
    amount += (units-200)*8
    units=200
}
if (units>100 && units<=200) {
    amount += (units-100)*6
    units=100
}
if (units<=100) {
    amount += (units)*4.2
}

alert("Your total bill is : " + amount);

