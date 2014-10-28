
$(document).ready(function(){

	var birds = [{
		q: "Name that bird!",
		options: ["Cedar Waxwing", "Song Sparrow", "Black Capped Chickadee", "Dark Eyed Junco"],
		qIndex: 0,
		correct: 3,
		response: "Blah blah blah Black Capped Chickadee blah blah."
		}, {
		q: "Name that bird!",
		options: ["Stork", "Great Blue Heron", "Ibis", "Snowy Egret"],
		qIndex: 1,
		correct: 4,
		response: "Blah blah blah Snowy Egret blah blah."			
		}, {
		q: "Name that bird!",
		options: ["Raven", "Brewer's Black Bird", "Crow", "Starling"],
		qIndex: 2,
		correct: 1,
		response: "Blah blah blah Raven blah blah."				
		}, {
		q: "Name that bird!",
		options: ["Violet Sabrewing Hummingbird", "Anna's Hummingbird", "Black Chinned Hummingbird", "Costa's Hummingbird"],
		qIndex: 3,
		correct: 1,
		response: "Blah blah blah Violet Sabrewing Hummingbird blah blah."					
		}, {
		q: "Name that bird!",
		options: ["Adelie Penguin", "Japanese Quail", "Puffin", "Rockhopper Penguin"],
		qIndex: 4,
		correct: 1,
		response: "Blah blah blah Puffin blah blah."					
	}, {
		q: "Name that bird!",
		options: ["Scarlet Tanager", "Purple Finch", "Female Cardinal", "House Finch"],
		qIndex: 5,
		correct: 2,
		response: "Blah blah blah Purple Finch blah blah."			
	}]

	/*--- initiate first question---*/
	$('.initiate').click(function() {
		$('.main-img').html('<img class="main-bg" src="img/background/clouds.jpg">');
		$('.bird').html('<img class="bird-zero" src="img/bird/black-capped-chickadee.jpg">');
	})

})