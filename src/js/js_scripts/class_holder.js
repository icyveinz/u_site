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
        released.push(`<div class="single-product-grid-layout__blacked-out">
            <div class="single-product-grid-layout__centered-soon-text">
            <span class="coming-soon-text">скоро ↗</span></div></div>`);
        return released
    }
}