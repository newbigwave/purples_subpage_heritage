const PARTY_GALLERY_DATA = {
    // 2026 (Mock/Future)
    "2026": [
        { title: "Chapter 01: Private Wine Party", desc: "고품격 와인 소생회 & 네트워킹", img: "https://purples-renewal-01.vercel.app/images/party/party_2026_01.jpg" },
        { title: "Chapter 02: Summer Gala Night", desc: "시그니엘 서울 그랜드 볼룸", img: "https://purples-renewal-01.vercel.app/images/party/party_2026_02.jpg" },
        { title: "Chapter 03: Black Members Soirée", desc: "블랙 멤버스 전용 시크릿 소아레", img: "https://purples-renewal-01.vercel.app/images/party/party_2026_03.jpg" },
        { title: "Chapter 04: Elite Golf & Social", desc: "상류층 프라이빗 골프 라운딩", img: "https://purples-renewal-01.vercel.app/images/party/party_2026_04.jpg" },
        { title: "Chapter 05: Private Network Hub", desc: "0.1% 명문가들의 사교 허브", img: "https://purples-renewal-01.vercel.app/images/party/party_2026_05.jpg" },
        { title: "Chapter 06: Grand Ballroom Party", desc: "24년 전통의 정통 노블레스 파티", img: "https://purples-renewal-01.vercel.app/images/party/party_2026_06.jpg" }
    ],
    // 2025
    "2025년 연말파티": [
        { title: "2025 Grand Year-End", desc: "Grand Hyatt Seoul", img: "../assets/item2_img1.png" },
        { title: "Luxury Gala Night", desc: "Shilla Hotel", img: "../assets/item2_img2.png" },
        { title: "Elite Social Hub", desc: "Banyan Tree", img: "../assets/item4_img3.png" }
    ],
    "2025년 부산파티": [
        { title: "2025 Busan Marine Party", desc: "Signiel Busan", img: "../assets/past_party_1.png" },
        { title: "Ocean View Networking", desc: "Park Hyatt Busan", img: "../assets/past_party_2.png" }
    ],
    // 2024
    "2024년 연말파티": [
        { title: "2024 Winter Soirée", desc: "Josun Palace", img: "../assets/item3_img3.png" },
        { title: "Elite Gathering", desc: "Four Seasons", img: "../assets/item3_img4.png" }
    ],
    // 2023
    "2023년 연말파티": [
        { title: "2023 Christmas Gala", desc: "Shilla Dynasty Hall", img: "../assets/item4_img1.png" },
        { title: "Festive Night", desc: "Walkerhill Aston House", img: "../assets/item4_img2.png" }
    ],
    "2023년 법조인 파티": [
        { title: "2023 Legal Professionals Night", desc: "Private Lounge", img: "../assets/item1_img3.png" },
        { title: "Networking for Experts", desc: "Cheongdam Club", img: "../assets/item1_img4.png" }
    ],
    "2023년 부산파티": [
        { title: "2023 Busan Riviera", desc: "Paradise Hotel Busan", img: "../assets/past_party_3.png" },
        { title: "Coastal Elite Social", desc: "Hilton Busan", img: "../assets/past_party_4.png" }
    ],
    // 2022
    "2022년 연말파티": [
        { title: "2022 Classic Gala", desc: "Signiel Seoul", img: "../assets/item6_img1.png" }
    ],
    "2022년 부산파티": [
        { title: "2022 Busan Yacht Party", desc: "Marine City", img: "../assets/past_party_5.png" }
    ],
    // 2021~2013 (Generic placeholders for historical data)
    "2021년 부산파티": [{ title: "2021 Historical Archive", desc: "Premium Archive Image", img: "../assets/past_party_1.png" }],
    "2020년 부산파티": [{ title: "2020 Historical Archive", desc: "Premium Archive Image", img: "../assets/past_party_2.png" }],
    "2019년 연말파티": [{ title: "2019 Historical Archive", desc: "Premium Archive Image", img: "../assets/item1_img1.png" }],
    "2019년 부산파티": [{ title: "2019 Historical Archive", desc: "Premium Archive Image", img: "../assets/past_party_3.png" }],
    "2018년 연말파티": [{ title: "2018 Historical Archive", desc: "Premium Archive Image", img: "../assets/item1_img2.png" }],
    "2017년 연말파티": [{ title: "2017 Historical Archive", desc: "Premium Archive Image", img: "../assets/item2_img1.png" }],
    "2016년 연말파티": [{ title: "2016 Historical Archive", desc: "Premium Archive Image", img: "../assets/item2_img2.png" }],
    "2016년 OPREA 파티": [{ title: "2016 Opera Night", desc: "Arts Center Lounge", img: "../assets/past_party_4.png" }],
    "2015년 연말파티": [{ title: "2015 Historical Archive", desc: "Premium Archive Image", img: "../assets/item3_img1.png" }],
    "2014년 연말파티": [{ title: "2014 Historical Archive", desc: "Premium Archive Image", img: "../assets/item3_img2.png" }],
    "2013년 연말파티": [{ title: "2013 Historical Archive", desc: "Premium Archive Image", img: "../assets/item4_img1.png" }]
};

