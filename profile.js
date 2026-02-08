document.addEventListener("DOMContentLoaded", () => {
	const user = JSON.parse(localStorage.getItem("currentUser"));
	
	if (!user) {
		window.location.href = "log_in.html";
		return;
	}
	
	document.getElementById("profile-username").textContent = user.username;
	document.getElementById("profile-firstname").textContent = user.firstname;
	document.getElementById("profile-lastname").textContent = user.lastname;
	document.getElementById("profile-pronoun").textContent = user.pronoun;
	}); 