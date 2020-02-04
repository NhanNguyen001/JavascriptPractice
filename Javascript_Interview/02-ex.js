// How do you create a private variable in Javascript

function secretVariable() {
  var private = 'super secret code';
  return function() {
    return private;
  };
}

var getPrivateVariable = secretVariable();

console.log(getPrivateVariable());