// Explicit Year Order
const GALLERY_YEARS = [
    "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"
];

// Group categorization logic
const YEAR_GROUPS = {
    "2026": ["2026"],
    "2025": ["2025년 연말파티", "2025년 부산파티"],
    "2024": ["2024년 연말파티"],
    "2023": ["2023년 연말파티", "2023년 법조인 파티", "2023년 부산파티"],
    "2022": ["2022년 연말파티", "2022년 부산파티"],
    "2021": ["2021년 부산파티"],
    "2020": ["2020년 부산파티"],
    "2019": ["2019년 연말파티", "2019년 부산파티"],
    "2018": ["2018년 연말파티"],
    "2017": ["2017년 연말파티"],
    "2016": ["2016년 연말파티", "2016년 OPREA 파티"],
    "2015": ["2015년 연말파티"],
    "2014": ["2014년 연말파티"],
    "2013": ["2013년 연말파티"]
};

document.addEventListener('DOMContentLoaded', () => {
    setupScrollEffects();
    setupHeroSection();
    setupGallerySection();
    setupMarqueeSection();
    setupMobileMenu();
    setupAnimations();
    setupPartyForm();
});

function setupPartyForm() {
    const birthYearSelect = document.getElementById('birthYear');
    if (birthYearSelect) {
        const currentYear = new Date().getFullYear();
        for (let year = currentYear - 20; year >= currentYear - 70; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = `${year}년`;
            birthYearSelect.appendChild(option);
        }
    }

    const partyForm = document.querySelector('.party-invite-form');
    if (partyForm) {
        partyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('파티 체험 신청이 접수되었습니다. 담당 매니저가 곧 연락드리겠습니다.');
            partyForm.reset();
        });
    }

    const verifyBtn = document.querySelector('.btn-verify');
    if (verifyBtn) {
        verifyBtn.addEventListener('click', () => {
            alert('인증번호가 발송되었습니다. (내부 테스트용)');
        });
    }
}

// --- Feature Implementations ---

function setupScrollEffects() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const header = document.querySelector('.main-header-nav');

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        if (scrollProgress) scrollProgress.style.width = `${progress}%`;

        if (header) {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupHeroSection() {
    const heroThumbsContainer = document.querySelector('.video-thumbnails');
    const heroThumbs = document.querySelectorAll('.video-thumbnails .thumb');
    const mainVideoImg = document.querySelector('#mainVideo img');

    heroThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            heroThumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');

            const newSrc = thumb.querySelector('img').src;
            mainVideoImg.style.opacity = '0';
            setTimeout(() => {
                mainVideoImg.src = newSrc;
                mainVideoImg.style.opacity = '1';
            }, 300);
        });
    });

    if (heroThumbsContainer) enableDragScroll(heroThumbsContainer);

    let autoScrollInterval;
    const startAutoScroll = () => {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
            heroThumbsContainer.scrollLeft += 1;
            if (heroThumbsContainer.scrollLeft >= (heroThumbsContainer.scrollWidth - heroThumbsContainer.clientWidth - 1)) {
                heroThumbsContainer.scrollLeft = 0;
            }
        }, 30);
    };

    const stopAutoScroll = () => clearInterval(autoScrollInterval);

    startAutoScroll();
    heroThumbsContainer.addEventListener('mouseenter', stopAutoScroll);
    heroThumbsContainer.addEventListener('touchstart', stopAutoScroll);
    heroThumbsContainer.addEventListener('mouseleave', startAutoScroll);
    heroThumbsContainer.addEventListener('touchend', startAutoScroll);
}

