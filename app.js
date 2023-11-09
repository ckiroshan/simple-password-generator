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

// Password generating function
function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) [(password += allChars[Math.floor(Math.random() * allChars.length)])];

  passwordBox.value = password;
}
