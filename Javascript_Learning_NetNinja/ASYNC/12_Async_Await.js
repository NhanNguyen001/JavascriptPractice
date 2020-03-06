// async & await

// Whenever we call an asynchronous function that always returns a promise regardless
// of what's inside here
// Only stalling it inside this asynchronous function
const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);

getTodos().then(data => console.log("resolved:", data));

console.log(3);
console.log(4);

// Benefit of async and await
// 1. It is bundled up all of our asynchronous code inside a function right here which we can and use whenever we want now
// 2. It's not going to block the rest of the code in our application as we've just seen
// 3. Thirdly it gives us as much cleaner way to chain promise together like this which I think is much more readble
