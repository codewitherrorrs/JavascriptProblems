//Functions Practice Problems
//1.Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point (  0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
   //a. degF = (degC * 9/5) + 32
   //b. degC = (degF – 32) * 5/9

   function findDegF(degC)
   {
      degF = (degC * 9/5) + 32;
      return degF;
   }
   let x1=findDegF(100)
   console.log("Result in degF: " + x1+"F");

   function findDegC(degF)
   {
      degC=(degF - 32) * 5/9;
      return degC;
   }
   let y1=findDegC(212)
   console.log("Result in degF: " + y1+"C"); 

console.log("--------------------------------------------");    