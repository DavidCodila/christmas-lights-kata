import { test, expect } from "bun:test";
import { turnOnLights } from "./christmasLights";
import * as christmasLightsExpected from "./christmasLightsScenariosExpected";
import { createLightsArray } from "./createLightsArray";

const scenario_1 = [7, 7, 8, 9];
const scenario_2 = [3, 2, 7, 3];
const scenario_3 = [3, 5, 5, 8];

test("should turn on 7,7 through 8,9", () => {
  var blankLightsArray = createLightsArray();
  var result = turnOnLights(scenario_1, blankLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario1);
});

test("should turn on 3,2 through 7,3", () => {
  var blankLightsArray = createLightsArray();
  var result = turnOnLights(scenario_2, blankLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario2);
});

test("should turn on 4,8 through 7,4", () => {
  var blankLightsArray = createLightsArray();
  var result = turnOnLights(scenario_3, blankLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario3);
});

test("should turn on all lights from tests 1 to 3", () => {
  var blankLightsArray = createLightsArray();
  var filledLightsArray = turnOnLights(scenario_1, blankLightsArray);
  filledLightsArray = turnOnLights(scenario_2, filledLightsArray);
  filledLightsArray = turnOnLights(scenario_3, filledLightsArray);
  expect(filledLightsArray).toEqual(christmasLightsExpected.scenario4);
});
