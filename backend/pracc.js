// exercise design:
// 1. create a serie of promises that run in parallel, simultaneously
// 2. create a sequence of promises - one doesn't start until current finishes
// 3. create race of promises - only the first to finish counts

const baseUrl = 'https://jsonplaceholder.typicode.com/';
const routes = ['todos', 'posts', 'users'].map(route => baseUrl + route);

1;
const processInParallel = async routes => {
  return Promise.all(
    routes.map(async (route, index) => {
      const result = await fetch(route);
      const data = await result.json();
      if (index === 0)
        await new Promise((resolve, _reject) => setTimeout(resolve, 1000));
      return [index, data.length];
    })
  );
};

(async function () {
  const parallelResults = await processInParallel(routes);
  //   console.log('PARALLEL: ', parallelResults);
})();

// 2.
// Idea: use for await
// Why: each iteration only proceeds after current has finished
const processInSequence = async routes => {
  let results = [];
  for await (const route of routes) {
    const result = await fetch(route);
    const data = await result.json();
    results = [...results, data];
  }
  return results;
};

(async function () {
  const sequence = await processInSequence(routes);
  //   console.log(
  //     'SEQUENCE: ',
  //     sequence.map(el => el.length)
  //   );
})();

// 3.
// idea: create race of promises
// why race? to test it; why call it race? it's first-to-complete counts;
// take these 3 and put into .race, which is for that^

(async function () {
  const raceResult = await Promise.race([
    ...routes.map(route =>
      (async function () {
        const res = await fetch(route);
        const data = await res.json();
        return data;
      })()
    ),
    new Promise((_resolve, reject) =>
      setTimeout(() => reject('TIMEOUT'), 4000)
    ),
  ]);
  console.log('RACE: ', raceResult);
})();
