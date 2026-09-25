
let ary = [0, -5, 30, 33.5, 96,-32];
let minNumber = ary[0];

let i = 0;
while (i < ary.length) {
  if (ary[i + 1] < minNumber) {
    minNumber = ary[i + 1];
  } else {}
  i++
}

console.log(minNumber, "is the minimum number among all");
  