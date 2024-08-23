function ageAuthorizedSetLocal() {
    localStorage.setItem("age-auth", "true")
}

function remove_banner_wrapper() {
    document.querySelector('.age-verification-banner').remove();
    document.querySelector('.blur-wrapper').remove();
}

$(function() {
    if (localStorage.getItem("age-auth") === "true") {
        remove_banner_wrapper();
    }
    else {
        $('#confirm-button').on('click', function() {
            ageAuthorizedSetLocal();
            remove_banner_wrapper();
        });
        $('#decline-button').on('click', function() {
            window.location.href = 'https://google.com'
        })
    }
})