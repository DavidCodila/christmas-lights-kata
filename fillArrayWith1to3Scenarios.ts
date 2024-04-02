import { turnOnLights } from "./christmasLights";
import { createLightsArray } from "./createLightsArray";
import { scenario_1, scenario_2, scenario_3 } from "./christmasLights.test";

export function fillArrayWith1to3Scenarios(): string[][] {
  var blankLightsArray = createLightsArray();
  var filledLightsArray = turnOnLights(scenario_1, blankLightsArray);
  filledLightsArray = turnOnLights(scenario_2, filledLightsArray);
  filledLightsArray = turnOnLights(scenario_3, filledLightsArray);
  return filledLightsArray;
}
