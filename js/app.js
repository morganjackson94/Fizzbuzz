$(document).ready(function(){
	function fizzbuzz(max) {
		var count = 1;	
		for (var a = 1; a <= max; a++ ) {
			if (a % 5 === 0 && a % 3 === 0) {
				$("#log").append("<p>" + count + ": " + "FizzBuzz" + "</p>" );
				count += 1;
			}
			else if (a % 5 === 0) {
				$("#log").append("<p>" + count + ": " + "Buzz" + "</p>" );
				count += 1;
			}
			else if (a % 3 === 0) {
				$("#log").append("<p>" + count + ": " + "Fizz" + "</p>" );
				count += 1;
			}
			else {
				$("#log").append("<p>" + count + ": " + a + "</p>" );
				count += 1;
			}
		}
	}

	function runFizzbuzz() {
		$('input').keydown(function(enter){
			if (enter.keycode == 13) {
				enter.preventDefault();
				$('p').remove();
				var userInput = $(this).val();
				var stringNum = parseInt(userInput, 10);
				var num = + stringNum;
				fizzbuzz(num);
			}
		})
	}
	runFizzbuzz();
})

