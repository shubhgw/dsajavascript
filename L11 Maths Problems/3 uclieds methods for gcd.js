

// 1st of substraction ( ex; if 999,1 then time complexity will be O(999) which is bad)

function gcd(a,b) {
    while (a !== b) {
        if (a > b) {
            if (a % b == 0) { return b }
            a -= b
        }
        if (b > a) {
            if (b % a == 0) { return a }
            b -= a
        }
        else {
            return a
        }
    }
}

console.log(gcd(10000,200))

