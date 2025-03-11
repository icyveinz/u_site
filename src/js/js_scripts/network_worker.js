$(function() {
    $('.submit-request-button').on('click', function() {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        fetch('https://trustedapi.space/orders_client/create/ugo/', {
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
                    const reply = json.is_succeed;
                    const message = json.message
                    display_notification(reply, message, $(this));})
            .then(
                async () => {
                    await delay(5000);
                })
            .then(
                () => {
                    if (clear_or_not()) {
                        delete_appeared_notification();
                        $('#user_email').val('');
                        $('#user_name').val('');
                        $('#user_presentation').val('');
                    }
                    else {
                        delete_appeared_notification();
                    }
            })
            .catch(
                function(err) {
                    console.log(err);
                })
    })
})

function clear_or_not() { // -> Bool || Decides if input fields should be cleared or not
    if ($('.notification_vertical_content__main').text().trim() === "Успешно!") {
        return true
    }
    return false
}

function display_notification(reply, message, main_actor) { // Display an animated pop-up with notification.
    const pushable_object = format_the_object(reply, message);
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
        <img class="notification_vertical_content__img" src="../assets/icons/check-circle-solid.svg" alt="">
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
        <img class="notification_vertical_content__img" src="../assets/icons/circle-xmark-solid.svg" alt="">
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
