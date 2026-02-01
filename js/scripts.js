const generatePasswordButton = document.querySelector("#generate-password-btn");
const passwordContainer = document.querySelector("#password-container");
const passwordElement = document.querySelector("#password");
const lengthInput = document.querySelector("#length-input");
const lettersInput = document.querySelector("#letters-input");
const numbersInput = document.querySelector("#numbers-input");
const symbolsInput = document.querySelector("#symbols-input");
const copyPasswordBtn = document.querySelector("#copy-password-btn");

function getLetterLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getLetterUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function getSymbol() {
  const symbols = "!@#$%&*()_+-=?/[]{},.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  let password = "";
  const passwordLength = lengthInput.value;

  const generatos = [];

  if (lettersInput.checked)
    generatos.push(getLetterLowerCase, getLetterUpperCase);

  if (numbersInput.checked) generatos.push(getNumber);

  if (symbolsInput.checked) generatos.push(getSymbol);

  if (generatos.length === 0) return;

  for (i = 0; i < passwordLength; i++) {
    const randomValue =
      generatos[Math.floor(Math.random() * generatos.length)]();
    password += randomValue;
  }

  passwordElement.innerText = password;
  passwordContainer.classList.remove("hide");
}

function copyValue(text) {
  navigator.clipboard.writeText(text).then(() => {
    copyPasswordBtn.innerText = "Copiado!";
    copyPasswordBtn.classList.add("copied")
    
    setTimeout(() => {
      copyPasswordBtn.innerText = "Copiar";
      copyPasswordBtn.classList.remove("copied")
    }, 1000);
  });
}

generatePasswordButton.addEventListener("click", (e) => {
  e.preventDefault();
  generatePassword();
});

copyPasswordBtn.addEventListener("click", () => {
  copyValue(passwordElement.innerText);
});
