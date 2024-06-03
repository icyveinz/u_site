// Function for setting the age of user as confirmed to visit other pages
function ageAuthorizedSetLocal() {
    localStorage.setItem("age-auth", "true")
}

// Script for visuals at the entry page.
$(function() {
    if (localStorage.getItem("age-auth") === "true") {
        window.location.replace("presentation")
    }
    else {
        $('.buttons-holder-container__button-enter').on('click', function () {
            ageAuthorizedSetLocal();
            window.location.href = 'presentation'
        });
        $('.buttons-holder-container__button-leave').on('click', function () {
            window.location.href = 'https://google.com'
        });
        $('.buttons-holder-flex__button-enter').on('click', function () {
            ageAuthorizedSetLocal();
            window.location.href = 'presentation'
        });
        $('.buttons-holder-flex__button-leave').on('click', function () {
            window.location.href = 'https://google.com'
        });
    }
})
