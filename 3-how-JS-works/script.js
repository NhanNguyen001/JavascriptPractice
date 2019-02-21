// // calculateAge(1965 );

// // function calculateAge(year) {
// // 	console.log(2016 - year);
// // }


// // retirement(1956);

// // var retirement = function(year) {
// // 	console.log(65- (2016 - year));
// // }


// //  First scoping example

// var a = 'Hello!';
// first();

// function first() {
// 	var b = 'Hi';
// 	second();

// 	function second(){
// 		var c = 'Hey!';
// 		console.log(a + b + c);
// 	}

// }



calculateAge(1985);

function calculateAge(year){
	console.log( 2016 - year );
	console.log(this);
}

var join = {
	name: 'Join',
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);
	}
};

join.calculateAge()


