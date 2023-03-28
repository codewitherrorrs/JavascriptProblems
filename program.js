//2.Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
let month=5;
let date=20;
if(((month <= 6 && date <= 20) && ((month >= 3 && date <= 20) && (date<31))))
{
   console.log("True");
}
else
{
   console.log("False");
} 
console.log("--------------------------------------------"); 