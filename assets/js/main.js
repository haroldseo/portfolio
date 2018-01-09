/*
	Epilogue by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Smooth scrolling using jQuery.
			$(document).ready(function(){
				$('a[href^="#"]').on('click', function(e) {
					e.preventDefault();

					var target = this.hash;
					var $target = $(target);

					$('html, body').animate({
						scrollTop: $target.offset().top
					}, 900, 'easeInOutExpo');
				})
			})

		// // Modals
		// 	// Get the modal
		// 	var modal1 = document.getElementById('modal1');

		// 	// Get the button that opens the modal
		// 	var modalBtn1 = document.getElementsByClassName("modalBtn1");

		// 	// Get the <span> element that closes the modal
		// 	var span = document.getElementsByClassName("close")[0];

		// 	// When the user clicks on the button, open the modal 
		// 	for(i = 0; i < modalBtn1.length; i++) {
		// 		modalBtn1[i].onclick = function() {
		// 			modal1.style.display = "block";
		// 		}
		// 	}
		// 	for(i = 0; i < modalBtn2.length; i++) {
		// 		modalBtn2[i].onclick = function() {
		// 			modal2.style.display = "block";
		// 		}
		// 	}

		// 	// When the user clicks on <span> (x), close the modal
		// 	span.onclick = function() {
		// 		modal1.style.display = "none";
		// 		modal2.style.display = "none";
		// 	}

		// 	// When the user clicks anywhere outside of the modal, close it
		// 	window.onclick = function(event) {
		// 		if (event.target == modal1) {
		// 			modal1.style.display = "none";
		// 		}
		// 	}

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Items.
			$('.item').each(function() {

				var $this = $(this),
					$header = $this.find('header'),
					$a = $header.find('a'),
					$img = $header.find('img');

				// Set background.
					$a.css('background-image', 'url(' + $img.attr('src') + ')');

				// Remove original image.
					$img.remove();

			});

	});

})(jQuery);

