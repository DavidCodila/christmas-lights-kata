import { test, expect } from "bun:test";
import { countLights, toggle, turnOff, turnOn } from "./christmasLights";
import * as christmasLightsExpected from "./christmasLightsScenariosExpected";
import { createLightsArray } from "./createLightsArray";
import { fillArrayWith1to3Scenarios } from "./fillArrayWith1to3Scenarios";

export const scenario_1 = [7, 7, 8, 9];
export const scenario_2 = [3, 2, 7, 3];
export const scenario_3 = [3, 5, 5, 8];
export const scenario_4 = [2, 7, 5, 8];
export const scenario_5 = [6, 0, 7, 8];

//first number repersents row, second column
test("should turn on 7,7 through 8,9", () => {
  var blankLightsArray = createLightsArray();
  var result = turnOn(scenario_1, blankLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario1);
});

test("should turn on 3,2 through 7,3", () => {
  var blankLightsArray = createLightsArray();
  var result = turnOn(scenario_2, blankLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario2);
});

test("should turn on 4,8 through 7,4", () => {
  var blankLightsArray = createLightsArray();
  var result = turnOn(scenario_3, blankLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario3);
});

test("should turn on all lights from tests 1 to 3", () => {
  var result = fillArrayWith1to3Scenarios();
  expect(result).toEqual(christmasLightsExpected.scenario1to3);
});

test("should turn off 3,8 through 6,9", () => {
  var filledLightsArray = fillArrayWith1to3Scenarios();
  var result = turnOff(scenario_4, filledLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario4);
});

test("should toggle lights 7,1 through 8,9", () => {
  var filledLightsArray = fillArrayWith1to3Scenarios();
  filledLightsArray = turnOff(scenario_4, filledLightsArray);
  var result = toggle(scenario_5, filledLightsArray);
  expect(result).toEqual(christmasLightsExpected.scenario5);
});

test("how many lights are left", () => {
  var filledLightsArray = fillArrayWith1to3Scenarios();
  filledLightsArray = turnOff(scenario_4, filledLightsArray);
  filledLightsArray = toggle(scenario_5, filledLightsArray);
  var result = countLights(filledLightsArray, false);
  expect(result).toEqual(34);
});

test("what is the brightness of all the lights", () => {
  var filledLightsArray = fillArrayWith1to3Scenarios();
  filledLightsArray = turnOff(scenario_4, filledLightsArray);
  filledLightsArray = toggle(scenario_5, filledLightsArray);
  var result = countLights(filledLightsArray, true);
  expect(result).toEqual(58);
});
