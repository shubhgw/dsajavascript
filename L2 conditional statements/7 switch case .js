

// if we dont have any conditions then we can use switch case

let day = 1 ;

switch (day) {
    case 1 : console.log("Monday");     
        break; // if we dont put break then it will be - falltrough condition & it run all below conditions 
    case 2 : console.log("Tuesday");     
        break;
    case 3 : console.log("Wednesday");     
        break;
        // if we want same execution on 4 5 6 :)
    case 4 : 
    case 5 : 
    case 6 : console.log("Saturday");     
        break;
    case 7 : console.log("Sunday");     
        break;
    default: console.log("Out of stock !");
        break;
}

switch(true){
    case 12<23:
        console.log("Yeah, We can do this also :)");
        
}

// HW : search how to manage 0.1 + 0.2 = 0.3