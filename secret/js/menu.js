$(function () {
	
	var nav = $('.nav-container');
	var content = $('.content-wrap');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 140) {
			nav.addClass("fixed-nav");
			content.addClass("topmargin");

		} else {
			nav.removeClass("fixed-nav");
			content.removeClass("topmargin");
		}
	});

});