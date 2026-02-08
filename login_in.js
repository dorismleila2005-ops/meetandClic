document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (e){
        e.preventDefault(); // stop form from reloading page

        const email = form.email.value;
        const password = form.password.value;

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if user exists
        const userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
            alert("Login successful!");
           
		// Save logged-in user 
		localStorage.setItem("currentUser", JSON.stringify(userFound));
		   
		   // example of a redirect
            window.location.href = "profile.html";
        } else {
            alert("Account not found or wrong credentials. To make an account, go to Sign Up");
        }
    });
});
