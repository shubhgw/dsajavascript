

// Recursion : 1) why part  2) what part
// there are two ways to repeat task - loop we know & second is recursion

// recursion break a big problem in small small parts & solve it !

// Print hello world 5 times using recursion

let i = 5;
function phw() {
    if (i > 0) {
        console.log("hell yaah")
        // phw(i--) gives stack overflow error because it will call the function before decreament :(
        // phw(--i) it can be used 
        i--
        phw()
    }
}

phw()