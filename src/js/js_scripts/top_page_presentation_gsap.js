document.addEventListener('DOMContentLoaded', () => {
    hashtagAnimation();
    initSlidesAnimation();
});


// Animation for hashtag text
function hashtagAnimation() {

    const separated_parts = document.querySelectorAll('.picture-text-grid__hashtag-contents__p');

    const timeline = gsap.timeline();

    separated_parts.forEach((single_part, index) => {
        const text_part = SplitType.create(single_part).chars;
        console.log(text_part);
        if (index === 0) {
            text_part.forEach((char_node, index) => {
                if (index === 0) {
                    timeline
                        .from(char_node, {
                            opacity: 0,
                            xPercent: -30,
                            duration: 1
                        })
                }
                else {
                    timeline
                        .from(char_node, {
                            opacity: 0,
                            duration: 0.25,
                            yPercent: -30
                        })
                }
            })
        }
        else {
            text_part.forEach((char_node, index) => {
                if (index === 0) {
                    timeline
                        .from(char_node, {
                            opacity: 0,
                            duration: 1,
                            xPercent: -50
                        })
                }
                else {
                    timeline
                        .from(char_node, {
                            opacity: 0,
                            duration: 0.3,
                            xPercent: -50
                        })
                }
            })
        }
    });
}


// For activating an animation with slides
function initSlidesAnimation() {

    function initTimeline(node) {
        return gsap.timeline({
            scrollTrigger: {
                trigger: node,
                start: 'top bottom-=20%',
                scrub: true,
                end: 'bottom bottom-=20%',
                markers: true
            }
        })
    }

    const presentation_nodes = document.querySelectorAll('.picture-text-grid');
    presentation_nodes.forEach((node, index) => {
        if ((index += 1) % 2 === 0) {
            const odd_timeline = initTimeline(node);
            odd_timeline
                .from(node.querySelector('.picture-text-grid__text-right-oriented__image-container'), {
                    opacity: 0,
                    yPercent: -20
                })
                .from(node.querySelector('.picture-text-grid__text-contents__header'), {
                    opacity: 0,
                    xPercent: 40
                })
                .from(node.querySelectorAll('.picture-text-grid__text-contents__listing__li'), {
                    opacity: 0,
                    yPercent: 40,
                    stagger: 0.3
                })
        } else {
            const even_timeline = initTimeline(node);
            even_timeline
                .from(node.querySelector('.picture-text-grid__text-left-oriented__image-container'), {
                    opacity: 0,
                    yPercent: -20
                })
                .from(node.querySelector('.picture-text-grid__text-contents__header'), {
                    opacity: 0,
                    xPercent: -40
                })
                .from(node.querySelectorAll('.picture-text-grid__text-contents__listing__li'), {
                    opacity: 0,
                    yPercent: 40,
                    stagger: 0.3
                })
        }
    })
}


