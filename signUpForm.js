document.addEventListener("DOMContentLoaded",function() {
	
    const form = document.getElementById("imAform");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        let users = JSON.parse(localStorage.getItem("users")) || [];
		
		const pronoun = document.querySelector('input[name="pronouns"]: checked')?.value;
        const newuser={
            username: document.getElementById("usernameid").value,
            firstname: document.getElementById("Firstnameid").value,
            lastname: document.getElementById("Lastnameid").value,
            password: document.getElementById("passwordid").value,
            email: document.getElementById("emailid").value,
            pronoun: pronoun
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
		alert("Account created!");
	   form.reset();
});


});

















