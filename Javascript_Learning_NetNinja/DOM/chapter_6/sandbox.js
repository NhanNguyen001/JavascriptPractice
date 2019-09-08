// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// paras.forEach(para => {
//   console.log(para);
// });

// console.log(paras[2]);
// console.log(errors);

// const title = document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error');
// console.log(errors[0]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);

const para = document.querySelector('p');

// console.log(para.innerText);

// para.innerText += ' ninja';
// para.innerText = ' ninjas';

const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML)
// content.innerHTML = '<h2>THIS IS A NEW H2</h2>';
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});







