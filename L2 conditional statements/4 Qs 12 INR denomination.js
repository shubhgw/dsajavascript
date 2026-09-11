
// we r given a amount in rupees we have to tell how many notes we can make from this amount 

let amount = Number(prompt("What is your amount in rupees ?")) // let 2566₹
let notes = [10,20,50,100,500]


n500 = Math.floor(amount/500)
amount = amount - 500*(n500)

n100 = Math.floor(amount/100)
amount = amount - 100*(n100)

n50 = Math.floor(amount/50)
amount = amount - 50*(n50)

n20= Math.floor(amount/20)
amount = amount - 20*(n20)

n10= Math.floor(amount/10)
amount = amount - 10*(n10)

let chillar = amount ;

console.log(`500 : ${n500} \n100 : ${n100} \n50 : ${n50} \n20 : ${n20} \n10 : ${n10} \nChillar : ${chillar}`);


// Method 2 : can be done using if also :)