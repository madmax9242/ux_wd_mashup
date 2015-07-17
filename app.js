$(document).ready(function() {
	// Listen for floor class div click and change color.
	// If clicked, change this and keep others same color
	$('.floor').on('click', function() {
		$('.floor').css('background-color', 'blue');
		$(this).css('background-color', 'yellow');
	});

	$('.level').on('click', function() {
		$('.level').css('background-color', 'red');
		$(this).css('background-color', 'blue');
	});

	$('#clear').on('click', function() {
		$('.level').css('background-color', 'red');
		$('.floor').css('background-color', 'blue');
	});



	// Listen for level class div click and change color.
	// If clicked, change this and keep others same color

	// listen for save button click

	// listen for clear button click
})