// binary search is a sorting algo on sorted array which are either ascending or descending :

let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125]; // 11
let target = 91;

function binarySearch(arr, i, j, target) {
  while (i <= j) {
    let midEleInd = Math.floor((i + j) / 2);
    let midEle = arr[midEleInd];

    if (midEle == target) {
      return midEleInd;
    } else if (midEle > target) {
      j = midEleInd - 1;
    } else {
      i = midEleInd + 1;
    }
  }
  return -1;
}

let index = binarySearch(arr, 0, arr.length - 1, target);
console.log(index);
