function release_formed_alt(taste_name) { // Releases formatted alt attribute
    const separated_name = taste_name.split(' ')[2];
    const classic = `UGOBAR 1500 ${separated_name}`;
    const separated = `UGO BAR 1500 ${separated_name}`;
    const third = `UGOBAR ${separated_name}`;
    const forth = `UGO BAR ${separated_name}`
    return `${classic} ${separated} ${third} ${forth}`
}


function release_vector() {
    const storage = [
        {'name' : 'UGOBAR 1500 YELLOW', 'photo' : '../assets/images/yellow_web.svg', 'classname' : 'ugo-naming__yellow', 'taste' : 'Освежающее сплетение сладости и кислинки спелого манго, напоминающее тропический рай.'},
        {'name' : 'UGOBAR 1500 GREEN', 'photo' : '../assets/images/green_web.svg', 'classname' : 'ugo-naming__green', 'taste' : 'Неимоверно освежающий и сочный арбуз, придающий ощущение прохлады даже в самый знойный день.'},
        {'name' : 'UGOBAR 1500 BLACK', 'photo' : '../assets/images/black_web.svg', 'classname' : 'ugo-naming__black', 'taste' : 'Искристо-газированная кола с хрустящими кусочками льда, создающая неповторимый опыт удовольствия и освежения.'},
        {'name' : 'UGOBAR 1500 PINK', 'photo' : '../assets/images/pink_web.svg', 'classname' : 'ugo-naming__pink', 'taste' : 'Яркий взрыв ягодного вкуса в лимонаде, омраченный специальной ноткой кислоты лимона, придающей ему особый шарм.'},
        {'name' : 'UGOBAR 1500 BLUE', 'photo' : '../assets/images/blue_web.svg', 'classname' : 'ugo-naming__blue', 'taste' : 'Трогательное сочетание хрустящих голубики и ледяных капель, придающее прохладный и освежающий акцент.'},
        {'name' : 'UGOBAR 1500 RED', 'photo' : '../assets/images/red_web.svg', 'classname' : 'ugo-naming__red', 'taste' : 'Легкое и сочное красное яблоко, напоминающее о летних прогулках в саду и пробуждающее нежные воспоминания.'},
        {'name' : 'UGOBAR 1500 VIOLET', 'photo' : '../assets/images/violet_web.svg', 'classname' : 'ugo-naming__violet', 'taste' : 'Страстное соединение черники и сочной вишни, создающее волшебное звучание вкусов и приносящее неизгладимое удовлетворение.'}
    ];

    let released = [];

    released.push(`<div class="single-product-grid-layout__blacked-out">
                    <div class="single-product-grid-layout__blacked-out__container">
                        <span class="single-product-grid-layout__blacked-out__container__title">
                            Технические характеристики
                        </span>
                        <div class="single-product-grid-layout__blacked-out__container__additional_info_container">
                            <span class="single-product-grid-layout__blacked-out__container__additional_info">
                                До 1500 затяжек
                            </span>
                            <span class="single-product-grid-layout__blacked-out__container__additional_info">
                                Объём жидкости: 3 мл
                            </span>
                            <span class="single-product-grid-layout__blacked-out__container__additional_info">
                                Содержание никотина: 19мг/мл
                            </span>
                            <span class="single-product-grid-layout__blacked-out__container__additional_info">
                                Емкость аккумулятора: 550 мАч
                            </span>
                        </div>
                    </div>
                </div>`);

    storage.forEach(function(object, index) {
        released.push(`<section class="single-product-grid-layout" data-aos="zoom-in-down">
                    <div class="single-product-grid-layout__presentation">
                        <img class="full-size-image" src=${object.photo} alt="${release_formed_alt(object.name)}"/>
                    </div>
                    <div class="single-product-grid-layout__colored-naming">
                        <p class=${object.classname}>
                            ${object.name}
                        </p>
                    </div>
                    <div class="single-product-grid-layout__num-brackets">
                        <span class="decorative-brackets__inactive">
                            (0${index + 1})
                        </span>
                    </div>
                    <section class="single-product-grid-layout__vert-align">
                        <p class="description-row__inactive">${object.taste}</p>
                    </section>
                </section>`);
    });
    return released
}

export default release_vector;