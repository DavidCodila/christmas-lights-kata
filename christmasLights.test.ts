import { test, expect } from "bun:test";
import { turnOnLights } from "./christmasLights";
import * as christmasLightsExpected from "./christmasLightsScenariosExpected";

test("should turn on 8,8 through 9,10", () => {
  const scenario_1 = [7, 7, 8, 9];
  const result = turnOnLights(scenario_1);
  expect(result).toEqual(christmasLightsExpected.scenario1);
});

test("should turn on 4,5 through 8,4", () => {
  const scenario_2 = [3, 2, 7, 3];
  const result = turnOnLights(scenario_2);
  expect(result).toEqual(christmasLightsExpected.scenario2);
});
