$(function() {
    $('.enter-button').on('click', function() {
        fetch('http://localhost:8000/admin/login', {
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
            })
    })
})