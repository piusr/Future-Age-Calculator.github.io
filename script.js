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

	let future = document.getElementById('future-year').value; //Get the value of the year selected in the future
	let birthYear = document.getElementById('yearOfBirth').value; //Get the value of the future year.	
	let yourAge = parseInt(future - birthYear); //Calculate the difference between both years to get future age.

	let year = new Date();
	let currentYear = year.getFullYear();

	console.log(currentYear);

	if (future === ""  && birthYear === "") {
		return document.getElementById('results').innerHTML = "Hey, You have not selected your Birth year and a Future year.";

	} else if (birthYear === ""){
		return document.getElementById('results').innerHTML = "Hey, You have not selected your Birth year.";

	} else if (future === "") {
		return document.getElementById('results').innerHTML = "Hey, You have not selected a Future year.";

	} else if (future < birthYear) {
		return document.getElementById('results').innerHTML = "Hey, this calculation is not possible. Your birth year cannot be greater than future year.";

	} else if (future < currentYear) {
	    return document.getElementById('results').innerHTML = "Hey, in the year <b>"+future+"</b>" +" you were "+"<b>"+ yourAge+"</b>" +"years!";
               
	} else {
		//return the age and pass it into the DOM. 

	return document.getElementById('results').innerHTML = "Hey, by <b>"+future+"</b>" +" you will be "+"<b>"+ yourAge+"</b>" +"years Congratulations!";
               
	}

	
     
	


};

