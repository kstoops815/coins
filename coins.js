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
  		quarters: 0,
  		dimes: 0,
  		nickels: 0,
  		pennies: 0,
    };



   	if(whatIsLeft >= quarterValue){
   		coinPurse.quarters=Math.floor(whatIsLeft/quarterValue);
   		whatIsLeft = howMuch % quarterValue;
   	} 

   	if(whatIsLeft >= dimeValue && whatIsLeft < quarterValue){
   		coinPurse.dimes=Math.floor(whatIsLeft/dimeValue);
   		whatIsLeft = howMuch % dimeValue;
   	} 

   	if(whatIsLeft >= nickelValue && whatIsLeft < dimeValue){
   		coinPurse.nickels=Math.floor(whatIsLeft/nickelValue);
   		whatIsLeft = howMuch % nickelValue;
   	}

   	if(whatIsLeft >= pennyValue && whatIsLeft < nickelValue){
   		coinPurse.pennies=Math.floor(whatIsLeft/pennyValue);
   		whatIsLeft = howMuch % pennyValue;
   	} else(whatIsLeft=0);

  return coinPurse;
	}


var coins = coinCounter(howMuch);
console.log(coins);