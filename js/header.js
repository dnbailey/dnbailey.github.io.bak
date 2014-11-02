/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = function() {
    function e() {
        window.addEventListener("scroll", function() {
            o || (o = !0, setTimeout(n, 250))
        }, !1)
    }

    function n() {
        var e = t();
        e >= c ? classie.add(r, "site-header-shrink") : classie.remove(r, "site-header-shrink"), o = !1
    }

    function t() {
        return window.pageYOffset || i.scrollTop
    }
    var i = document.documentElement,
        r = document.querySelector(".site-header"),
        o = !1,
        c = 300;
    e()
}();

/* Show Menu on Large Screens */
$(window).on('load resize', function(){
    if ($("#site-nav").css("float") == "right" ){
        $('#site-nav').show();
    }
});

$(document).ready(function() {    
    /* Toggle the Menu on Small Screens */
    $('#menu-toggle').click(function(){
       $('#site-nav').toggle("slow","swing") 
    });
});
