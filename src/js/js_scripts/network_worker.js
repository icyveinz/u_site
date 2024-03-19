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
        })
            .then((response) => response.json())
            .then((json) => {
                console.log('test');
                console.log(json.is_succeed, json.message);
                const reply = json.is_succeed;
                const message = json.message
                display_hide_notification(reply, message, $(this));
        }).catch(function(err) {
            console.log(err);
        })
        //$(this).parent().parent().find('.left-green-reach-me-field-grid__flex-vert-overlay').css('display', 'flex');
    })
})

function display_hide_notification(reply, message, main_actor) {
    const pushable_object = format_the_object(reply, message);
    console.log(pushable_object);
    main_actor.parent().parent().append(pushable_object);
}

function format_the_object(reply, message) {
    switch (reply) {
        case true:
            return `<div class="left-green-reach-me-field-grid__flex-vert-overlay animate__animated animate__bounce">
                <div class="notification_vertical_content">
                    <h4 class="notification_vertical_content__main">
                        Успешно!
                    </h4>
                    <h5 class="notification_vertical_content__additional">
                        ${message}
                    </h5>
                </div>
            </div>`
        case false:
            return `<div class="left-green-reach-me-field-grid__flex-vert-overlay animate__animated animate__bounce">
                <div class="notification_vertical_content">
                    <h4 class="notification_vertical_content__main">
                        Ошибка!
                    </h4>
                    <h5 class="notification_vertical_content__additional">
                        ${message}
                    </h5>
                </div>
            </div>`

    }
}


// <div class="left-green-reach-me-field-grid__flex-vert-overlay">
//                 <div class="notification_vertical_content">
//                     <h4 class="notification_vertical_content__main">
//                         Успешно!
//                     </h4>
//                     <h5 class="notification_vertical_content__additional">
//                         Ваш запрос получен и будет обработан!
//                     </h5>
//                 </div>
//             </div>