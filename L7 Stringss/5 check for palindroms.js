
let str = "A man, a plan, a ZXSD canal: Panama"

// Method 1 : Bruteforce ( takes alot of memory )

// var isPalindrome = function (s) {
//     s = s.trim()
//     s = s.toLowerCase()
//     s = s.replace(/[^a-zA-Z0-9]/g, '');
//     let wordLength = s.length

//     let rev = '';
//     for (i = wordLength; i > 0; i--) {
//         rev = rev + (s[i - 1])
//     }

//     if (rev == s) return true
//     else return false

//     return isPalindrome
// };

// console.log(isPalindrome(str))


// Method 2 ( using two point algorithm to reverse the string in place)

var checkPalindrome = function (s) {
    s = s.trim()
    s = s.toLowerCase()
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    let wordLength = s.length
    isPalindrome = true

    let j = 0;
    for (i = wordLength - 1; i > (wordLength / 2); i--) {
        if (s[j] == s[i]) {
            j++
            continue
        }
        else {
            isPalindrome = false
            break
        }
        j++
    }

    return isPalindrome


}


console.log(checkPalindrome(str))