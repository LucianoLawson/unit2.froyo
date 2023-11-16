// Function to count the frequency of froyo flavors
function countFlavorFrequency(flavorString) {
  const flavorsArray = flavorString.split(",");
  const flavorCount = {};

  flavorsArray.forEach(flavor => {
    flavorCount[flavor.trim()] = (flavorCount[flavor.trim()] || 0) + 1;
  });

  return flavorCount;
}

// Function to prompt the user for froyo flavors and display the results
function processFroyoOrders() {
  // Prompt user for froyo flavors
  const userInputString = prompt(
    "Please enter some flavors separated by commas.",
    "chocolate, vanilla, vanilla, strawberry, oreo, oreo, oreo"
  );

  // Count flavors
  const flavorCountResult = countFlavorFrequency(userInputString);

  // Display the result in the console
  console.log("Flavor Count", flavorCountResult);
}

// Call the function to start the process
processFroyoOrders();
