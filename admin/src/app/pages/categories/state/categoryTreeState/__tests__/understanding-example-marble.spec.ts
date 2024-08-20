import { TestScheduler } from "rxjs/testing";
import { of } from "rxjs";
import { map } from "rxjs/operators";

const sourceMarble = "-a-b-c-|";
const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe("Understanding marble diagram", () => {
  it("should emit the correct values", () => {
    testScheduler.run((helpers) => {
      const sourceEmissions = { a: 1, b: 2, c: 3 };
      const expectedMarble = "-x-y-z-|";
      const expectedEmissions = { x: 2, y: 4, z: 6 };

      const source$ = helpers.cold(sourceMarble, sourceEmissions);
      const result$ = source$.pipe(map((value) => value * 2));

      helpers.expectObservable(result$).toBe(expectedMarble, expectedEmissions);
    });
  });
});

// notes
testScheduler.run((helpers) => {
  // Arrange
  const sourceMarble = "-a-b-c-|"; // Marble diagram for the source observable
  const sourceEmissions = { a: 1, b: 2, c: 3 }; // Emissions corresponding to the source marble
  const expectedMarble = "-x-y-z-|";
  const expectedEmissions = { x: 2, y: 4, z: 6 };

  // Act
  const source$ = helpers.hot(sourceMarble, sourceEmissions); // Create the source observable (actual values: 1, 2, 3)
  const result$ = source$.pipe(map((value) => value * 2)); // Apply transformation (actual values: 2, 4, 6)

  helpers.expectObservable(result$).toBe(expectedMarble, expectedEmissions);
});
