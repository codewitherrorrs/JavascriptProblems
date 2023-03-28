//3.Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

let no = Math.floor(Math.random()*1050);
if(no >=0 && no <=9)
{
   option=1;
}
else if(no >=10 && no <=99)
{
   option=2;
}
else if(no >=100 && no <=999)
{
   option=3;
}
else
{
   option=4;
}
switch(option)
{
    case 1:
            console.log("Generate random number : "+ no);
            console.log("Unit");
            break;
    case 2:
            console.log("Generate random number : "+ no);
            console.log("Ten");
            break;
    case 3:
            console.log("Generate random number : "+ no);
            console.log("Hundred");
            break;
    case 4:
            console.log("Generate random number : "+ no);
            console.log("Thousand");
            break;
} 

console.log("--------------------------------------------"); 