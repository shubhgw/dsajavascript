

// let sumTillN = 0;
// function sum(n) {
//     if (n > 0) {
//         sumTillN = sumTillN + n
//         sum(--n) // to work below correctly here should be return sum(--n)
//     }
//     else {
//         console.log(sumTillN) // why return sumTillN is not working with console.log(sum(5)) bcoz it is in stack its giving back to only one !
//     }
// }

// sum(5)

// better approach

function summ(n) {
    if (n == 1) return 1
    return n + summ(n - 1)
}

console.log(summ(5))