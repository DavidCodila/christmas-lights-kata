function alterRectangleLights(
  rectangleCornersCoordinates: number[],
  lightsArray: string[][],
  onOrOff: string
) {
  let topLeftCorner = [
    rectangleCornersCoordinates[0],
    rectangleCornersCoordinates[1],
  ];
  let bottomRightCorner = [
    rectangleCornersCoordinates[2],
    rectangleCornersCoordinates[3],
  ];
  for (var i = topLeftCorner[0]; i <= bottomRightCorner[0]; i++) {
    for (var j = topLeftCorner[1]; j <= bottomRightCorner[1]; j++) {
      if (onOrOff == "T") {
        if (lightsArray[i][j] == "0") {
          lightsArray[i][j] = "2";
        } else lightsArray[i][j] = "3";
      } else lightsArray[i][j] = onOrOff;
    }
  }
  return lightsArray;
}

export function turnOn(
  rectangleCornersCoordinates: number[],
  lightsArray: string[][]
) {
  return alterRectangleLights(rectangleCornersCoordinates, lightsArray, "1");
}

export function turnOff(
  rectangleCornersCoordinates: number[],
  lightsArray: string[][]
) {
  return alterRectangleLights(rectangleCornersCoordinates, lightsArray, "0");
}

export function toggle(
  rectangleCornersCoordinates: number[],
  lightsArray: string[][]
) {
  return alterRectangleLights(rectangleCornersCoordinates, lightsArray, "T");
}

export function countLights(
  lightsArray: string[][],
  brightnessWanted: boolean
): number {
  var brightness = 0;
  var numberOfLightsOn = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (lightsArray[i][j] != "0") {
        if (brightnessWanted) {
          brightness += Number(lightsArray[i][j]);
        } else numberOfLightsOn++;
      }
    }
  }
  if (brightness != 0) {
    return brightness;
  } else return numberOfLightsOn;
}
