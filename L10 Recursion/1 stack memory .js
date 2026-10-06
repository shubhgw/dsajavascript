

// its like last in first out :
// it is also called as call stack : have less memory size

// there are two parts stack(5%) & heap(95%)........  and this varies configuration to configuration

// so the basic functions are pop push & peek


greet()

function greet() {
    console.log('Greetings........')
}

function enjoy() {
    console.log('Enjoying')
}

function bye() {
    console.log("bye bye")
}

// as we are calling greet function it goes in stack memory first then enjoy & then bye ........ after execution of bye it goes out first then  enjoy then greet .

