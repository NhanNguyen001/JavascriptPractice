// What is the output?
var num = 4;
function outer() {
  var num = 2;
  function inner() {
    num++;
    var num = 5;
    console.log(num);
  }
  inner();
}
outer();
