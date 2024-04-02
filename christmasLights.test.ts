import { test, expect } from "bun:test";
import { turnOnLights } from "./christmasLights";
import * as christmasLightsExpected from "./christmasLightsScenariosExpected";

test("should turn on 8,8 through 9,10", () => {
  const scenaro_1 = [8, 8, 9, 10];
  const result = turnOnLights(scenaro_1);
  expect(result).toEqual(christmasLightsExpected.scenario1);
});
