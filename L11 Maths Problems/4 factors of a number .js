
function facts(n) {
    let factors = []
    for (i = 1; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            factors.push(i)
            factors.push(n / i)
        }
    }
    return factors.sort()
}

console.log(facts(20))