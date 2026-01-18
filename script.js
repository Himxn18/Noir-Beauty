// Load icons
lucide.createIcons();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        scrollTrigger: {
            trigger: el,
            start: "top 90%"
        }
    });
});
