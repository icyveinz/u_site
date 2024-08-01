gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.user-agreement-text__header', {
        opacity: 0,
        yPercent: -15,
        duration: 1
    });
    const segment_trigger = document.querySelectorAll('.user-agreement-additional-layout');
    segment_trigger.forEach((segment) => {
        const single_timeline = gsap.timeline({
            scrollTrigger: {
                trigger: segment,
                start: 'top bottom',
                scrub: true,
                markers: true,
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        });
        single_timeline
            .from(segment.querySelector('.user-agreement-text__paragraph'), {
                opacity: 0,
                xPercent: -10,
                duration: 2,
                stagger: 0.1
            })
            .from(segment.querySelector('.user-agreement-text__information'), {
                opacity: 0,
                xPercent: -10,
                duration: 1,
                stagger: 0.2
            });
    })
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

// Previous version
// const refactored = gsap.timeline();
// refactored
//     .from('.user-agreement-text__header', {
//         opacity: 0,
//         yPercent: -15,
//         duration: 1
//     })
//     .from('.user-agreement-text__paragraph', {
//         opacity: 0,
//         xPercent: -10,
//         duration: 2,
//         stagger: 0.1
//     })
//     .from('.user-agreement-text__information', {
//         opacity: 0,
//         xPercent: -10,
//         duration: 1,
//         stagger: 0.2
//     });