
$(document).ready(function() {

  /*--- Random Number Function ---*/

  function randomNumber() { //generate random number between 1 and 100
      return Math.floor(Math.random()*100) +1;
      }

 /*--- Variables ---*/

    var guessList = [];
    var answer = randomNumber();
    var count = 0;


/*--- Get Guess ---*/

  function submitGuess() {  
    $("form").submit(function(event) {
      startGame();
      event.preventDefault;
      return false; //Why does this only work with return false?
    });
    $("form").keydown(function(event) {
      if (event.keycode === 13) {
        startGame();
        event.preventDefault;
        return false;
      }
    });
  }
  submitGuess();

/*--- Start Game ---*/

  function startGame() { //Can this be placed above?
    var userGuess = parseInt($("#userGuess").val()); 
    console.log("Your guess is " + userGuess + ".");
    console.log("The random number is " + answer + ".")

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100 || userGuess === 0) { // if input is a string, alert user to provide a number.
        alert("Please use the number keys to choose a number between 1 and 100");
        $("#userGuess").val("");
        return false;
    }

    else {
      count++;
      $("span#count").text(count);
      $("#userGuess").val("");
      guessList.push(userGuess); //pushes guess to empty guessList array
      $("ul#guessList").append('<li>' + userGuess + '</li>'); //appends guess to <ul>

      var difference = Math.abs(userGuess - answer);
      //var previousDistance = Math.abs(answer - guessList[guessList.length - 2]);

          if (difference === 0) {
               $("h2#feedback").text("You're Right!");
               endGame();
            }       
          else if (difference < 5) {
                $("h2#feedback").text("You're very hot!");      
            }
          else if (difference < 25) {
                $("h2#feedback").text("You're getting warm!");  
            }
          else if (difference < 40) {
                $("h2#feedback").text("You're getting cold!");
            }                      
          else if (difference < 80) {
                $("h2#feedback").text("You're ice cold!");   
            }  
    }
  }

  function endGame() {
      alert("You guessed it right! You're a champ. We'll reset the game for you!");
     $("h2#feedback").text("Make your Guess!");
      answer = randomNumber();
      //console.log(answer);
      $("ul#guessList").empty();
      randomNumber();
      count = 0;
      $("span#count").text(0);
      guessList = [];  
  }

  function newGame() {
    $(".new").click(function() {
      $("h2#feedback").text("Make your Guess!");
      answer = randomNumber();
      //console.log(answer);
      $("ul#guessList").empty();
      randomNumber();
      count = 0;
      $("span#count").text(0);
      guessList = [];     
    });
  }
  newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});

  
    /// My old code

       /*$("form").submit(function(event) { // click "guess" and generate random number
      event.preventDefault();
      var userGuess = parseInt($("#userGuess").val()); //get value of guess and turn string value into a number
      console.log(userGuess);

      if (isNaN(userGuess)) { // if input is a string, alert user to provide a number.
        alert("Please use the number keys.");
        return false;
      }
      else {
      var count = 0; 
      var list = [];
      var answer = randomNumber(); // generate random number when input is an integer
      console.log(answer);

        for (var i = 1; i <= 100; i++) {

          if (userGuess === answer) { //this works
            console.log("That's right!");

          }
        }  
      }
    }); */




