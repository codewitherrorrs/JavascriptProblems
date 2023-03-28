//2. Write a program to prints the nth harmonic number
let harmonicNumber=Math.floor(Math.random() * 10)+1;
let sumOfNumber=0;
let k;
for(k=1; k<=harmonicNumber; k++)
{
    let value=1/k;
    sumOfNumber=sumOfNumber + value;
    console.log("1/"+k);
}
console.log("sum of harmonic series are:  "+sumOfNumber);
 console.log("--------------------------------------------"); 