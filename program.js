//3. Write a program that takes a input and determines if the number is a prime
let primeNum = Math.floor(Math.random()*10)+2;
let countValue=0;
for (let m = 1; m <=primeNum; m++)
{
   if (primeNum % m == 0)
   {
    countValue++;
   }
}
if(countValue == 2)
{ 
   console.log(primeNum + " is prime number");
}
else 
{ 
   console.log(primeNum + " is not prime number");
}
console.log("--------------------------------------------"); 