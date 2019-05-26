// let val;

// val = document;

// // make hmtl document like an array
// val = document.all;
// val = document.all[2];

// // Check length of array  
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];
 
// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// console.log(scripts);

// // Covert scripts into an array
// let scriptsArr = Array.from(scripts);
// console.log(scriptsArr);

// scriptsArr.forEach((script) => {
//   console.log(script);
//   return;
// });


// console.log(val);


// // document.getElementById()
// console.log(document.getElementById('task-title'));
//
// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// const taskTitle = document.getElementById('task-title');

// Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';
// document.getElementById('task-title').style.display = 'none';



//Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';


// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
//Just get the first one h1 element
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'blue';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'red';
document.querySelector('li:nth-child(even)').style.background = 'yellow';
