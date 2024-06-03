// Function for setting the age of user as confirmed to visit other pages
function ageAuthorizedSetLocal() {
    localStorage.setItem("age-auth", "true")
}

// Script for visuals at the entry page.
$(function() {
    $('.buttons-holder-container__button-enter').on('click', function() {
        ageAuthorizedSetLocal();
        window.location.href = 'presentation'
    });
    $('.buttons-holder-container__button-leave').on('click', function() {
        window.location.href = 'https://minzdrav.gov.ru/documents/5736-federalnyy-zakon-15-fz-ot-23-fevralya-2013-g'
    });
    $('.buttons-holder-flex__button-enter').on('click', function() {
        ageAuthorizedSetLocal();
        window.location.href = 'presentation'
    });
    $('.buttons-holder-flex__button-leave').on('click', function() {
        window.location.href = 'https://minzdrav.gov.ru/documents/5736-federalnyy-zakon-15-fz-ot-23-fevralya-2013-g'
    })
})
