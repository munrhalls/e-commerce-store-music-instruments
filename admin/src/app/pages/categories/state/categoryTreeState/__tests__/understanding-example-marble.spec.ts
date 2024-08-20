import { TestScheduler } from "rxjs/testing";
import { of } from "rxjs";
import { map } from "rxjs/operators";

// BE CAREFUL WITH "-". NO UNNECESSARY "-"'s.
// "-" means "advance time by one frame in the virtual time enviroment.
// AND I DON'T NEED TO DO THAT. BECAUSE RXJS observables are synchronous!!!
// Doesn't matter if some async takes 10 000 hours. It's still one "-" of virtual time. It's still one *synchronous* frame of virtual time.
// For example: the below "-"'s are wrong.

// EXAMPLE
const sourceMarble = "-a-b-c-|"; // Marble diagram for the source observable
//^ WRONG! UNNECESSARY "-" time advances!
// SHOULD BE: "abc|". All one synchronous time frame.

const testScheduler = new TestScheduler((actual, expected) => {
  // Assert 2/2 | WHY!? WHY TWO ASSERTIONS!?!?!?!
  // Tool's design. No way around it.
  // Would have normal, one assertion otherwise.
  expect(actual).toEqual(expected);
});

testScheduler.run((helpers) => {
  // Arrange
  const sourceMarble = "-a-b-c-|"; // Marble diagram for the source observable
  const sourceEmissions = { a: 1, b: 2, c: 3 }; // Emissions corresponding to the source marble
  const expectedMarble = "-x-y-z-|";
  const expectedEmissions = { x: 2, y: 4, z: 6 };

  // Act
  const source$ = helpers.hot(sourceMarble, sourceEmissions); // Create the source observable (actual values: 1, 2, 3)
  const result$ = source$.pipe(map((value) => value * 2)); // Apply transformation (actual values: 2, 4, 6)

  // Assert 1/2
  helpers.expectObservable(result$).toBe(expectedMarble, expectedEmissions);
});
describe("Logger", () => {
  test.todo("to do later pass");
});
