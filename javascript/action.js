// function for handling form data 

document.getElementById('myform').addEventListener("submit", validate);

function validate(e){
	e.preventDefault();

	var password = document.getElementById('password').value;
	var confirmPassword = document.getElementById('confirmPassword').value;

    // check if password matches the confirm password 
	if (password === confirmPassword){
		alert('Success');
		
		var name = document.getElementById('name').value;
	    var surname = document.getElementById('surname').value;
     	var age = document.getElementById('age').value;
		var email = document.getElementById('email').value;

		var data = [name, surname, age, email, password, confirmPassword];
		console.log(data);
	}

	else {
		alert("Passwords do not match");

	}
}