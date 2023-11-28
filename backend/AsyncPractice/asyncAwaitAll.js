// use async await to realize promise.all functionality

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/posts',
];

// array of fetch promises with nested json() promise
(async function () {
  const data = await Promise.all(
    urls.map(async url => {
      const user = await fetch(url);
      const data = await user.json();
      return data;
    })
  );
  console.log(data);
})();
