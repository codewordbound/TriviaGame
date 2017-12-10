$(document).ready(function() {
var currentQuestion = 0;
var userPick;
var correct = 0;
var wrong = 0;
var unanswer= 0;
var number = 30;
var trivia = [
	"How many players start on the field per team?",
	"How many penalty kicks does each team get to take if the game ends in a tie?",
	"How many minutes are there in standard time of a soccer game?",
	"How many yellow cards typically result in a red card?",
	"Which of these may result in a Corner Kick?",
	"Whats another name for the Goalie?",
	"What size soccer ball do the pros use?",
	"What is a required piece of equipment for all soccer players during game day (besides cleats)?",
	"How many intervals is the game divided into?",
	"How many years in between every World Cup?"
];
var choices = [
	["A. 8", "B. 9", "C. 10","D. 11"],
	["A. 1","B. 3","C. 5","D. 10"],
	["A. 45", "B. 60", "C. 75", "D. 90"],
	["A. 1", "B. 2", "C. 3", "D. 4"],
	["A. When the ball touches the goal line", "B. When the ball touches the sideline", "C. When the ball crosses the goal line", "D. When the ball crosses the sideline"],
	["A. Quarterback", "B. Keeper", "C. Defender", "D. Winger"],
	["A. 3", "B. 4", "C. 5", "D. 6" ],
	["A. Shinguards", "B. Cup", "C. Gloves", "D. Helmet"],
	["A. It's Not!", "B. 2 Halves", "C. 3 Periods", "D. 4 Quarters"],
	["A. 1", "B. 2", "C. 3", "D. 4"]
];
var answer = [
	"D. 11", "C. 5", "D. 90", "B. 2", "C. When the ball crosses the goal line", "B. Keeper", "C. 5", "A. Shinguards", "B. 2 Halves", "D. 4"
];



function firstPage(){

	$("#question").hide();
	$("#choices").hide();
	$("#show-number").hide();
	$("#wrong").hide();
	$("#right").hide();
	$("#noAnswer").hide();
	$("#restart").hide();

	$("#trivia").html("Click the button to have some fun!");
}

firstPage();

function resetting(){

	currentQuestion = 0;
	correct = 0;
	wrong = 0;
	unanswer = 0;
}


$("#start").on('click',function(){	

	Question();
	console.log("Started");
});


$("#restart").on('click',function(){
	$("#finish").hide();
	$("#unAnswer").hide();
	$("#lost").hide();
	$("#win").hide();

	resetting();

	Question();

	console.log("Again");
});

function Question(){

	$("#start").hide();
	$("#wrong").hide();
	$("#right").hide();
	$("#noAnswer").hide();
	$("#trivia").hide();
	$("#front").hide();
	$("#restart").hide();

	if(currentQuestion < trivia.length){


		run();

		$("#show-number").show();
		$("#choices").show();
		$("#question").show();
		$("#question").html("<h2>" + trivia[currentQuestion] + "</h2>");
		$("#choice0").html(choices[currentQuestion][0]);
		$("#choice1").html(choices[currentQuestion][1]);
		$("#choice2").html(choices[currentQuestion][2]);
		$("#choice3").html(choices[currentQuestion][3]);
	}

	else{
		clearInterval(counter);

		$("#question").hide();
		$("#choices").hide();
		$("#show-number").hide();
		$("#wrong").hide();
		$("#right").hide();
		$("#noAnswer").hide();
		$("#finish").show();
		$("#win").show();
		$("#lost").show();
		$("#unAnswer").show();
		$("#finish").html("- Your Final Score -");
		$("#win").html("Correct: " + correct);		
		$("#lost").html("Wrong: " + wrong);	
		$("#unAnswer").html("Unanswered Questions: " + unanswer);	
		$("#restart").show();	
	
	}


}


$(".bt").on("click",function() {

    userPick = $(this).text();

    $("#choices").hide();

	$("#show-number").hide()

if(userPick === answer[currentQuestion]){

		correct++;

		$("#right").show();

		$("#question").html("<h3>" + "Correct" +"</h3>");

		$("#question").append("<p>" +"The correct answer is " +answer[currentQuestion] + "</p>");
		clearInterval(counter);
	}else {
		wrong++;
		$("#wrong").show();
		$("#question").html("<h3>" + "Wrong" + "</h3>")
		$("#question").append("<p>" +"The correct answer was " +answer[currentQuestion] + "</p>")
		 clearInterval(counter);
	}
		currentQuestion++;
		setTimeout(function(){
   		Question();
    	}, 5000);
console.log("You have " +correct + " correct answers.");
console.log("You have " + wrong + " wrong answers.");
});

function run() {
	number = 30;
    counter = setInterval(decrement, 1000);
    $("#show-number").html("<h2>" + "Time Remaining:  " + number + "</h2>");

    function decrement() {
    	number--;
    
     // if (number === 46)
      	$("#show-number").html("<h2>" + "Time Remaining:  " + number + "</h2>");
      	if (number === 0) {
        stop();        
      }
    }
}
    function stop() {	
    unanswer++;
    $("#choices").hide();
	$("#show-number").hide();
	$("#noAnswer").show();
	$("#question").show();
	$("#question").html("<h3>" + "Time's Up!"+ "</h3>")
	$("#question").append("<p>" +"The correct answer is " +answer[currentQuestion] + "</p>")
    clearInterval(counter);
	console.log("You have " + unanswer + " questions.");	
	currentQuestion++;
    setTimeout(function(){
        Question();
        }, 5000);  

    }
  
}); 