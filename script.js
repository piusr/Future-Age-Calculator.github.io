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
         //Get the values of selected form imput
	let future = document.getElementById('future-year').value; //Get the value of the year selected in the future
	let birthYear = document.getElementById('yearOfBirth').value; //Get the value of the future year.	
	let yourAge = parseInt(future - birthYear); //Calculate the difference between both years to get future age.
    
      //We get the current year
	let year = new Date();
	let currentYear = year.getFullYear();

	
            //Conditions to check and calulate future age based on suplied valued

            //If no value is supplied
	if (future === ""  && birthYear === "") {
		 message(document.getElementById('results').innerHTML = `Hey, You have not selected your Birth year and a Future year.`);
          //If birth year is left empty
	} else if (birthYear === ""){
		message( document.getElementById('results').innerHTML = `Hey, You have not selected your Birth year.`);
          //If future year is left empty
	} else if (future === "") {
		 message(document.getElementById('results').innerHTML = `Hey, You have not selected a Future year.`);
          //If future year selected is less than birth year
	} else if (future < birthYear) {
		 message(document.getElementById('results').innerHTML = `Hey, this calculation is not possible. Your birth year cannot be greater than future year.`);
          //If future year is the same as current year
	} else if (future == currentYear) {
		 message(document.getElementById('results').innerHTML = `Hey, you will be <b> ${yourAge}</b>years this year. Congratulations!`);
         //If future year is less than the current year
	} else if (future < currentYear) {
	    message(document.getElementById('results').innerHTML = `Hey, in the year <b>${future}</b> you were <b>${yourAge}</b>years!`);
               
	} else {
		//return the age and pass it into the DOM. 

	 message(document.getElementById('results').innerHTML = `Hey, by <b>${future}</b> you will be <b> ${yourAge}</b>years Congratulations!`);
               
	}

	
     
	


};

function message(msg) {
	return msg;
}

message(msg);