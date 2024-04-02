export function createLightsArray() {
  var defaultValue = "0";
  var lightsArray = [...Array(10)].map((e) => Array(10).fill(defaultValue));
  console.log(lightsArray);
  return lightsArray;
}
