$(function() {
    $('.submit-request-button').on('click', function() {
        console.log('started submitting process');
        fetch('http://localhost:8000/data/write', {
            method : "POST",
            body : JSON.stringify({
                email : $('#user_email').val(),
                name : $('#user_name').val(),
                about_customer : $('#user_presentation').val()
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((response) => response.json()).then((json) => console.log(json));
    })
})