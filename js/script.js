$(document).ready(function() {

    /*change the header height*/
    $(".background").height($(window).height());
    //change nav bar backgroud when scrolling
    $(this).scroll(function() {
        var top = $(".intro").offset().top;
        if ($(this).scrollTop() >= top) {
            console.log("mm");
            $("nav").addClass("nav-bg");
        } else {
            console.log('vv');
            $("nav").removeClass("nav-bg");
        }




    });



});