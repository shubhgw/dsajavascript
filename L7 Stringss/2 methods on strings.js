

let str = 'ShubhamGW';
let sStr = 'JavaScript';
let trialString = ' ,   abC  .  '
let justStr = 'a.b.c.d'

console.log(str.length) // 9 - length is a method not function   
console.log(str.slice(1,4)) // hub - negative indexing is possible in slice : it goes from [1,4)
console.log(str.slice(-4,-2)) // it goes from [-4,-2)
console.log(str.substring(1,4)) // no negative indexing is supported :( 
console.log(str.toUpperCase()) // converts all the letters to capital 
console.log(str.toLowerCase()) // converts all the letters to small 

console.log(str.concat(sStr))
console.log(trialString.trim()) // removes the whitespaces from string from both ends
console.log(str.indexOf('h')) // show the first index of of substring from the string .... return -1 if substring is not present
console.log(str.lastIndexOf('h')) // show the last index of substring from the string .... return -1 if substring is not present
console.log(str.includes('mG'))
console.log(str.startsWith('S'))
console.log(str.endsWith('M'))
console.log(str.replace('S','#')) // replaces the first occurance, 📍 It does not change the original string !
console.log(str.replaceAll('S','#')) // replaces the all occurance, 📍 It does not change the original string !
console.log(str.charAt(3)) // returns the character at 3rd index
console.log(str.charCodeAt(3)) // returns the character code at 3rd index e; for b its 98 ( its small b )

console.log(justStr.split('.')) // converts/splits the string into an array

console.log(str);
