const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const one = promisify('one', 1000).then(res => console.log(res));
const two = promisify('two', 2000).then(res => console.log(res));
const three = promisify('three', 3000).then(res => console.log(res));
const fourFIrst = promisify('Surprise! Four is last yet first!', 250).then(
  res => console.log(res)
);
