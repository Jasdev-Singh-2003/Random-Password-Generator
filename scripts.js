// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%&*_-/';

  let allowedChars = '';
  let password = '';

  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  // console.log(allowedChars);

  if(length <= 0){
    return `(Password length must be ateast 1)`
  }
  if(allowedChars.length === 0){
    return `(Atleast 1 set of characters must be selected)`
  }

  for(let i = 1; i <= length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]
  }

  return password;
}

function copyPass() {
  const copyText = document.getElementById('passOutput');
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  document.getElementById('copyBtn').innerHTML = `Copied`
}

let passwordLength = 15;
let includeLowercase = true;
let includeUppercase = true;
let includeNumbers = true;
let includeSymbols = true;

function newPassword() {
  const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById('passOutput').value = `${password}`;
  document.getElementById('passOutput').value = `${password}`;
  document.getElementById('copyBtn').innerHTML = `Copy`
}

function passLength(length) {
  if(length > 40) {
    length = 40;
  }

  passwordLength = length;

  if(passwordLength <= 5) {
    document.getElementById('srcStrengthImage').src = `./assets/Images/veryWeakStrength.svg`;
    document.getElementById('passStrength').innerHTML = 'Very weak';
    document.getElementById('passStrength').style.backgroundColor = '#ff7700ff';
  }
  else if(passwordLength <= 10) {
    document.getElementById('srcStrengthImage').src = `./assets/Images/weakStrength.svg`;
    document.getElementById('passStrength').innerHTML = 'Weak';
    document.getElementById('passStrength').style.backgroundColor = '#ffb370';
  }
  else if(passwordLength <= 15) {
    document.getElementById('srcStrengthImage').src = `./assets/Images/goodStrength.svg`;
    document.getElementById('passStrength').innerHTML = 'Good';
    document.getElementById('passStrength').style.backgroundColor = '#ffddbf';
  }
  else if(passwordLength <= 20) {
    document.getElementById('srcStrengthImage').src = `./assets/Images/strongStrength.svg`;
    document.getElementById('passStrength').innerHTML = 'Strong';
    document.getElementById('passStrength').style.backgroundColor = '#d5f2a5';
  }
  else if(passwordLength <= 25 || passwordLength > 25) {
    document.getElementById('srcStrengthImage').src = `./assets/Images/veryStrongStrength.svg`;
    document.getElementById('passStrength').innerHTML = 'Very strong';
    document.getElementById('passStrength').style.backgroundColor = '#98e336';
  }
  newPassword();
}

function includeChars() {
  
  uppercaseAllowed = document.getElementById('uppercase');
  if(uppercaseAllowed.checked === true) {
    includeUppercase = true;
  } else {
    includeUppercase = false;
  }

  lowercaseAllowed = document.getElementById('lowercase');
  if(lowercaseAllowed.checked === true) {
    includeLowercase = true;
  } else {
    includeLowercase = false;
  }

  numbersAllowed = document.getElementById('numbers');
  if(numbersAllowed.checked === true) {
    includeNumbers = true;
  } else {
    includeNumbers = false;
  }

  symbolsAllowed = document.getElementById('symbols');
  if(symbolsAllowed.checked === true) {
    includeSymbols = true;
  } else {
    includeSymbols = false;
  }

  newPassword();
}

newPassword();

// console.log(`Generated Password: ${password}`);
// document.getElementById('passOutput').value = `${password}`;