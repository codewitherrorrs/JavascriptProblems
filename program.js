//without sort find second smallest value 
for (let i = 0; i < arrayNum.length; ++i)
 {
    if (first > arrayNum[i])
     {
        second = first;
        first = arrayNum[i];
     } 
    else if (arrayNum[i] < second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
   {
      console.log("There is no second smallest element\n");
   }
else
{
   console.log("The Second largest element in the array is: "+ second);
}
console.log("-------------------------------------------------------");  

//2.Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element
let values1=10;
let array=new Array();
for(let i=0; i<values1; i++)
{
   array[i]=Math.floor(Math.random()*900)+100;
}
console.log("\n\nTen three digit random values before sort are:\n-------------------------------------\n" + array);
//sort value in ascending order
array.sort();
console.log("Ten three digit random values after sort are:\n---------------------------------------\n" + array);
console.log("second largest value: " + array[8]);
console.log("second smallest value: " + array[1]);
console.log("-------------------------------------------------------");