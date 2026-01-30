const generatePasswordButton = document.querySelector("#generate-password-btn");
const passwordContainer = document.querySelector("#password-container");
const passwordElement = document.querySelector("#password");

function getLetterLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getLetterUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber(){
    return Math.floor(Math.random() * 10).toString();
}

function getSymbol(){
    const symbols = "!@#$%&*()_+-=?/[]{},.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){
    let password = "";
    const passwordLength = 10;

    const generatos = [getLetterLowerCase(), getLetterUpperCase(), getNumber(), getSymbol()];

    for(i = 0; i < passwordLength; i++){
        const randomValue = generatos[Math.floor(Math.random() * generatos.length)];
        password += randomValue;
    }

    passwordElement.innerText = password;
    passwordContainer.classList.remove("hide");
}

generatePasswordButton.addEventListener("click", () =>{
    generatePassword();
})