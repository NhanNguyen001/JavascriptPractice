// fetch api
fetch("todos/luigi.json") // 1. Fetch data
  .then(response => {
    console.log("resolved", response);
    return response.json(); // 2. Using .json() return a promise
  })
  .then(data => {
    // 3. Using then() after .json() to get data we need
    console.log(data);
  })
  .catch(err => {
    console.log("resolved", err);
  });
