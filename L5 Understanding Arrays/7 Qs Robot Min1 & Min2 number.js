
// edit it when u have time ....... plz edit b4 pushing it 

let ary = [0, -5, 30, 33.5, 96,-32];
let maxNumber1 = ary[0];
let maxNumber2 = ary[1];

let i = 0;
while (i < ary.length) {
  if (ary[i + 1] > maxNumber1) {
    maxNumber2 = maxNumber1
    maxNumber1 = ary[i + 1];
  } else {}
  i++
}

console.log(maxNumber1, "is the maximum number among all");
console.log(maxNumber2, "is the 2nd maximum number among all");
