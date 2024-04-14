$(function() {
    $('.route-to-production').on('click', function() {
        sessionStorage.setItem("presentation-scroll", "production-anchor")
    });
    $('.route-to-principles').on('click', function() {
        sessionStorage.setItem("presentation-scroll", "principles-anchor")
    });
    $('.route-to-contacts').on('click', function() {
        sessionStorage.setItem("presentation-scroll", "contacts-anchor")
    });
})