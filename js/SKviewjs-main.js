$(document).ready(function (){
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });

    // $(".gnbAll").hide();

    // $(".gnb").hover( function() {
    //     $(".gnbAll").slideDown(300);
    // });


});