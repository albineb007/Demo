document.addEventListener('DOMContentLoaded', function() {

    // --- Parallax party confetti ---
    function createConfetti() {
        const partyBg = document.getElementById('party-bg');
        if (!partyBg) return;
        for (let i = 0; i < 30; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.animationDelay = (Math.random() * 2) + 's';
            conf.style.background = `hsl(${Math.random() * 360}, 90%, 70%)`;
            partyBg.appendChild(conf);
        }
    }
    createConfetti();

    // --- Mouse move parallax for hero image ---
    const hero = document.querySelector('.hero');
    const parallaxImg = document.querySelector('.parallax-img');
    if (hero && parallaxImg) {
        hero.addEventListener('mousemove', e => {
            if (window.innerWidth > 768) { // Only on desktop
                const x = (e.clientX / window.innerWidth - 0.5) * 30;
                const y = (e.clientY / window.innerHeight - 0.5) * 30;
                parallaxImg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
            }
        });
    }

    // --- Image Slider functionality ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (slides.length > 0 && prevBtn && nextBtn) {
        let current = 0;
        let slideInterval;

        const showSlide = (index) => {
            // The modulo operator handles wrapping around the slides array
            current = (index + slides.length) % slides.length;
            slides.forEach(slide => slide.classList.remove('active'));
            slides[current].classList.add('active');
        };

        const next = () => showSlide(current + 1);
        const prev = () => showSlide(current - 1);

        const startAutoplay = () => {
            clearInterval(slideInterval); // Clear previous interval
            slideInterval = setInterval(next, 4000);
        };

        nextBtn.addEventListener('click', () => {
            next();
            startAutoplay(); // Reset interval on manual control
        });

        prevBtn.addEventListener('click', () => {
            prev();
            startAutoplay(); // Reset interval on manual control
        });

        // Initialize slider
        showSlide(0);
        startAutoplay();
    }

    // --- Hamburger menu toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});
