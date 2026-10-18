

// loops for better memory & efficiency
// recursion for readability & nested 

function gcd(a, b) {
    if (a == b) return a;
    if (a > b) return gcd(a - b, b)
    if (a < b) return gcd(a, b - a)
}

console.log(gcd(20, 30))