
function test() {
  // uses the var text as the place holder for the output	
  var text = '';
  // for loop that sets i to 1, runs until i reaches 100 and add 1 every loop
	  for(var i = 1; i <= 100; i++) {
	  	// var 'tres' and 'cinco' are there to find numbers that are divisible by 3 and 5
	    var tres = (i % 3);
	    var cinco = (i % 5);
	    	//if-else statement to determine if the numbers meet any of the following criteria
		  	if (tres == 0 && cinco == 0) {
		  		// if 'tres' and 'cinco' are divisible by the same number place that data
		  		// into the corresponding sequence number and exchange that number
		  		// for 'FIZZBUZZ' and do a line break
		  		text += "FIZZBUZZ<br>";
		  	} else if (tres == 0) {
		  		// if it matches 'tres' the number in the sequence is replaced by
		  		// the text 'FIZZ' and do a line break
		  		text += "FIZZ <br>";
		  	} else if (cinco == 0) {
		  		// if it matches 'cinco' the number in the sequence is replaced by
		  		// the text 'FIZZ' and do a line break
		  		text += "BUZZ <br>";
		  	} else {
		  		// if any of the other conditions are not met just run the 
		  		// sequence of the for loop placing 'i' in 'text'
		  		text += i + '<br>';
		  	}
		// once the 'button - Run' is clicked, the function 'test' is executed and the 
		// return is referenced by the Id 'game' which then gets set into the variable
		// 'text' and displayed in the p tag
		document.getElementById('game').innerHTML = text;
		}
}