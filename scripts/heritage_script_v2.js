document.addEventListener('DOMContentLoaded', () => {
    // 1. Enhanced Reveal Animation
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal, .v2-metric-item, .v2-timeline-card').forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Horizontal Scroll Logic (Timeline)
    const horizontalWrap = document.querySelector('.v2-horizontal-wrap');
    const horizontalSticky = document.querySelector('.v2-horizontal-sticky');
    const horizontalContent = document.querySelector('.v2-horizontal-content');
    const timelineProgress = document.getElementById('timelineProgress');
    const yearMarkers = document.querySelectorAll('.v2-year-marker');

    const calcHorizontalScroll = () => {
        if (!horizontalWrap || !horizontalContent) return;
        
        const wrapRect = horizontalWrap.getBoundingClientRect();
        
        // Progress within horizontal wrap
        if (wrapRect.top <= 0 && wrapRect.bottom >= window.innerHeight) {
            const totalScroll = horizontalWrap.offsetHeight - window.innerHeight;
            const currentScroll = Math.abs(wrapRect.top);
            const progress = (currentScroll / totalScroll) * 100;
            
            // Translate Content
            const maxTranslate = horizontalContent.scrollWidth - window.innerWidth;
            horizontalContent.style.transform = `translateX(-${(progress / 100) * maxTranslate}px)`;
            
            // Update Timeline Nav Bar Progress
            if (timelineProgress) {
                timelineProgress.style.width = `${progress}%`;
            }
            
            // Update Active Markers
            yearMarkers.forEach(marker => {
                const markerProgress = parseInt(marker.getAttribute('data-progress'));
                if (progress >= markerProgress - 5) { // 5% buffer
                    marker.classList.add('active');
                } else {
                    marker.classList.remove('active');
                }
            });
        }
    };

    window.addEventListener('scroll', calcHorizontalScroll);

    // 3. Side Navigation (Dots) Activation
    const sections = document.querySelectorAll('section[id], .v2-hero');
    const navItems = document.querySelectorAll('.v2-side-nav li');

    const updateActiveNav = () => {
        let currentSectionId = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollPos >= sectionTop - window.innerHeight / 3) {
                currentSectionId = section.getAttribute('id') || "section-1";
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === currentSectionId) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);

    // Side Nav Click to Scroll
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-section');
            const targetPos = document.getElementById(targetId)?.offsetTop || 0;
            
            window.scrollTo({
                top: targetPos,
                behavior: 'smooth'
            });
        });
    });

    // 4. Header Scroll Effect
    const header = document.querySelector('.main-header-nav');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // 5. Mobile Menu Interaction
    const mobileMenu = document.querySelector('.mobile-side-menu');
    const openBtn = document.querySelector('.mobile-menu-toggle');
    const closeBtn = document.querySelector('.side-menu-close');
    const overlay = document.querySelector('.side-menu-overlay');

    if (openBtn && mobileMenu) {
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeMenu = () => {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // 6. Mobile Submenu
    const mobileSubmenuParents = document.querySelectorAll('.side-nav-links .has-submenu > a');
    mobileSubmenuParents.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = link.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Initial check
    updateActiveNav();
    calcHorizontalScroll();
});
