class CardBuilder {
    constructor() {
        this.storage = [
            {'name' : 'UGOBAR 1500 YELLOW', 'photo' : 'assets/images/ugo_yellow%20copy.svg', 'classname' : 'ugo-naming__yellow', 'taste' : 'Спелое манго'},
            {'name' : 'UGOBAR 1500 GREEN', 'photo' : 'assets/images/ugo_green%20copy.svg', 'classname' : 'ugo-naming__green', 'taste' : 'Прохладный арбуз'},
            {'name' : 'UGOBAR 1500 BLACK', 'photo' : 'assets/images/ugo_black%20copy.svg', 'classname' : 'ugo-naming__black', 'taste' : 'Кола со льдом'},
            {'name' : 'UGOBAR 1500 PINK', 'photo' : 'assets/images/ugo_pink%20copy.svg', 'classname' : 'ugo-naming__pink', 'taste' : 'Ягодный лимонад'},
            {'name' : 'UGOBAR 1500 BLUE', 'photo' : 'assets/images/ugo_blue%20copy.svg', 'classname' : 'ugo-naming__blue', 'taste' : 'Голубика со льдом'},
            {'name' : 'UGOBAR 1500 RED', 'photo' : 'assets/images/ugo_red%20copy.svg', 'classname' : 'ugo-naming__red', 'taste' : 'Красное яблоко'},
            {'name' : 'UGOBAR 1500 VIOLET', 'photo' : 'assets/images/ugo_purple%20copy.svg', 'classname' : 'ugo-naming__violet', 'taste' : 'Черника с вишней'}
        ];
    }

    release_vector() {
        let released = [];
        this.storage.forEach(function(object, index) {
            released.push(`<div class="single-product-grid-layout">
            <div class="single-product-grid-layout__presentation">
                <img class="full-size-image" src=${object.photo} alt=""/>
            </div>
            <div class="single-product-grid-layout__colored-naming">
                <span class=${object.classname}>
                    ${object.name}
                </span>
            </div>
            <div class="single-product-grid-layout__num-brackets">
                <span class="decorative-brackets__inactive">
                    (0${index + 1})
                </span>
            </div>
            <div class="single-product-grid-layout__vert-align">
                <span class="description-row__inactive">Аромат: ${object.taste}</span>
                <span class="description-row__inactive">До 1500 затяжек</span>
                <span class="description-row__inactive">Объём жидкости: 3 мл</span>
                <span class="description-row__inactive">Содержание никотина: 19мг/см<sup>3</sup></span>
                <span class="description-row__inactive">Емкость аккумулятора: 550 мАч</span>
            </div>
        </div>`);
        });
        return released
    }
}

function release_animated_text(index) {
    const animation = "animate__fadeInRight"
    switch (index) {
        case 1:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">качество</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Полностью автоматизированная линия производства</span>`
            ]
        case 2:
            return [
                `<span class="card-holder__main-title animate__animated ${animation}">статус</span>`,
                `<span class="card-holder__comments animate__animated ${animation}">Вкусы разработаны и созданы в лабораториях по индивидуальному заказу.</span>`
            ]
    }
}

function track_hovers() {
    $('.products-grid-layout').on('mouseenter', '.single-product-grid-layout', function() {
        console.log('hover');
    });

    $('.products-grid-layout').on('mouseleave', '.single-product-grid-layout', function() {
        console.log('unhovered');
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
        }
    })
}

$(function() {
    place_items();
    track_slides();
})