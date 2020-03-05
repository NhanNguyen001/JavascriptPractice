// async & await

// Whenever we call an asynchronous function that always returns a promise regardless
// of what's inside here
const getTodos = async () => {
  fetch("todos/luigi.json");
};

const test = getTodos();
console.log(test);
