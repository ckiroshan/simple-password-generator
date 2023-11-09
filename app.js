// Selectors
const passwordBox = document.getElementById("password");
const generateButton = document.getElementById("generate-btn");

// Event Listners
generateButton.addEventListener("click", generatePassword);

// Other variables
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";
const allChars = upperCase + lowerCase + numbers + symbols;

