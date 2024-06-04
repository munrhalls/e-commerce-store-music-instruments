// // 1 get colors from https://mdigi.tools/color-shades dev tools console
// const colorShades = document.getElementsByClassName("color-shade");
// let colorShadesString = "";

// for (let i = 0; i < colorShades.length; i++) {
//   const colorValue = getComputedStyle(colorShades[i]).getPropertyValue(
//     "background-color",
//   );

//   colorShadesString += colorValue;
//   if (i < colorShadesString.length - 1) {
//     colorShadesString += ", ";
//   }
// }

// console.log(colorShadesString);

const colorShades = document.getElementsByClassName("color-shade");
const nebularColorMap = {};

const numShades = Math.min(colorShades.length, 11);

for (let i = 0; i < numShades; i++) {
  const colorValue = getComputedStyle(colorShades[i]).getPropertyValue(
    "background-color",
  );
  const shade = i === numShades - 1 ? 1100 : 100 + i * 100;
  nebularColorMap[`color-basic-${shade}`] = colorValue;
}

// Convert the map to a formatted string
const formattedString = Object.entries(nebularColorMap)
  .map(([key, value]) => `${key}: ${value},`) // Create 'key: value,' lines
  .join("\n"); // Join lines with newlines

console.log(formattedString);

function generateNebularThemeVariables() {
  const darkThemeMap = {
    "background-basic-color-1": "color-basic-700",
    "background-basic-color-2": "color-basic-800",
    "background-basic-color-3": "color-basic-900",
    "background-basic-color-4": "color-basic-100",
    "border-basic-color-1": "color-basic-700",
    "border-basic-color-2": "color-basic-800",
    "border-basic-color-3": "color-basic-900",
    "border-basic-color-4": "color-basic-1000",
    "border-basic-color-5": "color-basic-1100",
    "text-disabled-color": "color-basic-600", // Lighter for dark
  };

  const lightThemeMap = {
    "background-basic-color-1": "color-basic-100",
    "background-basic-color-2": "color-basic-200",
    "background-basic-color-3": "color-basic-300",
    "background-basic-color-4": "color-basic-1100", // Darkest for background
    "border-basic-color-1": "color-basic-100",
    "border-basic-color-2": "color-basic-200",
    "border-basic-color-3": "color-basic-300",
    "border-basic-color-4": "color-basic-400",
    "border-basic-color-5": "color-basic-500",
    "text-disabled-color": "color-basic-800", // Darker for light
  };

  // Convert to formatted string

  const formattedStringLight = Object.entries(lightThemeMap)
    .map(([key, value]) => `${key}: ${value},`)
    .join("\n  ");

  const formattedStringDark = Object.entries(darkThemeMap)
    .map(([key, value]) => `${key}: ${value},`)
    .join("\n  ");

  const formattedString =
    "Light theme: " +
    "\n" +
    formattedStringLight +
    "\n" +
    "Dark theme: " +
    "\n" +
    formattedStringDark;

  return formattedString;
}

const themeColors = generateNebularThemeVariables();
console.log("Theme colors: ", themeColors);
