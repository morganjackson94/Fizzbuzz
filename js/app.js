
var a;	
	for (var a = 1; a <= 100; a++ ) {
		if (a % 5 === 0 && a % 3 === 0) {
			document.write("Fizzbuzz<br>");
			continue;
		};
		if (a % 5 === 0) {
			document.write("Buzz<br>");
			continue;
		};
		if (a % 3 === 0) {
			document.write("Fizz<br>");
			continue;
		};
		document.write(a + "<br>");
	}