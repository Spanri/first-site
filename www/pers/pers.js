$(document).ready(function() {

    $("#rioto-car").carousel({
         interval : false
    });
    $(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
});

$("#header_rioto").click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
            duration: 500,
            easing: "swing"
        });
    return false;
});