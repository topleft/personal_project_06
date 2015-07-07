

$(document).ready( function() {
	// $('.box').on('mouseenter', function () {
	// 	$(this).closest('html').find('header', 'nav').addClass('headerShrink');

	// });
	// $('.box').on('mouseleave', function () {
	// 	$(this).closest('html').find('header').removeClass('headerShrink');
	// });
	
	$('.photo').on('click', function () {
		$(this).next().find('aside').toggle();
		$(this).hide();
		
		
	});

	$('.showText').on('click', function () { 
		$(this).closest('.box').find('.photo').show();
		$(this).toggle();
	});

	$(function () {
		var url = window.location.href;

		$('nav a').each(function() {
			if (url == (this.href)) {
				$(this).closest('li').addClass('selected');
			};

		});
	});

	
});	