function setupGallerySection() {
    const tabsWrapper = document.querySelector('.gallery-tabs-wrapper');
    const container = document.querySelector('.gallery-grid-container');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (!tabsWrapper || !container) return;

    let currentCategory = '';
    let currentPage = 1;

    // 1. Setup Main Tabs Structure
    tabsWrapper.innerHTML = `
        <div class="tabs-control-row">
            <button class="nav-arrow prev-tab" aria-label="Previous Tabs">&#10094;</button>
            <div class="gallery-tabs draggable-scroll" id="galleryTabs"></div>
            <button class="nav-arrow next-tab" aria-label="Next Tabs">&#10095;</button>
        </div>
        <div class="sub-tabs-container" id="subTabsContainer"></div>
    `;

    const tabsContainer = document.getElementById('galleryTabs');
    const subTabsContainer = document.getElementById('subTabsContainer');
    const prevTabBtn = tabsWrapper.querySelector('.prev-tab');
    const nextTabBtn = tabsWrapper.querySelector('.next-tab');

    // Render Year Tabs
    GALLERY_YEARS.forEach((year, index) => {
        const btn = document.createElement('button');
        btn.className = `gallery-tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = year;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Center the clicked tab in view
            const offsetLeft = btn.offsetLeft - (tabsContainer.clientWidth / 2) + (btn.clientWidth / 2);
            tabsContainer.scrollTo({ left: offsetLeft, behavior: 'smooth' });
            
            renderSubTabs(year);
        });
        tabsContainer.appendChild(btn);
    });

    function toggleTabArrows() {
        const scrollLeft = tabsContainer.scrollLeft;
        const maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;
        
        if (prevTabBtn) prevTabBtn.style.opacity = scrollLeft > 5 ? '1' : '0.3';
        if (nextTabBtn) nextTabBtn.style.opacity = scrollLeft < maxScroll - 5 ? '1' : '0.3';
        if (prevTabBtn) prevTabBtn.style.pointerEvents = scrollLeft > 5 ? 'auto' : 'none';
        if (nextTabBtn) nextTabBtn.style.pointerEvents = scrollLeft < maxScroll - 5 ? 'auto' : 'none';
    }

    tabsContainer.addEventListener('scroll', toggleTabArrows);
    window.addEventListener('resize', toggleTabArrows);
    setTimeout(toggleTabArrows, 100);

    // Sub-tab Rendering
    function renderSubTabs(year) {
        const subCats = YEAR_GROUPS[year] || [];
        subTabsContainer.innerHTML = '';
        
        if (subCats.length <= 1) {
            subTabsContainer.style.visibility = 'hidden';
            subTabsContainer.style.pointerEvents = 'none';
            currentPage = 1;
            renderGalleryMain(subCats[0] || year, 1);
            return;
        }

        subTabsContainer.style.visibility = 'visible';
        subTabsContainer.style.pointerEvents = 'auto';
        subCats.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = `sub-tab-btn ${index === 0 ? 'active' : ''}`;
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentPage = 1;
                renderGalleryMain(cat, 1);
            });
            subTabsContainer.appendChild(btn);
        });

        currentPage = 1;
        renderGalleryMain(subCats[0], 1);
    }

    // Tab Scroll Logic (One-by-one Precision)
    if (prevTabBtn) {
        prevTabBtn.addEventListener('click', () => {
            const btns = Array.from(tabsContainer.querySelectorAll('.gallery-tab-btn'));
            const scrollLeft = Math.ceil(tabsContainer.scrollLeft);
            const padding = 100; // Updated to match CSS padding
            
            // Find the closest button that is clearly to the left of the current scroll viewport
            const target = btns.reverse().find(btn => btn.offsetLeft < (scrollLeft + padding - 10));
            
            if (target) {
                tabsContainer.scrollTo({ left: target.offsetLeft - padding, behavior: 'smooth' });
            } else {
                tabsContainer.scrollTo({ left: 0, behavior: 'smooth' });
            }
        });
    }

    if (nextTabBtn) {
        nextTabBtn.addEventListener('click', () => {
            const btns = Array.from(tabsContainer.querySelectorAll('.gallery-tab-btn'));
            const scrollLeft = Math.floor(tabsContainer.scrollLeft);
            const padding = 100; // Updated to match CSS padding

            // Find the first button that starts after our current "leftmost" visible item
            const target = btns.find(btn => btn.offsetLeft > (scrollLeft + padding + 10));
            
            if (target) {
                tabsContainer.scrollTo({ left: target.offsetLeft - padding, behavior: 'smooth' });
            }
        });
    }
    enableDragScroll(tabsContainer);

    // Initial Render
    renderSubTabs(GALLERY_YEARS[0]);

    function renderGalleryMain(category, page = 1) {
        currentCategory = category;
        currentPage = page;

        let items = PARTY_GALLERY_DATA[category] || [];
        if (items.length === 0) {
            container.innerHTML = '<p class="no-data">갤러리 준비 중입니다.</p>';
            return;
        }

        // Ensure at least enough items for pagination testing (duplicate if needed for demonstration)
        let totalDisplayItems = [...items];
        while (totalDisplayItems.length < 18 && totalDisplayItems.length > 0) {
            totalDisplayItems = totalDisplayItems.concat(items);
        }
        totalDisplayItems = totalDisplayItems.slice(0, 18); // Cap at 18 (2 pages of 9)

        const itemsPerPage = 9;
        const totalPages = Math.ceil(totalDisplayItems.length / itemsPerPage);
        const startIndex = (page - 1) * itemsPerPage;
        const pageItems = totalDisplayItems.slice(startIndex, startIndex + itemsPerPage);

        // Render Grid
        container.innerHTML = `
            <div class="gallery-grid-wrapper">
                <div class="gallery-grid fade-in visible">
                    ${pageItems.map(item => `
                        <div class="gallery-card" onclick="openLightbox('${item.img}', '${item.title}')">
                            <img src="${item.img}" alt="${item.title}" loading="lazy">
                            <div class="gallery-card-overlay"></div>
                        </div>
                    `).join('')}
                </div>
                ${totalPages > 1 ? `
                    <div class="gallery-pagination">
                        ${Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => `
                            <button class="page-btn ${pageNum === page ? 'active' : ''}" onclick="goToGalleryPage(${pageNum})">${pageNum}</button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Explicit Global for pagination
    window.goToGalleryPage = function(page) {
        renderGalleryMain(currentCategory, page);
        // Optional: Scroll to gallery top
        const gallerySection = document.querySelector('.party-gallery');
        if (gallerySection) gallerySection.scrollIntoView({ behavior: 'smooth' });
    };

    // Lightbox Functions
    const lb = document.getElementById('galleryLightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbCaption = document.getElementById('lightboxCaption');
    const lbClose = document.querySelector('.lightbox-close');

    window.openLightbox = function(src, title) {
        if (!lb) return;
        lbImg.src = src;
        lbCaption.textContent = title;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeGalleryLightbox = function() {
        if (!lb) return;
        lb.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (lbClose) lbClose.addEventListener('click', window.closeGalleryLightbox);
    if (lb) lb.addEventListener('click', (e) => {
        if (e.target === lb) window.closeGalleryLightbox();
    });

    // Close on Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lb.classList.contains('active')) {
            window.closeGalleryLightbox();
        }
    });
}

function setupMarqueeSection() {
    const track = document.querySelector('.marquee-track');
    const wrapper = document.querySelector('.marquee-wrapper');

    if (wrapper && track) {
        track.style.animation = 'none';
        track.style.width = 'max-content';
        wrapper.style.overflowX = 'auto';
        wrapper.classList.add('draggable-scroll');
        wrapper.classList.add('hide-scrollbar');
        wrapper.style.scrollbarWidth = 'none';

        enableDragScroll(wrapper);

        let marqueeInterval;
        const startMarquee = () => {
            clearInterval(marqueeInterval);
            marqueeInterval = setInterval(() => {
                wrapper.scrollLeft += 1;
                if (wrapper.scrollLeft >= (wrapper.scrollWidth - wrapper.clientWidth)) {
                    wrapper.scrollLeft = 0;
                }
            }, 30);
        };
        const stopMarquee = () => clearInterval(marqueeInterval);

        startMarquee();
        wrapper.addEventListener('mouseenter', stopMarquee);
        wrapper.addEventListener('touchstart', stopMarquee);
        wrapper.addEventListener('mouseleave', startMarquee);
        wrapper.addEventListener('touchend', startMarquee);
    }
}

function enableDragScroll(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

function setupMobileMenu() {
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

    const mobileSubmenuParents = document.querySelectorAll('.side-nav-links .has-submenu > a');
    mobileSubmenuParents.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.parentElement.classList.toggle('active');
        });
    });
}

function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
