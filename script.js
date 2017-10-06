$(document).ready(function(){
	'use strict';
	$(".btn-slide").click(function(){
		$('#panel').slideToggle('slow');
		$(this).toggleClass('active');
	});
});