export function turnOnLights(
  rectangleCornersCoordinates: number[],
  lightsArray: string[][]
): string[][] {
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
      lightsArray[i][j] = "1";
    }
  }
  return lightsArray;
}
