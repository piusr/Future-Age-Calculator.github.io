/*
A simple script that tells you how old you will be at a future specific year
*/

/*
1. Get the year of birth of the user.
2. Calculate the current age of the user***
3. Subtract the users year of birth from the future year
*/
//We generate the years dynamically


function futureAge() {

	var future = document.getElementById('future-year').value; //Get the value of the year selected in the future
	var birthYear = document.getElementById('yearOfBirth').value; //Get the value of the future year.
	
	var yourAge = parseInt(future - birthYear); //Calculate the difference between both years to get future age.

	if (future === ""  && birthYear === "") {
		return document.getElementById('results').innerHTML = "Hey, You have not selected your Birth year and a Future year.";
		console.log('You have not chosen a date');
	} else if (birthYear === ""){
		return document.getElementById('results').innerHTML = "Hey, You have not selected your Birth year.";

	} else if (future === "") {
		return document.getElementById('results').innerHTML = "Hey, You have not selected a Future year.";

	} else {
		//return the age and pass it into the DOM. 

	return document.getElementById('results').innerHTML = "Hey, by <b>"+future+"</b>" +" you will be "+"<b>"+ yourAge+"</b>" +"years Congratulations!";

	}

	
     
	


};

