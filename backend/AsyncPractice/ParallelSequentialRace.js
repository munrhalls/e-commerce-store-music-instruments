// exercise design:
// 1. create a serie of promises that run in parallel, simultaneously
// 2. create a sequence of promises - one doesn't start until current finishes
// 3. create race of promises - only the first to finish counts

const baseUrl = 'https://jsonplaceholder.typicode.com/';
const routes = ['posts', 'todos', 'users'].map(route => baseUrl + route);

// 1.
const processInParallel = async routes => {
  return Promise.allSettled(
    routes.map(async route => {
      const result = await fetch(route);
      const data = await result.json();
      return data;
    })
  );
};
const parallelResults = processInParallel(routes).map(res => res.length);
console.log('PARALLEL: ', parallelResults);
// on first try, gj

// 2.
const processInSequence = async routes => {
  let results = [];
  for await (const route of routes) {
    const result = await fetch(route);
    const data = await result.json();
    results = [...results, data];
  }
  return results;
};

const sequence = processInSequence(routes).then(data =>
  console.log('SEQUENCE: ', data.length)
);
