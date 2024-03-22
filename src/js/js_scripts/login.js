$(function() {
    $('.enter-button').on('click', function() {
        fetch('https://trustedapi.space/data/write', {
            method : "POST",
            body : JSON.stringify({
                "login" : $('#user_name').val(),
                "password" : $('#user_password').val()
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log(json.reply, json.token);
                if (json.reply === "Failed to login! Check your login & password") {
                    // Do some action. display notification.
                }
                else {
                    // redirect to page where orders could be accessed.
                }
            })
    })
})