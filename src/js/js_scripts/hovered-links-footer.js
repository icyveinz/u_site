function link_hover_trackers() { // Activator of animations in footer
    $('.logo-link-holder').on('mouseenter', function() {
        console.log("Hovered link");
        $(this).find('#telegram-icon').css("filter", "brightness(0) saturate(100%) invert(57%) sepia(68%) saturate(688%) hue-rotate(167deg) brightness(92%) contrast(90%)");
        $(this).find('.logo-link-holder__a').css("filter", "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7498%) hue-rotate(38deg) brightness(93%) contrast(110%)");
        $(this).find('.logo-link-holder__a-additional').css("filter", "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7498%) hue-rotate(38deg) brightness(93%) contrast(110%)");
    });
    $('.logo-link-holder').on('mouseleave', function() {
        $(this).find('.logo-link-holder__img').css("filter", "brightness(0) saturate(100%) invert(64%) sepia(7%) saturate(16%) hue-rotate(317deg) brightness(86%) contrast(86%)");
        $(this).find('.logo-link-holder__a').css("filter", "brightness(0) saturate(100%) invert(64%) sepia(7%) saturate(16%) hue-rotate(317deg) brightness(86%) contrast(86%)");
        $(this).find('.logo-link-holder__a-additional').css("filter", "brightness(0) saturate(100%) invert(64%) sepia(7%) saturate(16%) hue-rotate(317deg) brightness(86%) contrast(86%)");
    });
    $('.legal-content-holder-vertical-layout__shadowed-big').on('mouseenter', function() {
        $(this).css("filter", "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7498%) hue-rotate(38deg) brightness(93%) contrast(110%)");
    });
    $('.legal-content-holder-vertical-layout__shadowed-big').on('mouseleave', function() {
        $(this).css("filter", "brightness(0) saturate(100%) invert(64%) sepia(7%) saturate(16%) hue-rotate(317deg) brightness(86%) contrast(86%)");
    });
}

$(function() {
    link_hover_trackers();
})