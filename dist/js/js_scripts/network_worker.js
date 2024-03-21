$(function() {
    $('.submit-request-button').on('click', function() {
        const delay = ms => new Promise(res => setTimeout(res, ms));
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
            .then(
                (response) => response.json())
            .then(
                (json) => {
                    console.log('test');
                    console.log(json.is_succeed, json.message);
                    const reply = json.is_succeed;
                    const message = json.message
                    display_notification(reply, message, $(this));})
            .then(
                async () => {
                    await delay(5000);
                    console.log('Awaited for 5 seconds.');})
            .then(
                () => {
                    delete_appeared_notification()
            })
            .catch(
                function(err) {
                    console.log(err);
                })
    })
})

function display_notification(reply, message, main_actor) {
    const pushable_object = format_the_object(reply, message);
    console.log(pushable_object);
    main_actor.parent().parent().append(pushable_object);
}

function delete_appeared_notification() { // Remove an appeared notification after 5 seconds.
    const target = document.querySelector('.left-green-reach-me-field-grid__flex-vert-overlay');
    target.classList.add('animate__fadeOutDown');
    function handleAnimationEnd(event) {
        event.stopPropagation();
        target.remove();
    }
    target.addEventListener('animationend', handleAnimationEnd, {once : true});
}

function format_the_object(reply, message) { // return the appendable object depending on request condition
    switch (reply) {
        case true:
            return `<div class="left-green-reach-me-field-grid__flex-vert-overlay animate__animated animate__fadeInLeftBig">
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
            return `<div class="left-green-reach-me-field-grid__flex-vert-overlay animate__animated animate__fadeInLeftBig">
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