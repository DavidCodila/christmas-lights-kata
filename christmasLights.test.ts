import { test, expect } from "bun:test";
import { turnOnLights } from "./christmasLights";

test("should turn on 8,8 through 9,10", () => {
  const scenaro_1 = [8, 8, 9, 10];
  const result = turnOnLights(scenaro_1);
  expect(result).toEqual(christmasLightsScenaro1Expected);
});

let christmasLightsScenaro1Expected = [
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
  ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
];
