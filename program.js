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