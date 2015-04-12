$(document).ready(function() {

var limit = (prompt("Enter any positive number"));	

var ul =$("ul")

function fizzBuzz(){

for ( var i = 1; i <= limit; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			ul.append("<li>Fizz Buzz</li>");
		}
		else if (i % 3 === 0) {
			ul.append("<li>Fizz</li>");
		}
		else if (i % 5 === 0) {
			ul.append("<li>Buzz</li>");
		}
		else {
			ul.append("<li>" + i + "</li>");
		}
	}
  }
fizzBuzz();
});