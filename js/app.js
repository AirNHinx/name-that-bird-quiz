
$(document).ready(function(){

	$(".option-list").hide();
	//$(".option").hide();
	$(".answer-correct").hide();
	$(".answer-wrong").hide();



var answeredCorrect = 0;
var currentBird = 0;
var correctBird = [2, 3, 0, 0, 2, 1, 1, 3, 2, 3];
var birdImg = ['black-capped-chickadee.jpg', 'snowy-egret.jpg', 'raven.jpg', 'violet-sabrewing-hummingbird.jpg', 'puffin.jpg', 'purple-finch.jpg', 'woodduck.jpg', 'stellers-jay.jpg', 'eagle-owl.jpg', 'greater-bird-paradise.jpg']

	/*--- initiate first question---*/
	$("button.initiate").click(function() {
		$(".main-img").html("<img class='main-bg' src='img/background/clouds.jpg'>");
		$(".correct-bird-confirm").hide();
		$(".answer-correct").hide();
		$(".answer-wrong").hide();
		$(".mid-msg").hide();
		$(".top-msg").html("<p>Name that bird!</p>").show();
		$(".btm-msg").hide();
		$(".start").removeClass("button-move-up");
		//$(".bird").html("<img class='birdImg' + currentBird + "' src='img/bird/black-capped-chickadee.jpg'>");
		$(".bird-img").html("<img class = 'bird' " + ">");
		$(".bird").attr("src", "img/bird/" + birdImg[currentBird]);
		$("#bird-options").addClass("option-container");
		$(".option").mouseenter(function() {
		$(this).addClass("mouse-over");
		})
		.mouseleave(function(){
		$(this).removeClass("mouse-over");
		});
		console.log("option" + correctBird[currentBird]);
		$("#bird" + currentBird).show();
		$("#bird" + currentBird + ">ul>li.option").addClass("wrong-bird");
		$("#bird" + currentBird + ">ul>li.option" + correctBird[currentBird]).removeClass("wrong-bird").addClass("correct-bird");
		$(".initiate").hide();
		currentBird += 1;
	})

	/*--highlight focused option--*/
	

	/*---indicate selected answer---*/
	$(".option-list>ul>li").on("click", function(event){
		var t = $(event.target);
		console.log(t);
		console.log(t.hasClass("correct-bird"));
		console.log(currentBird)
		$(".correct-bird").addClass("correct-bird-confirm");
		$(".wrong-bird").hide();
		$(".top-msg").hide();
		$(".start").addClass("button-move-up");
		$(".initiate").html("CONTINUE").show();

		if (t.hasClass("wrong-bird")) {
			console.log("WRONG");
			$(".answer-wrong").show();
			$(".answer-correct").hide();
			$(".correct-bird").removeClass("correct-bird");

		} else if (t.hasClass("correct-bird")){
			console.log("CORRECT");
			$(".answer-correct").show();
			$(".answer-wrong").hide();
			answeredCorrect += 1;
		};

		if (currentBird > 9) {
			$(".start").html('<button class = "calc-score" type = "button">That concludes this quiz.<p class = "conclusion-confirm">SEE YOUR SCORE!</p></button>');
			calcScoreAndReport();
		};

	});
	

	function calcScoreAndReport() {
			$("button.calc-score").on("click", function() {
			$(".main-img").html("<img class='main-bg' src='img/background/bird-sil.jpg'>");
			$(".bird-img").hide();	
			$(".correct-bird").hide();
			$(".answer-correct").hide();
			$(".answer-wrong").hide();
			$("button.calc-score").hide();	
			console.log(answeredCorrect);
			console.log((answeredCorrect/correctBird.length)*100);
			if (answeredCorrect === 10) {
				$(".top-msg").html("PERFECT SCORE! You must be an avian expert!").show();
				$(".mid-msg").html("You correctly identified " + answeredCorrect + " out of 10 birds!").show();
				$(".btm-msg").html(" Your score is " + (answeredCorrect/correctBird.length)*100 + "%").show();
			} else if (answeredCorrect >= 7) {
				$(".top-msg").html("You know your birds, nice job!").show();
				$(".mid-msg").html("You correctly identified " + answeredCorrect + " out of 10 birds!").show();
				$(".btm-msg").html("Your score is " + (answeredCorrect/correctBird.length)*100 + "%").show();
			} else if (answeredCorrect >= 5) {
				$(".top-msg").html("Not too bad!").show();
				$(".mid-msg").html("You correctly identified " + answeredCorrect + " out of 10 birds.").show();
				$(".btm-msg").html("Your score is " + (answeredCorrect/correctBird.length)*100 + "%").show();
			} else if (answeredCorrect <= 4) {
				$(".top-msg").html("The Audubon Society offers many great books on identifying birds, just saying!").show();
				$(".mid-msg").html("You correctly identified " + answeredCorrect + " out of 10 birds.").show();
				$(".btm-msg").html("Your score is " + (answeredCorrect/correctBird.length)*100 + "%").show();
			}	
			
		})
	}


});



	/*---var birds = [{
		q: "Name that bird!",
		option: ["Cedar Waxwing", "Song Sparrow", "Black Capped Chickadee", "Dark Eyed Junco"],
		qIndex: 0,
		correct: 3,
		response: "Blah blah blah Black Capped Chickadee blah blah."
		}, {
		q: "Name that bird!",
		option: ["Stork", "Great Blue Heron", "Ibis", "Snowy Egret"],
		qIndex: 1,
		correct: 4,
		response: "Blah blah blah Snowy Egret blah blah."			
		}, {
		q: "Name that bird!",
		option: ["Raven", "Brewer"s Black Bird", "Crow", "Starling"],
		qIndex: 2,
		correct: 1,
		response: "Blah blah blah Raven blah blah."				
		}, {
		q: "Name that bird!",
		option: ["Violet Sabrewing Hummingbird", "Anna"s Hummingbird", "Black Chinned Hummingbird", "Costa"s Hummingbird"],
		qIndex: 3,
		correct: 1,
		response: "Blah blah blah Violet Sabrewing Hummingbird blah blah."					
		}, {
		q: "Name that bird!",
		option: ["Adelie Penguin", "Japanese Quail", "Puffin", "Rockhopper Penguin"],
		qIndex: 4,
		correct: 3,
		response: "Blah blah blah Puffin blah blah."					
		}, {
		q: "Name that bird!",
		option: ["Scarlet Tanager", "Purple Finch", "Female Cardinal", "House Finch"],
		qIndex: 5,
		correct: 2,
		response: "Blah blah blah Purple Finch blah blah."			
		}, {
		q: "Name that bird!",
		option: ["Mallard Duck", "Woodduck", "Black East Indie Duck", "Appleyard Duck"],
		qIndex: 6,
		correct: 2,
		response: "Blah blah blah Woodduck blah blah."		
		}, {
		q: "Name that bird!",
		option: ["Blue Jay", "North American Bluebird", "Western Scrub Jay", "Stellar"s Jay"],
		qIndex: 7,
		correct: 4,
		response: "Blah blah blah Stellar"s Jay blah blah."			
		}, {
		q: "Name that bird!",
		option: ["Barn Owl", "Barred Owl", "Eagle Owl", "Northern Hawk Owl"],
		qIndex: 8,
		correct: 3,
		response: "Blah blah blah Eagle Owl blah blah."				
		}, {
		q: "Name that bird!",
		option: ["Raibow Bee Eater", "Gang-gang Cockatoo", "Banded Pitta", "Greater Bird of Paradise"],
		qIndex: 9,
		correct: 4,
		response: "Blah blah blah Greater Bird of Paradise blah blah."			
		}]---*/
