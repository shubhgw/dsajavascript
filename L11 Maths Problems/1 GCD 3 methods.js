
// greatest common divisor | Highest common factor :)

// ex; 39 ; 1, 3, 13, 39 ........ are factors of 39
// ex; 42 ; 1, 2, 3, 6, 14, 21, 42.......... are factors of 42

// so the GDC is 3

function GCD(n1, n2) {
    let facts1 = []

    for (let i = 1; i <= n1 / 2; i++) {
        if (n1 % i == 0) { facts1.push(i) }
    }
    let gcd = 1;
    for (let i = 1; i <= n2 / 2; i++) {
        if (n2 % i == 0) {
            if (facts1.indexOf(i) !== -1) { gcd = i }
        }
    }
    return gcd
}

console.log(GCD(30, 20)) 

// Uclied's first algorithm

// we just use substraction to find the gcd of the given two numbers

let num1 = 20;
let num2 = 30;

while (true) {
    // Math.max(num1,num2) = Math.max(num1,num2)-Math.min(num1,num2) ---- how to assign variable directly ??

    if (num1 > num2) {
        num1 = num1 - num2
    }
    else if (num1 < num2) {
        num2 = num2 - num1
    }
    else {
        console.log(num1)
        break
    }
}

// in small & better aproach :

while(num1 !== num2){
    if(num1>num2) num1-=num2
    else num2-=num1
}
console.log(num1)