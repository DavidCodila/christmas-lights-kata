export function alterRectangleLights(
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

export function numberOfLightsOn(lightsArray: string[][]): number {
  var numberOfLightsOn = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (lightsArray[i][j] != "0") {
        numberOfLightsOn++;
      }
    }
  }
  return numberOfLightsOn;
}

export function lightsBrightness(lightsArray: string[][]): number {
  return 0;
}
