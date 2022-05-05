gsap.registerPlugin(ScrollTrigger);


gsap.to('.header-gallery', {
    scrollTrigger: {
        trigger: '.header',
        start: 'top top',
        scrub: 2,
        end: "bottom center",
    },
    y: 55, duration: 1
})

gsap.to('.works-carousel__image', {
    scrollTrigger: {
        trigger: '.works',
        start: 'top top',
        scrub: 2,
        pin: '.works',
        end: "bottom top",

    },
    x: '-1900', duration: 3, stagger: 0.45
})

document.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollHeight, scrollY, document.documentElement.clientHeight);
})
