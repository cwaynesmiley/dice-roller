function rollThemDice() {
  var dFour = document.getElementById("dFour").value; //this takes the number that the visitor inserts
  var dFourValue = Math.floor((Math.random() * 4) +1); //this gives me a result of 1-4
  var rollResult = dFour * dFourValue; //this is borked cause it'll only give you multiples of dFour, not any variation of a true 2d4, 3d4, or 4d4
  
  while(dFour <= dFour.value) {
    dFourValue = Math.floor((Math.random() * 4) +1);
    i++;
  }
  // then repeat that until it hits dFour.value
  
  /* I need something in here that will take the result of the number of dice (X with a min of 0 and a max of 4) and then multiply that number by 1,2,3, or 4 then add them all together based on how many dice they chose.
  
  (1,2,3,4) + (1,2,3,4) etc with X >= 0 && X <= 4
 
Make these into switch statements and have a different variable for each one? 

2d4 = 1d4 + 1d4
switch (dFour) {
  case "2": 
  dFourValue = (Math.floor((Math.random() * 4) +1)) + (Math.floor((Math.random() * 4) +1));
}

3d4 = 1d4 + 1d4 + 1d4
4d4 = 1d4 + 1d4 + 1d4 + 1d4
  */
  
  $("h2#rollResult span").html("").append(rollResult);
  
}
