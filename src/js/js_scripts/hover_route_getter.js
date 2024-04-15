$(function() {
    const scroll_segment = sessionStorage.getItem("presentation-scroll");
    if (scroll_segment !== null) {
        console.log(scroll_segment);
        document.getElementById(scroll_segment).scrollIntoView({behavior : 'smooth'});
        sessionStorage.setItem("presentation-scroll", null);
    }
})