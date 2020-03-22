const para = document.querySelector("div.error");
const para = document.querySelector("body > h1");
console.log(para);

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");
console.log(errors);
errors.forEach(error => {
  console.log(error);
});

console.log(paras[0]);
console.log(paras[1]);
console.log(paras[2]);

paras.forEach(para => {
  console.log(para);
});
