$(document).ready(function(){ // start jQuery

var magic8Ball = {};

magic8Ball.listOfAnswers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];

magic8Ball.getAnswer = function(question)
{

	var listOfAnswersLength = this.listOfAnswers.length;
	var randomIndex = Math.floor(Math.random() * listOfAnswersLength);
	var randomAnswer = this.listOfAnswers[randomIndex];

  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
  $("#answer").text(randomAnswer).fadeIn(4000);
  $("#8ball").effect("shake");

}; // getAnswer()

$("#answer").hide();

var showPrompt = function() {

  $("#answer").hide();
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

setTimeout(
  function() {
    //show prompt
    var promptQuestion = prompt("Ask a yes or no question");
    magic8Ball.getAnswer(promptQuestion);
  }, 500);

}; // showPrompt()

$("#questionButton").click(showPrompt);

}); // end jQuery
