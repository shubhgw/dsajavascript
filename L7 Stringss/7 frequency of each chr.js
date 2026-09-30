

// u r given a string u just have to tell that how many times each element has occured in the given string :)

let word = 'ShubHam';

// via bruteforce it will not memory effienct nor time efficient  :
// cant we solve this using moores voting algorithm

let occ = new Array(128).fill(0);

for (i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i);
    occ[index]++
}

for (i = 0; i < word.length; i++) {
    console.log(word[i] + ' occured ' + occ[word.charCodeAt(i)] + ' times')
}