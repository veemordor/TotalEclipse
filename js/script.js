var answers = [
	"Lonely and you're never coming round",
	"Tired of listening to the sound of my tears",
	"Nervous that the best of all the years have gone by",
	"Terrified and then I see the look in your eyes",
	"Fall apart",
	"",
	"Restless and I dream of something wild",
	"Helpess and I'm lying like a child in your arms",
	"Angry and I know you have to get out and cry",
	"Terrified and then I see the look in your eyes",
	"Now tonight"
]

var health = 3;
var playPiano = true;


$(function() {  

	//smooth scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	$(window).scroll(function(){
	    $(".title").css("opacity", 0 + $(window).scrollTop() / 300);
	});

	//music starts playing when page loads, this mutes the music when user clicks on volume icon
	$(".fa.fa-volume-up").on("click", function(){
		if (playPiano == true) {
			document.getElementById('totalEclipseSound').pause();
			playPiano = false;
			$(this).addClass("fa-volume-off");
			$(this).removeClass("fa-volume-up");
	      } else {
			document.getElementById('totalEclipseSound').play();
			playPiano = true;
			$(this).addClass("fa-volume-up");
			$(this).removeClass("fa-volume-off");
	      }
});

	var sliderCounter = 0;

	// every time you click on TURN AROUND, it increases the slider counter by one
	$(".turnAround").on("click", function(){
		sliderCounter += 1;

		//every time you click on TURN AROUND it plays the Turn Around sound
		(playPiano == false) 
		document.getElementById('turnAroundSound').play();
		playPiano = true;
	});

	// when user clicks on an answer.
	$("input[value]").on("click", function(){
		var questionNumber = sliderCounter - 1;

		//creates a variable that stores the answer of what the user clicks
		var usersAnswer = $(this).val(); 


		var clickedLabel = $(this).attr("id");

		// this compares the usersAnswer to var answer 
		if (usersAnswer === answers[questionNumber]){

			// correct selection turns form label green (add class)
			$(`label[for=${clickedLabel}]`).addClass("correctAnswer");
			// ungrey the Turn Around Button + make it clickable
			// $(this).parent().addClass("test");
			$(this).parent().siblings(".turnAround").removeClass("inactiveLink");

		} else if (usersAnswer !== answers[questionNumber] && health === 3){
			health--;
			// wrong selection turns form label red
			$(`label[for=${clickedLabel}]`).addClass("wrongAnswer");
			$(`label[for=${clickedLabel}]`).html(`<p>Wrong! Try again!</p>`);
			$(".fa-heart.levelOne").removeClass("fa-heart.levelOne");
			$(".fa-heart.levelOne").addClass("fa-heart-o");
		} else if (usersAnswer !== answers[questionNumber] && health === 2){
			health--;
			$(`label[for=${clickedLabel}]`).addClass("wrongAnswer");
			$(`label[for=${clickedLabel}]`).html(`<p>Wrong! Try again!</p>`);
			$(".fa-heart.levelTwo").removeClass("fa-heart.levelTwo");
			$(".fa-heart.levelTwo").addClass("fa-heart-o");
		} else {

			//if user gets three wrong answers, the Game Over slide appears (a class is added to turn it from from display:none to display:flex)
			$(".gameOver").addClass("displayGameOver");
				return health = 0;

			}
		});

		//when user clicks last Turn Around button, user wins:
		// - 'Total Eclipse of the Heart' plays.
		$(".lastTurnAround").on("click", function(){
			(playPiano == false)  
			document.getElementById('youWinSound').play();
			document.getElementById('totalEclipseSound').pause();
			playPiano = true;

			// - displayWin appears (a class is added to turn it from from display:none to display:flex)
			$(".gameWin").addClass("displayGameWin");
	});


});

