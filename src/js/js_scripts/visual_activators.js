$(function() {
    AOS.init(); // activates AOS for smooth scroll appearance
    // new WOW().init(); // activates wow for tracking when on screen
    // $(window).scroll(function(){ // activate arrow for quick scroll to the top
    //     if ($(this).scrollTop() > 600) {
    //         $('.pageup-navigation').fadeIn();
    //     }
    //     else {
    //         $('.pageup-navigation').fadeOut();
    //     }
    // }); // Disabled, activate if needed.

    $("a[href^='#']").click(function() { // For a smooth scroll to the top of the page.
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop : $(_href).offset().top+"px"});
        return false
    });
})
