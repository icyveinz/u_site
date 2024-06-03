$(function() {
    if (localStorage.getItem("age-auth") !== "true") {
        window.location.replace("/")
    }
})
