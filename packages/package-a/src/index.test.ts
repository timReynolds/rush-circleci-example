import sut from "./index";

describe("Hello", () => {
  test("Should default to World", () => {
    expect(sut()).toBe("Hello World!!");
  });

  test("When given name, should user name", () => {
    const name = "Bob";
    expect(sut(name)).toBe(`Hello ${name}!!`);
  });
});
