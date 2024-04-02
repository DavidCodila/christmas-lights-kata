import { alterRectangleLights } from "./christmasLights";
import { createLightsArray } from "./createLightsArray";
import { scenario_1, scenario_2, scenario_3 } from "./christmasLights.test";

export function fillArrayWith1to3Scenarios(): string[][] {
  var blankLightsArray = createLightsArray();
  var filledLightsArray = alterRectangleLights(
    scenario_1,
    blankLightsArray,
    "1"
  );
  filledLightsArray = alterRectangleLights(scenario_2, filledLightsArray, "1");
  filledLightsArray = alterRectangleLights(scenario_3, filledLightsArray, "1");
  return filledLightsArray;
}
