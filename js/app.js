
$(document).ready(function(){

	$("#bird-zero").hide();
	$("#bird-one").hide();
	$("#bird-two").hide();
	$("#bird-three").hide();
	$("#bird-four").hide();
	$("#bird-five").hide();
	$("#bird-six").hide();
	$("#bird-seven").hide();
	$("#bird-eight").hide();
	$("#bird-nine").hide();


	var birds = [{
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
		option: ["Raven", "Brewer's Black Bird", "Crow", "Starling"],
		qIndex: 2,
		correct: 1,
		response: "Blah blah blah Raven blah blah."				
		}, {
		q: "Name that bird!",
		option: ["Violet Sabrewing Hummingbird", "Anna's Hummingbird", "Black Chinned Hummingbird", "Costa's Hummingbird"],
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
		option: ["Blue Jay", "North American Bluebird", "Western Scrub Jay", "Stellar's Jay"],
		qIndex: 7,
		correct: 4,
		response: "Blah blah blah Stellar's Jay blah blah."			
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
		}]

var answeredCorrect = 0;
var currentBird = 0;

	/*--- initiate first question---*/
	$('.initiate').click(function() {
		$('.main-img').html('<img class="main-bg" src="img/background/clouds.jpg">');
		$('.top-msg').html('<p>'+birds.q+'</p>');
		$('.bird').html('<img class="bird-zero" src="img/bird/black-capped-chickadee.jpg">');
		$('#bird-options').addClass("option-container");
		$("#bird-zero").show();
	})

})