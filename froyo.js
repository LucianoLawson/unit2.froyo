/* create prompt for user to input froyo flavors */
const userInputString = prompt(
  "Please enter some flavors separated by commas.",
  "chocolate, vanilla, vanilla, strawberry, oreo, oreo, oreo"
);

// Split the string of numbers into an array of strings.
const flavorsArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const flavorCount = {};
flavorsArray.forEach(flavor => {
  ;
  flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
});
console.log("Flavor Count", flavorCount);
