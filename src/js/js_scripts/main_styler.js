import release_vector from "./class_holder.js";

function ugo_black_exclusion(source_value) { // -> bool || If image is ugo_black -> no converting
    if (source_value === '../assets/images/black_web.svg') {
        return true
    }
    return false
}

function track_hovers() {
    $('.products-grid-layout').on('mouseenter', '.single-product-grid-layout', function() {
        $(this).css("background-color", "black");
        if (ugo_black_exclusion($(this).find('.full-size-image').attr('src'))) {
            $(this).find('.ugo-naming__black').css('color', 'white')
        }
        $(this).find('.decorative-brackets__inactive').css('color', 'white');
        $(this).find('.single-product-grid-layout__vert-align').children().css('color', 'white');
    });

    $('.products-grid-layout').on('mouseleave', '.single-product-grid-layout', function() {
        $(this).css("background-color", "white");
        if (ugo_black_exclusion($(this).find('.full-size-image').attr('src'))) {
            $(this).find('.ugo-naming__black').css('color', 'black')
        }
        $(this).find('.decorative-brackets__inactive').css('color', 'black');
        $(this).find('.single-product-grid-layout__vert-align').children().css('color', 'black');
    });
}

function place_items() { // Place items in the grid.
    release_vector().forEach(function(object) {
        $('.products-grid-layout').append(object)
    });
}

$(function() {
    place_items();
    track_hovers();
})