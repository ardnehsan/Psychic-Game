	alert("Press a key to begin!");
	

	//array of options for the computer to choose from
	var computerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	//variable for score
	var wins = 0;
	var losses = 0;
	var chances = 9;
	var userAnswers = [];

	//generates a random answer for the computer
	var random = computerOptions[Math.floor(Math.random() * computerOptions.length)];


	//event to collect input from user
	document.onkeyup = function(){
		var userGuess = event.key;
	

	//user's input is stored in an array for display
	userAnswers.push(userGuess);



		if(computerOptions.indexOf(userGuess) == -1)
		{
			alert("ERROR ERROR");
		}


	//condition for user guessing right
		if(userGuess == random)
		{
			wins++;
			chances = 9;
			random = computerOptions[Math.floor(Math.random() * computerOptions.length)];
			alert("You Won!");
			userAnswers = [];
		}

	//conditions for guessing wrong and losing
		else
		{
			chances--;
		


			if(chances == 0)
			{
				losses++;
				alert("You Lose!");
				chances = 9;
				userAnswers = [];
			}
		}

		var score =  "<p>Wins: " + wins + "</p>" +
					"<p>Losses: " + losses + "</p>" +
					"<p>Guesses Left: " + chances + "</p>" +
	 				"<p>Your Guesses so far: " + userAnswers +"</p>";
	
	  	//writes to the html document
	  	document.querySelector("#game").innerHTML=score;	  	
	}