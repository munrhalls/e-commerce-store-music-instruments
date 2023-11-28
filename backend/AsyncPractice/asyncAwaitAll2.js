// realize promise.all on 3 jsonplaceholder urls but using the async await syntax more fully than in previous challenge

const urls = [
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/users',
];

const getData = async urls => {
  // return promise on data + promise on .json() per item
  const [posts, todos, users] = Promise.all(
    urls.map(async url => {
      const data = await fetch(url);
      const decoded = await data.json();
      return decoded;
    })
  );
  console.log(posts, todos, users);
};
