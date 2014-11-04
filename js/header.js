/* Shrink Menu on Scroll */
$(window).on("scroll touchmove", function () {
    $('.site-header').toggleClass('site-header-shrink', $(document).scrollTop() > 200);
});

/* Toggle the Menu on Small Screens */
$(document).ready(function() {    
    $('#menu-toggle').click(function(){
       $('#site-nav').toggle("slow","swing") 
    });
});

$(function () {
    $('a[rel="lightbox"]').fluidbox({
        viewportFill: 0.85
    });
})
