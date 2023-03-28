//Repetition Practice Problems with while loop
//1.Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
let powervalue=Math.floor(Math.random()*10);
let n=0;
while (n<=powervalue)
   {
    let powerValue=Math.pow(2,n);
    console.log("power of 2^"+ n +" is " +powerValue);
    n++
   } 
console.log("--------------------------------------------");    