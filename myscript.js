console.log("hello... it begins");

// if (false) {
// 	console.log("if block");
// } else	{
// 	console.log("else block");
// }


// A infinite while loop - don't do this
// while (true) {
// 	console.log("A while loop, that just keeps going");
// }


// A valid while loop
// var counter = 10;
// while (counter) {
// 	console.log("Hello world");
// 	counter = counter -1;
// }


// For loop
// Fizz Buzz
// if a multiple of 3 then print "fizz"
// if a multiple of 5 then print "buzz"
// if a multiple of 3 AND 5 then print "fizzbuzz"

var getNumber = prompt("How many numbers do you want to test?");

for (i = getNumber; i > 0; i--) {
	if (i%3==0 && i%5==0) {
		console.log(i, "fizzbuzz");
	} else if (i%3==0) {
		console.log(i, "fizz");
	} else if (i%5==0) {
		console.log(i,"fizz");
	} else{
		console.log(i);
	};
};



console.log("fin.");