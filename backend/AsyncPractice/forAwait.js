// instead of promise.all, use for await

const baseUrl = 'https://jsonplaceholder.typicode.com/';
const urls = ['posts', 'todos', 'users'].map(route => baseUrl + route);

const getItems = async urls => {
  const items = urls.map(async url => fetch(url));
  for await (const item of items) {
    const data = await item.json();
    console.log(data.length);
  }
};
getItems(urls);
