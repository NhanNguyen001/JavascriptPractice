// Promise is basically saying look at some point I will either resolve if we have a success or reject
// if there is an error

const getTodos = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) reject("error getting resource");
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then(data => {
    console.log("promise resolved:", data);
  })
  .catch(err => {
    console.log("promise rejected:", err);
  });

// promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // Fetch something
//     resolve("some data");
//     reject("some error");
//   });
// };

// When we resolve something in a promise it fires the callback function inside the
// then method and that callback function takes the data that we pass
// through to the resolve function

// getSomething().then(
//   data => console.log(data),
//   err => console.log(err)
// );

// getSomething()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
