/* Blog article JavaScript */

// Active TOC link highlighting
const tocLinks = document.querySelectorAll('.toc a');
const sections = [];

tocLinks.forEach(link => {
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (section) sections.push({ link, section });
});

function updateTOC() {
    let current = sections[0];
    for (const s of sections) {
        const rect = s.section.getBoundingClientRect();
        if (rect.top <= 120) current = s;
    }
    tocLinks.forEach(l => l.style.color = '');
    if (current) current.link.style.color = '#1a5c3a';
    if (current) current.link.style.fontWeight = '600';
}

window.addEventListener('scroll', updateTOC);
updateTOC();

// Animate chart bars on scroll
const chartSection = document.querySelector('.chart-section');
if (chartSection) {
    const bars = chartSection.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        bar.style.width = '0';
    });

    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach(bar => {
                    const targetWidth = getComputedStyle(bar).width;
                    bar.style.width = '0';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            bar.style.transition = 'width 1s ease';
                            // Restore the width from the CSS class
                            bar.classList.add(bar.classList[1]);
                        });
                    });
                });
            }
        });
    }, { threshold: 0.3 });

    chartObserver.observe(chartSection);
}

// Smooth scroll for TOC links
tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
