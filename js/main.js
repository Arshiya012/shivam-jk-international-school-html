/* ==============================================
Fixed menu
=============================================== */

$(window).on('scroll', function () {
	if ($(window).scrollTop() > 50) {
		$('header').addClass('fixed-menu');
	} else {
		$('header').removeClass('fixed-menu');
	}
});



/* ==============================================
Scroll to top  
============================================== */

if ($('#scroll-to-top').length) {
var scrollTrigger = 100, // px
backToTop = function () {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > scrollTrigger) {
		$('#scroll-to-top').addClass('show');
	} else {
		$('#scroll-to-top').removeClass('show');
	}
};
backToTop();
$(window).on('scroll', function () {
backToTop();
});
$('#scroll-to-top').on('click', function (e) {
e.preventDefault();
$('html,body').animate({
	scrollTop: 0
}, 700);
});
}



$(document).ready(function(){
    var owl = $('.gallery-slider, .gallery-slider2').owlCarousel({
        loop: true,
        margin: 24,
        nav: false, // disable default nav
        items: 5,  // show five items at a time
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
		dots: false,
				responsive: {
					991: {
						items: 5,
					},
					575: {
						items: 3,
					},
					0: {
						items: 2,
					},
				},
				
    });

    // Custom Navigation
    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});



// Animated Toggle Button for Mobile
$(document).ready(function () {
	$(".navbar-toggler").on("click", function () {
	  $(this).toggleClass("opened");
			});
});


// Banner Slider (pogoSlider)
$(document).ready(function () {	

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 4000,
		displayProgess: true,
		preserveTargetSize: true,		
		responsive: true,	
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: true,
		generateNav: true,
		generateButtons: true
	}

});
