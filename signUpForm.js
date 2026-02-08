document.addEventListener("DOMContentLoaded",function() {
    const form = document.getElementById("imAform");
    const pronounInput = document.querySelector('input[name="pronouns"]:checked');
    const pronoun = pronounInput ? pronounInput.value : null;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    
        let users = localStorage.getItem("users"); 
        if(users === null){
            users=[];
        }else{
            users= JSON.parse(users);
        }

        const newuser={
            username: document.getElementById("usernameid").value,
            firstname: document.getElementById("Firstnameid").value,
            lastname: document.getElementById("Lastnameid").value,
            password : document.getElementById("passwordid").value,
            email: document.getElementById("emailid").value,
            pronoun: pronoun
        };

        users.push(newuser);

        localStorage.setItem("user", JSON.stringify(users));
        form.reset();
        });


});

















