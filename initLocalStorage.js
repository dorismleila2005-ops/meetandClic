document.addEventListener("DOMContentLoaded", () => {
    // Check if users already exist
    if (!localStorage.getItem("users")) {
        const users = [
            {
                email: "test@email.com",
                password: "1234"
            }
        ];

        localStorage.setItem("users", JSON.stringify(users));
        console.log("Local storage initialized with demo user.");
    } else {
        console.log("Users already exist in local storage.");
    }
});
