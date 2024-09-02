// GSAP animations for the hero section and featured games
document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
    gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 1 });
    gsap.from('.cta-button', { opacity: 0, y: 50, duration: 1, delay: 1.5 });
    gsap.from('.game', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2,
        stagger: 0.2
    });
});
