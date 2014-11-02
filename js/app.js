
$(document).ready(function(){

	$(".option-list").hide();
	//$(".option").hide();
	$(".answer-correct").hide();
	$(".answer-wrong").hide();



var answeredCorrect = 0;
var currentBird = 0;
var correctBird = [2, 4, 1, 1, 3, 2, 2, 4, 3, 4];
var birdImg = ['black-capped-chickadee.jpg', 'snowy-egret.jpg', 'raven.jpg', 'violet-sabrewing-hummingbird.jpg', 'puffin.jpg', 'purple-finch.jpg', 'wooduck.jpg', 'stellers-jay.jpg', 'eagle-owl.jpg', 'greater-bird-paradise.jpg']

	/*--- initiate first question---*/
	$(".initiate").click(function() {
		$(".main-img").html("<img class='main-bg' src='img/background/clouds.jpg'>");
		$(".top-msg").hide();
		$(".mid-msg").html("<p>Name that bird!</p>");
		$(".btm-msg").hide();
		//$(".bird").html("<img class='birdImg' + currentBird + "' src='img/bird/black-capped-chickadee.jpg'>");
		$(".bird-img").html("<img class = 'bird' " + ">");
		$(".bird").attr("src", "img/bird/" + birdImg[currentBird]);
		$("#bird-options").addClass("option-container");
		console.log(correctBird[currentBird]);
		$("#bird" + currentBird).show();
		$("#bird" + currentBird + ">ul>li.option").addClass("correct-bird");
		//$("#bird0>ul>.option2").addClass("correct-bird");
		//$('#bird' + currentBird + '>ul>li.option' + correctBird[currentBird]).addClass('correct-bird')/*.removeClass('wrong-bird')*/;
		$(".initiate").hide();
		currentBird += 1;
	
	})

	/*--highlight focused option--*/
	$(".option-zero").mouseenter(function() {


	});

	/*---indicate selected answer---*/
	$(".option-list>ul>li").on("click", function(event){
		var t = $(event.target);
		console.log(t);
		console.log(t.hasClass("correct-bird"));
		console.log(currentBird)

		if (t.hasClass("wrong-bird")) {
			console.log("WRONG");
			$(".answer-wrong").show();
			$(".answer-correct").hide();
		} else if (t.hasClass("correct-bird")){
			console.log("correct-bird");
			$(".answer-correct").show();
			$(".answer-wrong").hide();
			$(".wrong-bird").hide();
			$(".initiate").html("CONTINUE").addClass("proceed").show();
			answeredCorrect += 1;
		};
		if (currentBird >9) {
			calcScoreAndReport()
		}

	});
	

	function calcScoreAndReport() {
		console.log(answeredCorrect);
		console.log(answeredCorrect/correctBird.length);


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
