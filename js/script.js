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
    //toggle Answers

    $("#question1").click(function() {
        $("#answer1").fadeToggle(2000);
        $("#question1 i").toggleClass("flip");
    });
    $("#question2").click(function() {
        $("#answer2").fadeToggle(2000);
        $("#question2 i").toggleClass("flip");
    });
    $("#question3").click(function() {
        $("#answer3").fadeToggle(2000);
        $("#question3 i").toggleClass("flip");
    });






});