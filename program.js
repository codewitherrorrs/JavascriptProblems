//2.Read a Number and Display the week day (Sunday, Monday,…)
let dayNumber=Math.floor(Math.random() * 7)+1;

if(dayNumber==1)
{
   console.log("Sunday");
}
else if(dayNumber==2)
{
   console.log("Monday");
}
else if(dayNumber==3)
{
   console.log("Tuesday");
}
else if(dayNumber==4)
{
   console.log("Wednesday");
}
else if(dayNumber==5)
{
   console.log("Thrusday");
}
else if(dayNumber==6)
{
   console.log("Friday");
}
else if(dayNumber==7)
{
   console.log("Saturday");
}
else
{
   console.log("Please enter number between 1 to 7 because number of week day are 7");
} 
console.log("--------------------------------------------"); 