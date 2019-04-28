// document.getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');
// // console.log(items[0].className);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = 'Hello';


// // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);


// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';


// // Conver HTML Collection into array
// lis = Array.from(lis); 

// lis.forEach((li, index) => {
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// lis.reverse();
// console.log(lis);

// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items)

items.forEach((item, index)=>{
    item.textContent = `${index}: Hello1`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((li, index) => {
    li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = 'red';
}