

// just toggle the words from capital to small & vice versa :)

let word = 'ShUbHaMgW';
let toogled = ''

// Uppercase Letters: Start at 65 ('A') and end at 90 ('Z'). 
// Lowercase Letters: Start at 97 ('a') and end at 122 ('z'). 

for (i = 0; i < word.length; i++) {
    let l = word[i]
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) { // means it is capital
        toogled = toogled + l.toLowerCase()
    }
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) { // means it is small
        toogled = toogled + l.toUpperCase()
    }
}

console.log(word)
console.log(toogled)