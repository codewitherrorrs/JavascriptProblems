//3.Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
let year=1987;
if(year % 400 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 4 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 100 == 0)
{
   console.log(year+" is Not a Leap year");
}
else
{
   console.log(year+" is Not a Leap year");
} 
console.log("--------------------------------------------");