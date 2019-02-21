// calculateAge(1965 );

// function calculateAge(year) {
// 	console.log(2016 - year);
// }


// retirement(1956);

// var retirement = function(year) {
// 	console.log(65- (2016 - year));
// }


//  First scoping example

var a = 'Hello!';
first();

function first() {
	var b = 'Hi';
	second();

	function second(){
		var c = 'Hey!';
		console.log(a + b + c);
	}

}

