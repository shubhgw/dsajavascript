
function prime(n) {
    let isPrime = true
    for(i=2;i<Math.sqrt(n);i++){
        if(n%i==0 && (i!=n)){
            isPrime = false
            break
        }
    }
    return isPrime
}

console.log(prime(10))