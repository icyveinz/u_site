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