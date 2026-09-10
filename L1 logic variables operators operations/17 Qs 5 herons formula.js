
let l1 = 4;
let l2 = 5;
let l3 = 6;

// calculate area of triangle using herons formula ;)

let s = (l1+l2+l3)/2 // s is semiparameter :)

let area = Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));
console.log(area);
