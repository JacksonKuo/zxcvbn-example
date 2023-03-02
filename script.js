const level = ["Very weak", "Weak", "OK", "Strong", "Very strong"];

const pwd = document.getElementById("password-input");
const pwdStrength = document.getElementById("password-strength");

pwd.addEventListener("input", function () {
	const pwdVal = pwd.value;
	let result = zxcvbn(pwdVal);  
	
	//document.getElementById("result").textContent = JSON.stringify(result, null, 2);
	
	let score = result.score;

	if (score > 2) {
		document.getElementById("submit").disabled = false;
	} else {
		document.getElementById("submit").disabled = true;
	}
	document.getElementById("password-rating").textContent = "Rating: " + level[score];
	document.getElementById("feedback-warning").textContent = "Warning: " + JSON.stringify(result.feedback.warning).replace(/"/g, '');
	document.getElementById("feedback-suggestion").textContent = "Suggestions: " + JSON.stringify(result.feedback.suggestions.join()).replace(/"/g, '');
	//console.log(result.feedback.warning)
	pwdStrength.className = "strength-" + result.score;  
});

