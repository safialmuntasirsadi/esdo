/* Navbar scroll effect */
const navbar = document.getElementById('navbar');
if (navbar) {
    function handleScroll() {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

/* Mobile navigation toggle */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

/* Scroll reveal */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.dest-card, .pillar-card, .blog-card, .stat-card, .exp-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* ---- Blog Post: Scroll Reveal for Content Blocks ---- */
const blogObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll(
    '.post-pillars, .post-comparison, .post-steps, .post-image, ' +
    '.post-image-grid, .callout-box, .post-quote, .post-list, ' +
    '.stats-grid, .feature-grid, .data-bar-section'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    blogObserver.observe(el);
});

/* ---- Blog Post: Data Bar Animation ---- */
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.dataset.width;
            if (targetWidth) {
                bar.style.width = '0';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        bar.style.width = targetWidth + '%';
                    });
                });
            }
            barObserver.unobserve(bar);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.data-bar-fill[data-animate]').forEach(bar => {
    barObserver.observe(bar);
});

/* ---- Blog Post: Reading Progress Bar ---- */
const progressBar = document.querySelector('.reading-progress__fill');
if (progressBar) {
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight > 0) {
            const progress = (window.scrollY / scrollHeight) * 100;
            progressBar.style.width = Math.min(progress, 100) + '%';
        }
    });
}
