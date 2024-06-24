

function release_animated_text(index) { // -> String || Text for photo slider
    const animation = "animate__fadeInDown";
    switch (index) {
        case 1:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">Яркие вкусы</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Жидкости разработанные одной из&nbsp;ведущих лабораторий, которая широко известна своей палитрой оригинальных вкусов и представлена в&nbsp;крупнейшей продуктовой сети США&nbsp;&mdash; Seven/Eleven.</span>`
            ]
        case 2:
            return [
            `<span class="card-holder__main-title animate__animated ${animation}">Качество</span>`,
            `<span class="card-holder__comments animate__animated ${animation}">Современное и&nbsp;технологичное производство, расположенное в&nbsp;Шэньчжэне. С&nbsp;полностью автоматизированной сборочной линией.</span>`
            ]
        case 3:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">Легальность</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Полное соответствие ГОСТ, Акциз 2024, Маркировка в&nbsp;системе &laquo;Честный Знак&raquo;, Реализация по&nbsp;ЭДО.</span>`
            ]
        case 4:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">Всегда в срок</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Оперативные и&nbsp;надежные логистические цепочки, которые позволяют обеспечить поставки любого объема.</span>`
            ]
    }
}

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
})