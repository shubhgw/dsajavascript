let ary = [0, -5, 30, 33.5, 96,-32];
let maxNumber = ary[0];

let i = 0;
while (i < ary.length) {
  if (ary[i + 1] > maxNumber) {
    maxNumber = ary[i + 1];
  } else {}
  i++
}

console.log(maxNumber, "is the maximum number among all");
