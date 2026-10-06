
// printing 1 to n ----------- bruh its just lit : Its called backtracking 

function oneToN(n) {
    if (n > 0) {
        oneToN(--n) // code after recursion call is called backtrack
        console.log(n + 1)
    }
}

oneToN(5)

// printing n to 1

function printingNumbers(n) {
    if (n > 0) {
        console.log(n)
        printingNumbers(--n)
    }
}
printingNumbers(5)