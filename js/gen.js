const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const incCaps = document.getElementById("cap");
const generate = document.getElementById("generate");

generate.addEventListener("click", () => {
    let characters = alpha;
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    incCaps.checked ? (characters += alphaCap) : "";
    passwordTxt.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
    password += characters.charAt(
        Math.floor(Math.random() * characters.length)
    );
    }
    return password;
};