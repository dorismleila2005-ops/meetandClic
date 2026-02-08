 function changeTheme() {
	 
            const theme = document.getElementById('theme').value;
            document.body.className = ''; // reset previous theme
            document.body.classList.add(theme);
        }