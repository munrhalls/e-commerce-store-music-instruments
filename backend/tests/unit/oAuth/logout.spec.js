test("console log test", () => {
  console.log = jest.fn();

  console.log("This is a test log.");

  expect(console.log).toHaveBeenCalledWith("This is a test log.");
});
