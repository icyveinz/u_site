$(function() {
    $('.box-burger-mobile-container__button').on('click', function() {
        if (document.querySelectorAll('.button-holder-href-container').length > 0) {
            document.querySelectorAll('.button-holder-href-container').forEach(function (object) {
                object.classList.add('animate__fadeOutUp');
                function handle_removing(event) {
                    event.stopPropagation();
                    object.remove();
                }
                object.addEventListener('animationend', handle_removing, {once : true});
            })
        }
        else {
            return_button_objects().forEach(function (object) {
                $('.mobile-menu-grid-container').append(object);
            });
        }
    });
})

function return_button_objects() {
    return [
        `<div class="button-holder-href-container animate__animated animate__backInLeft">
                    <a class="button-holder-href-container__a" href="#production-anchor">
                        Продукция
                    </a>
                </div>`,
        `<div class="button-holder-href-container animate__animated animate__backInLeft">
                    <a class="button-holder-href-container__a" href="#principles-anchor">
                        Принципы
                    </a>
                </div>`,
        `<div class="button-holder-href-container animate__animated animate__backInLeft">
                    <a class="button-holder-href-container__a" href="#contacts-anchor">
                        Контакты
                    </a>
                </div>`
    ]
}
