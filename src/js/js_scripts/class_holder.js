class CardBuilder {
    constructor() {
        this.storage = [
            {'name' : 'UGOBAR 1500 YELLOW', 'photo' : '../assets/images/yellow_web.svg', 'classname' : 'ugo-naming__yellow', 'taste' : 'Спелое манго'},
            {'name' : 'UGOBAR 1500 GREEN', 'photo' : '../assets/images/green_web.svg', 'classname' : 'ugo-naming__green', 'taste' : 'Прохладный арбуз'},
            {'name' : 'UGOBAR 1500 BLACK', 'photo' : '../assets/images/black_web.svg', 'classname' : 'ugo-naming__black', 'taste' : 'Кола со льдом'},
            {'name' : 'UGOBAR 1500 PINK', 'photo' : '../assets/images/pink_web.svg', 'classname' : 'ugo-naming__pink', 'taste' : 'Ягодный лимонад'},
            {'name' : 'UGOBAR 1500 BLUE', 'photo' : '../assets/images/blue_web.svg', 'classname' : 'ugo-naming__blue', 'taste' : 'Голубика со льдом'},
            {'name' : 'UGOBAR 1500 RED', 'photo' : '../assets/images/red_web.svg', 'classname' : 'ugo-naming__red', 'taste' : 'Красное яблоко'},
            {'name' : 'UGOBAR 1500 VIOLET', 'photo' : '../assets/images/violet_web.svg', 'classname' : 'ugo-naming__violet', 'taste' : 'Черника с вишней'}
        ];
    }

    release_vector() {
        function release_formed_alt(taste_name) { // Releases formatted alt attribute
            const separated_name = taste_name.split(' ')[2];
            const classic = `UGOBAR 1500 ${separated_name}`;
            const separated = `UGO BAR 1500 ${separated_name}`;
            const third = `UGOBAR ${separated_name}`;
            const forth = `UGO BAR ${separated_name}`
            return `${classic} ${separated} ${third} ${forth}`
        }


        let released = [];


        this.storage.forEach(function(object, index) {
            released.push(`<div class="single-product-grid-layout" data-aos="zoom-in-down">
            <div class="single-product-grid-layout__presentation">
                <img class="full-size-image" src=${object.photo} alt="${release_formed_alt(object.name)}"/>
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
                <span class="description-row__inactive">Содержание никотина: 19мг/мл</span>
                <span class="description-row__inactive">Емкость аккумулятора: 550 мАч</span>
            </div>
        </div>`);
        });
        released.push(`<div class="single-product-grid-layout__blacked-out">
            <div class="single-product-grid-layout__centered-soon-text">
            <span class="coming-soon-text">скоро⤴</span></div></div>`);
        return released
    }
}