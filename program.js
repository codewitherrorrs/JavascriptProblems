//4.Write a program to compute Factors of a number N using prime factorization method.
let primeFactorNum=18;
console.log("Prime factor are:-\n--------------------");
for (let k = 2; k <= primeFactorNum; k++)
{
    while (primeFactorNum % k == 0)
    {
        primeFactorNum = primeFactorNum / k;
        console.log(k);
    }
}
if (primeFactorNum > 2)
 {
    console.log( primeFactorNum);
 }
 console.log("--------------------------------------------"); 