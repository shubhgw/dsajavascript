{
  let a = 10;
  let b = 20;

  console.log(a + b); // its addition bruh
  console.log(typeof (a+b));
  
}

{
    let a = "10";
    let b = "20";
    
    console.log(a + b); // ts is concatenation
    console.log(typeof (a+b));
}

{
    let a = "10";
    let b = 20;
    
    console.log(a + b); // what will be the output bruh ??............ yeah it will be concatenation : )
    console.log(typeof (a+b));
}

{
    let a = 10;
    let b = 20;
    
    console.log( "Adddddition of 10 & 20 is :" + a + b); // what will be the output bruh ??.......... its still concatenation bcoz it goes from left to right considering bodmas rule while calculating ...... see nxt example for clarification : 
    console.log(typeof (a+b)); // faaaaaaa 
}

{
    let a = 10;
    let b = 20;
    
    console.log( a + b + " : Adddddition of 10 & 20 "); // what will be the output bruh ??.......... now some change
    console.log("Adddddition of 10 & 20 is : " + (a + b)); // give bracket so it can consider it as first priority
    console.log(typeof (a+b)); // faaaaaaa 
}
