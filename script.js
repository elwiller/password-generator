// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var charSet1 = (document.getElementById("lower").checked);
	var charSet2 = (document.getElementById("upper").checked);
	var charSet3 = (document.getElementById("number").checked);
	var charSet4 = (document.getElementById("special").checked);
	if (charSet1 || charSet2 || charSet3 || charSet4) {
		var password = generatePassword(charSet1, charSet2, charSet3, charSet4, range.value);
		var optionsDisplay = document.querySelector("#options");
		var passwordText = document.querySelector("#password");
		var passwordDisplay = document.querySelector("#pwdHolder");

		optionsDisplay.style.display = "none";
		passwordText.value = password;
		passwordDisplay.style.display = "block";
	} else {
			alert('Please select at least one character set\nfor password generation.');
	}
}

// generate password
function generatePassword(pwdLower, pwdUpper, pwdNumber, pwdSpecial, pwdLength) {
	var lwrCse = "abcdefghijklmnopqrstuvwxyz";
	var uprCse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var nmbrs = "1234567890";
	var spcls = "!@#$%^&*()";
	var charPool = "";
	var actualPassword = "";
	pwdLower ? charPool += lwrCse : null;
	pwdUpper ? charPool += uprCse : null;
	pwdNumber ? charPool += nmbrs : null;
	pwdSpecial ? charPool += spcls : null;
	for (i = 0; i < pwdLength; i++) {
		actualPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
	}
	return actualPassword;
}

// "Price Range" slider by onyx1812 https://codepen.io/onyx1812/pen/GRJxmva
const
	range = document.getElementById('range'),
	rangeV = document.getElementById('rangeV'),
	setValue = ()=>{
		const
			newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
			newPosition = 10 - (newValue * 0.2);
		rangeV.innerHTML = `<span>${range.value}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
