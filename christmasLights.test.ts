import { test, expect } from "bun:test";
import { turnOnLights } from "./christmasLights";
import * as christmasLightsExpected from "./christmasLightsScenariosExpected";

test("should turn on 7,7 through 8,9", () => {
  const scenario_1 = [7, 7, 8, 9];
  const result = turnOnLights(scenario_1);
  expect(result).toEqual(christmasLightsExpected.scenario1);
});

test("should turn on 3,2 through 7,3", () => {
  const scenario_2 = [3, 2, 7, 3];
  const result = turnOnLights(scenario_2);
  expect(result).toEqual(christmasLightsExpected.scenario2);
});

test("should turn on 4,8 through 7,4", () => {
  const scenario_3 = [3, 5, 5, 8];
  const result = turnOnLights(scenario_3);
  expect(result).toEqual(christmasLightsExpected.scenario3);
});
