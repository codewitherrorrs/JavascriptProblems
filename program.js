//5.Write a program that computes a factorial of a number taken as input. Such as 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
let factNumber=5;
let fact=1;
for(i=1;i<=factNumber;i++)
{
    fact=fact*i;
}
console.log("\nFactorial of "+ factNumber+" is ==>  " + fact) 
console.log("--------------------------------------------"); 