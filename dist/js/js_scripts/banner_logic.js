function user_date_formatted() {
    const date = new Date();
    return `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`
}

$(function() {
    $('.buttons-holder-container__button-enter').on('click', function() {
        localStorage.setItem('ugo-authorized', user_date_formatted());
        window.location.href = 'presentation.html'
    });
    $('.buttons-holder-container__button-leave').on('click', function() {
        window.location.href = 'https://minzdrav.gov.ru/documents/5736-federalnyy-zakon-15-fz-ot-23-fevralya-2013-g'
    })
})

function check_redirect() {
    const current_date = new Date();
    const confirm_date = localStorage.getItem('ugo-authorized');
}