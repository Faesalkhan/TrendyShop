import { Sum } from "../sum";
test("Sum should calculate addition of two numbers", () => {
  const result = Sum(3, 4);
  expect(result).toBe(7);
});
