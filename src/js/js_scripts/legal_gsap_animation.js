gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const legal_line = gsap.timeline();
    legal_line
        .from('.user-agreement-text__header', {
            opacity: 0,
            yPercent: -15,
            duration: 1
        })
        .from('.user-agreement-text__paragraph', {
            opacity: 0,
            xPercent: -10,
            duration: 2,
            stagger: 0.1
        })
        .from('.user-agreement-text__information', {
            opacity: 0,
            xPercent: -10,
            duration: 1,
            stagger: 0.2
        });
});

// Another type of animation
// gsap.from('.user-agreement-text__header', {
//     opacity: 0,
//     yPercent: -15,
//     duration: 1
// });
// const listing = document.querySelectorAll('.user-agreement-additional-layout');
// listing.forEach((value) => {
//     const timeline = gsap.timeline();
//     timeline
//         .from(value.querySelector('h4'), {
//             opacity: 0,
//             xPercent: -10,
//             duration: 2
//         })
//         .from(value.querySelector('h5'), {
//             opacity: 0,
//             xPercent: -10,
//             duration: 1
//         });
// });