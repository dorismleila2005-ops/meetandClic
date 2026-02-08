document.addEventListener("DOMContentLoaded", () => { 
	if (!localStorage.getItem("users")) { 
		localStorage.setItem("users", JSON.stringify([])); 
		console.log("Local storage initialized with empty users list."); 
	} 
});
