function opposite_photo_src(photo_case, source) {
    switch (photo_case) {
        case "reversed":
            const reversed_name = source.split('/')[2].split('.svg')[0] + '%202.webp';
            const reversed_url = 'assets/images/' + reversed_name;
            console.log(reversed_url);
            return reversed_url
        case "original":
            const original_name = source.split('/')[2].split('%202')[0];
            const original_url = 'assets/images/' + original_name + '.webp';
            console.log(original_url);
            return original_url
    }
}

function release_animated_text(index) { // -> String || Text for photo slider
    const animation = "animate__fadeInDown";
    switch (index) {
        case 1:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">Яркие вкусы</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Жидкости, разработанные одной из&nbsp;ведущих лабораторий, которая широко известна своей палитрой оригинальных вкусов, представленной в&nbsp;крупнейшей продуктовой сети США&nbsp;&mdash; Seven/Eleven.</span>`
            ]
        case 2:
            return [
            `<span class="card-holder__main-title animate__animated ${animation}">Надежность и качество</span>`,
            `<span class="card-holder__comments animate__animated ${animation}">Современное и&nbsp;технологичное производство, расположенное в&nbsp;Шэньчжэне, Китай, с&nbsp;полностью автоматизированной сборочной линией.</span>`
            ]
        case 3:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">100% Легально</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Полное соответствие ГОСТ, Акциз 2024, Маркировка в&nbsp;системе &laquo;Честный Знак&raquo;, Реализация только по&nbsp;ЭДО.</span>`
            ]
        case 4:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">Всегда в срок</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Оперативные и&nbsp;надежные логистические цепочки, позволяющие обеспечить бесперебойные поставки любого объема.</span>`
            ]
    }
}

function link_hover_trackers() { // Activator of animations for information in footer
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

function ugo_black_exclusion(source_value) { // -> bool || If image is ugo_black -> no converting
    if (source_value === 'assets/images/ugo_black%20copy.webp' || source_value === 'assets/images/ugo_black%20copy%202.webp') {
        return true
    }
    return false
}

function track_hovers() {
    $('.products-grid-layout').on('mouseenter', '.single-product-grid-layout', function() {
        console.log('hover');
        $(this).css("background-color", "black");
        // const to_replace = opposite_photo_src("reversed", $(this).find('.full-size-image').attr('src'));
        // $(this).find('.full-size-image').attr('src', to_replace);
        if (ugo_black_exclusion($(this).find('.full-size-image').attr('src'))) {
            $(this).find('.ugo-naming__black').css('color', 'white')
        }
        $(this).find('.decorative-brackets__inactive').css('color', 'white');
        $(this).find('.single-product-grid-layout__vert-align').children().css('color', 'white');
    });

    $('.products-grid-layout').on('mouseleave', '.single-product-grid-layout', function() {
        console.log('unhover');
        $(this).css("background-color", "white");
        // const to_replace = opposite_photo_src("original", $(this).find('.full-size-image').attr('src'))
        // $(this).find('.full-size-image').attr('src', to_replace);
        if (ugo_black_exclusion($(this).find('.full-size-image').attr('src'))) {
            $(this).find('.ugo-naming__black').css('color', 'black')
        }
        $(this).find('.decorative-brackets__inactive').css('color', 'black');
        $(this).find('.single-product-grid-layout__vert-align').children().css('color', 'black');
    });
}

function place_items() { // Place items in the grid.
    const collected = new CardBuilder();
    collected.release_vector().forEach(function(object) {
        $('.products-grid-layout').append(object)
    });
}

function track_slides() { // Track slides in the carousel
    $('#carouselExample').on('slide.bs.carousel', function on_slide(ev) {
        switch (ev.relatedTarget.id) {
            case "1":
                $('.principles-grid-layout__text-holder').empty();
                release_animated_text(1).forEach(function(object) {
                    $('.principles-grid-layout__text-holder').append(object)
                });
                break;
            case "2":
                $('.principles-grid-layout__text-holder').empty();
                release_animated_text(2).forEach(function(object) {
                    $('.principles-grid-layout__text-holder').append(object)
                })
                break;
            case "3":
                $('.principles-grid-layout__text-holder').empty();
                release_animated_text(3).forEach(function(object) {
                    $('.principles-grid-layout__text-holder').append(object)
                })
                break;
            case "4":
                $('.principles-grid-layout__text-holder').empty();
                release_animated_text(4).forEach(function(object) {
                    $('.principles-grid-layout__text-holder').append(object)
                })
                break;
        }
    })
}

$(function() {
    place_items();
    track_slides();
    track_hovers();
    link_hover_trackers();
})