/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var howMuch = prompt("How much money do you have?");

var quarterValue = 25;
var dimeValue = 10;
var nickelValue = 5;
var pennyValue = 1;


function coinCounter (howMuch) {
  // Initialize a JavaScript object to hold the coins
  howMuch = howMuch * 100;
  var whatIsLeft = howMuch;
  var coinPurse = {
  		quarters: "",
  		dimes: "",
  		nickels: "",
  		pennies: "",
    };



   	if(whatIsLeft >= quarterValue){
   		coinPurse.quarters=Math.floor(whatIsLeft/quarterValue);
   		whatIsLeft = whatIsLeft % quarterValue;
   	} 

   	if(whatIsLeft >= dimeValue && whatIsLeft < quarterValue){
   		whatIsLeft/dimeValue;
   		coinPurse.dimes=Math.floor(whatIsLeft);
   		whatIsLeft = whatIsLeft % dimeValue;
   	} 

   	if(whatIsLeft >= nickelValue && whatIsLeft < dimeValue){
   		whatIsLeft/nickelValue;
   		coinPurse.nickels=Math.floor(whatIsLeft);
   		whatIsLeft = whatIsLeft % nickelValue;
   	}

   	if(whatIsLeft >= pennyValue && whatIsLeft < nickelValue){
   		whatIsLeft/pennyValue;
   		coinPurse.pennies=Math.floor(whatIsLeft);
   		whatIsLeft = whatIsLeft % pennyValue;
   	} else(whatIsLeft=0);

  return coinPurse;
	}


var coins = coinCounter(howMuch);
console.log(coins);