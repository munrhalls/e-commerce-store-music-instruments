// code promisify func and use it to make 3 promises
// code promise race that takes another promise race / promise sequence / promise parallel arrays merged as argument
// return the winning promise
// also write a promise that outputs all of them according to completion time, so the first to complete is first, the last to complete is last

// promisify
// promise race argument 1: race
// 2: sequence
// 3: parallel
// promise race these 3
// now, a way to take all of these and return each according to its completion time
// why: exercise problem solving and understanding capability
// why do it what way: iterate promise race + delete returned on promises array until no more promises left

const promisify = (thing, delay) =>
  new Promise(resolve => setTimeout(() => resolve(thing), delay));

const oranges = promisify('Oranges', 1000);
const bananas = promisify('Bananas', 3000);
const apples = promisify('Apples', 5000);
const grapes = promisify('Grapes', 8000);
const cherries = promisify('Cherries', 7000);
const blueberries = promisify('Blueberries', 7000);
const melons = promisify('Melons', 4000);

// RACE
const race = async function () {
  const race = await Promise.race([
    oranges,
    bananas,
    apples,
    grapes,
    cherries,
    blueberries,
    melons,
  ]);
  return race;
  // should be oranges, of course
};

// SEQUENCE
const sequence = async function () {
  const applesRes = await apples;
  const bananasRes = await bananas;
  const blueberriesRes = await blueberries;
  const cherriesRes = await cherries;
  const grapesRes = await grapes;
  const melonsRes = await melons;
  const orangesRes = await oranges;

  return [
    applesRes,
    bananasRes,
    blueberriesRes,
    cherriesRes,
    grapesRes,
    melonsRes,
    orangesRes,
  ];
};

// PARALLEL
const parallel = async function () {
  const parallel = await Promise.all([
    oranges,
    bananas,
    apples,
    grapes,
    cherries,
    blueberries,
    melons,
  ]);
  return parallel;
  //   console.log('PARALLEL: ', parallel);
};

// 3 TYPES OF PROMISE COLLECTIONS RESOLVED COLLECTIVELY
(async function () {
  const raceRes = await race();
  // console.log(raceRes);
  const sequenceRes = await sequence();
  // console.log(sequenceRes);
  const parallelRes = await parallel();
  // console.log(parallelRes);
})();

// RACE OF RACE / PARALLEL / SEQUENCE
(async function () {
  const raceOfRaceSequenceParallel = await Promise.race([
    sequence(),
    parallel(),
    race(),
  ]);
  console.log(raceOfRaceSequenceParallel);
})();
