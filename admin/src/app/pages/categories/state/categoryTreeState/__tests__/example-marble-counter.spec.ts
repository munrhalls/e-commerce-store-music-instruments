import { TestScheduler } from "rxjs/testing";
import { map } from "rxjs/operators";

describe("It should properly update the counter", () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
  it("should increment the counter by 1", () => {
    testScheduler.run((helpers) => {
      let counter = 0;
      const sourceStream$ = helpers.hot("a-b", { a: "click", b: "click" });
      const expectedMarble = "c-d";
      const expectedEmissions = { c: 1, d: 2 };

      const result$ = sourceStream$.pipe(map((item) => (counter += 1)));

      helpers.expectObservable(result$).toBe(expectedMarble, expectedEmissions);
    });
  });
});
describe("Logger", () => {
  test.todo("to do later");
});
