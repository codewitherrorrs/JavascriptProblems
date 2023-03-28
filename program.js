//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
let head = 0; 
let tail = 0;
let count = 0;
let numflip=5;
while (count < numflip)
{
   let result=Math.floor(Math.random() * 2);
   console.log(result);
   if (result < 1)
   {
       head++;
       console.log("head");
   }
   else
   {
       tail++;
       console.log("tails");
   }
   count++;
}
console.log("Total Number of Heads: " + head);
console.log("Total Number of Tails: " + tail); 
console.log("--------------------------------------------"); 