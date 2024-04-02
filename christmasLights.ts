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
          lightsArray[i][j] = "1";
        } else lightsArray[i][j] = "0";
      } else lightsArray[i][j] = onOrOff;
    }
  }
  return lightsArray;
}
