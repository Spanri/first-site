$(document).ready(function() {

    $("#rioto-car").carousel({
         interval : false
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
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})