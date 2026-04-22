// File Naming Convention Guide:
// Images should be named using the format: "awards_YYYY_MM_DD_N.png"
// Example: "awards_2025_12_16_1.png" for the first image of an award on Dec 16, 2025.
// This ensures easy chronological sorting and management.

// [FILE NAMING CONVENTION GUIDE]
// Images should be named using the format: "awards_YYYY_MM_DD_N.png"
// Example: "awards_2025_12_16_1.png"
// This ensures consistent ordering and easy management.

const AWARDS_DATA = {
    "2025": [
        {
            org: "한국프리미엄브랜드진흥원",
            title: "2025 자랑스런 한국인 대상",
            location: "청담 리베라 호텔",
            date: "2025년 12월 16일",
            sponsor: "이뉴스투데이, 대한민국 고객만족브랜드협회, 데일리경제, 시사타임",
            imgs: ["../assets/item1_img1.png", "../assets/item1_img2.png", "../assets/item1_img3.png", "../assets/item1_img4.png", "../assets/item2_img1.png", "../assets/item2_img2.png", "../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png"]
        },
        {
            org: "한국프리미엄브랜드진흥원",
            title: "2025 올해를 빛낸 브랜드 대상",
            location: "청담 리베라 호텔",
            date: "2025년 12월 16일",
            sponsor: "이뉴스투데이 / 대한민국 고객만족브랜드협회, 데일리경제, 시사타임",
            imgs: ["../assets/item1_img2.png", "../assets/item1_img3.png", "../assets/item1_img4.png", "../assets/item2_img1.png", "../assets/item2_img2.png", "../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png"]
        },
        {
            org: "시사저널, 시사저널e, 일요신문",
            title: "2025 산업통상자원중소벤처기업위원장 표창장",
            location: "한국프레스센터 국제회의장",
            date: "2025년 11월 26일",
            sponsor: "대한민국 국회상임위원회",
            imgs: ["../assets/item1_img3.png", "../assets/item1_img4.png", "../assets/item2_img1.png", "../assets/item2_img2.png", "../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png"]
        },
        {
            org: "시사저널, 시사저널e, 일요신문",
            title: "2025 K-ESG 경영혁신대상",
            location: "한국프레스센터 국제회의장",
            date: "2025년 11월 26일",
            sponsor: "대한민국 국회상임위원회",
            imgs: ["../assets/item1_img4.png", "../assets/item2_img1.png", "../assets/item2_img2.png", "../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png", "../assets/item4_img1.png"]
        },
        {
            org: "한국프리미엄브랜드진흥원",
            title: "2025 대한민국 프리미엄 브랜드 대상",
            location: "청담 리베라 호텔",
            date: "2025년 9월 23일",
            sponsor: "이뉴스투데이, 대한민국 고객만족브랜드협회, 데일리경제, 시사타임",
            imgs: ["../assets/item2_img1.png", "../assets/item2_img2.png", "../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png", "../assets/item4_img1.png", "../assets/item4_img2.png"]
        },
        {
            org: "조선일보",
            title: "2025 기획재정부 장관상",
            location: "더플라자호텔",
            date: "2025년 7월 16일",
            sponsor: "기획재정부, 교육부, 산업통상자원부, 과학기술정보통신부, 중소벤처기업부, 보건복지부, 고용노동부, 여성가족부, 국회기획재정위원회, 동반성장위원회",
            imgs: ["../assets/item2_img2.png", "../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png", "../assets/item4_img1.png", "../assets/item4_img2.png", "../assets/item4_img3.png"]
        },
        {
            org: "조선일보",
            title: "2025 한국의 최고 경영대상",
            location: "더플라자호텔",
            date: "2025년 7월 16일",
            sponsor: "기획재정부, 교육부, 산업통상자원부, 과학기술정보통신부, 중소벤처기업부, 보건복지부, 고용노동부, 여성가족부, 국회기획재정위원회, 동반성장위원회",
            imgs: ["../assets/item2_img3.png", "../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png", "../assets/item4_img1.png", "../assets/item4_img2.png", "../assets/item4_img3.png", "../assets/item4_img4.png"]
        },
        {
            org: "한국프리미엄브랜드진흥원",
            title: "2025 대한민국 고객만족지수 1위",
            location: "청담 리베라 호텔",
            date: "2025년 6월 17일",
            sponsor: "이뉴스투데이, 대한민국 고객만족브랜드협회, 데일리경제, 시사타임",
            imgs: ["../assets/item2_img4.png", "../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png", "../assets/item4_img1.png", "../assets/item4_img2.png", "../assets/item4_img3.png", "../assets/item4_img4.png", "../assets/item5_img1.png"]
        },
        {
            org: "TV조선",
            title: "2025 K-브랜드 어워즈",
            location: "더플라자호텔",
            date: "2025년 3월 14일",
            sponsor: "기획재정부, 행정안전부, 문화체육관광부, 보건복지부, 환경부, 중소벤처기업부, 한국콘텐츠진흥원",
            imgs: ["../assets/item3_img1.png", "../assets/item3_img2.png", "../assets/item3_img3.png", "../assets/item3_img4.png", "../assets/item4_img1.png", "../assets/item4_img2.png", "../assets/item4_img3.png", "../assets/item4_img4.png", "../assets/item5_img1.png", "../assets/item5_img2.png"]
        }
    ],
    "2024": [{ org: "대한민국 브랜드 협회", title: "대한민국 프리미엄 브랜드 대상", desc: "10년 연속 수상의 기록 (결혼정보 서비스 부문)", date: "2024년 10월 22일", location: "그랜드 하얏트 서울", sponsor: "한국마케팅협회", imgs: ["../assets/item3_img2.png", "../assets/item1_img1.png", "../assets/item1_img2.png"] }],
    "2023": [{ org: "글로벌 비즈니스 연맹", title: "글로벌 럭셔리 브랜드 대상", desc: "세계적인 수준의 프리미엄 매칭 서비스 및 성혼 문화 선도", date: "2023년 11월 15일", location: "신라호텔 다이너스티홀", imgs: ["../assets/item3_img3.png", "../assets/item2_img1.png", "../assets/item2_img2.png"] }],
    "2022": [{ org: "강남구청", title: "지역 사회공헌 우수기업 포상", desc: "나눔 활동 및 저소득 취약계층 지원 공로 인정", date: "2022년 12월 05일", location: "강남구청 대회의실", imgs: ["../assets/item3_img4.png", "../assets/item4_img1.png", "../assets/item4_img2.png"] }],
    "2021": [{ org: "매일경제", title: "미래창조 경영대상", desc: "결혼정보업계 디지털 전환 및 서비스 혁신 성공 사례 선정", date: "2021년 06월 30일", location: "밀레니엄 힐튼 서울", imgs: ["../assets/item4_img1.png", "../assets/item5_img1.png", "../assets/item5_img2.png"] }],
    "2020": [{ org: "한국경제", title: "고객이 신뢰하는 브랜드 대상", desc: "상류층 결혼정보 부문 8년 연속 1위 수상", date: "2020년 09월 14일", imgs: ["../assets/item4_img2.png"] }],
    "2019": [{ org: "동아일보", title: "대한민국 소비자 선호도 1위", desc: "품격 있는 매칭 서비스와 철저한 신원 인증 시스템 구축", date: "2019년 05월 22일", imgs: ["../assets/item5_img3.png"] }],
    "2018": [{ org: "중앙일보", title: "프리미엄 브랜드 지수 1위", desc: "High-End 성혼 서비스 부부 정체성 확립", date: "2018년 07월 11일", imgs: ["../assets/item5_img4.png"] }],
    "2017": [{ org: "대한적십자사", title: "사회봉사 유공장 성실장", desc: "지속적인 기부 및 봉사활동 참여 공로", date: "2017년 11월 09일", imgs: ["../assets/item1_img3.png"] }],
    "2016": [{ org: "한국유엔봉사단", title: "대한민국 세종대왕 나눔봉사 대상", desc: "나눔 문화 확산과 따뜻한 사회 만들기에 기여", date: "2016년 11월 09일", location: "KBS홀", imgs: ["top_awards.png"] }],
    "2015": [{ org: "대한적십자사", title: "대한적십자사 총재 표창", desc: "인도주의 사업 발전에 기여한 공로 포상", date: "2015년 10월 27일", imgs: ["../assets/item3_img1.png"] }],
    "2014": [{ org: "한국고객만족대상", title: "명품브랜드 대상", desc: "대한민국 상류층 결혼정보의 기준 제시", date: "2014년 04월 15일", imgs: ["../assets/item2_img2.png"] }],
    "2013": [{ org: "올해의 히트상품", title: "성혼 전문 컨설팅 부문 대상", date: "2013년 12월 03일", imgs: ["../assets/item3_img4.png"] }],
    "2012": [{ org: "한국일보", title: "신뢰도 1위 브랜드상", date: "2012년 06월 20일", imgs: ["../assets/item4_img3.png"] }],
    "2006": [{ org: "스포츠조선", title: "고객만족 베스트 기업 선정", date: "2006년 08월 30일", imgs: ["../assets/item1_img4.png"] }],
    "2003": [{ org: "일요신문", title: "유망 브랜드상 수상", date: "2003년 03월 15일", imgs: ["../assets/item2_img4.png"] }]
};

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
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

    const yearNav = document.getElementById('yearNav');
    const awardsGrid = document.getElementById('awardsGrid');

    // Explicit year order as requested
    const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2006", "2003"];

    // Initialize Year Navigation
    function initYearNav() {
        years.forEach((year, index) => {
            const btn = document.createElement('button');
            btn.className = `year-btn ${index === 0 ? 'active' : ''}`;
            btn.textContent = year;
            btn.addEventListener('click', (e) => {
                switchYear(year, btn);
                btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            });
            yearNav.appendChild(btn);
        });
    }

    // Render Awards for Selected Year
    function renderAwards(year) {
        const awards = AWARDS_DATA[year] || [];

        // Clear grid with transition effect
        awardsGrid.style.opacity = '0';
        awardsGrid.style.transform = 'translateY(10px)';

        setTimeout(() => {
            awardsGrid.innerHTML = '';

            if (awards.length === 0) {
                awardsGrid.innerHTML = `<div class="no-data">${year}년도 수상 내역 준비 중입니다.</div>`;
            } else {
                awards.forEach(award => {
                    const card = document.createElement('div');
                    card.className = 'award-card gallery-type';

                    const mainImg = award.imgs && award.imgs.length > 0 ? award.imgs[0] : '../vision_main.png';
                    const thumbHtml = (award.imgs || []).map((img, i) => `
                        <div class="thumb ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="changeMainImg(this, '${img}')">
                            <img src="${img}" alt="thumbnail">
                        </div>
                    `).join('');

                    card.innerHTML = `
                        <div class="award-info-content">
                            <div class="award-org">${award.org}</div>
                            <h3 class="award-title">${award.title}</h3>
                            <div class="award-details">
                                ${award.location ? `<p><span>장소:</span> ${award.location}</p>` : ''}
                                ${award.date ? `<p><span>일시:</span> ${award.date}</p>` : ''}
                                ${award.sponsor ? `<p><span>후원:</span> ${award.sponsor}</p>` : ''}
                                ${award.desc ? `<p>${award.desc}</p>` : ''}
                            </div>
                        </div>
                        <div class="award-gallery-area">
                            <div class="main-img-view">
                                <img src="${mainImg}" class="main-display-img" alt="${award.title}">
                            </div>
                            <div class="thumb-grid">
                                ${thumbHtml}
                            </div>
                        </div>
                    `;
                    awardsGrid.appendChild(card);
                });
            }

            // Show new content
            awardsGrid.style.opacity = '1';
            awardsGrid.style.transform = 'translateY(0)';
        }, 400);
    }

    // Global function for gallery interaction
    window.changeMainImg = function (thumbEl, imgSrc) {
        const card = thumbEl.closest('.award-card');
        const mainImg = card.querySelector('.main-display-img');
        const thumbs = card.querySelectorAll('.thumb');

        thumbs.forEach(t => t.classList.remove('active'));
        thumbEl.classList.add('active');

        mainImg.style.opacity = '0.5';
        setTimeout(() => {
            mainImg.src = imgSrc;
            mainImg.style.opacity = '1';
        }, 200);
    };

    // Switch Year Interaction
    function switchYear(year, clickedBtn) {
        // Update Nav UI
        document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');

        // Update Content
        renderAwards(year);

        // Scroll to content top (refined)
        const contentTop = document.querySelector('.awards-section').offsetTop - 150; // Adjust for header height
        window.scrollTo({ top: contentTop, behavior: 'smooth' });
    }

    // Initial State
    initYearNav();
    renderAwards(years[0]); // Default to latest year

    // Reveal Observer for intro section
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => {
        revealObserver.observe(el);
    });


    // Mobile Submenu Accordion
    const mobileSubmenuParents = document.querySelectorAll('.side-nav-links .has-submenu > a');

    mobileSubmenuParents.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent navigation
            const parent = link.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Mobile Menu Interaction
    const mobileMenu = document.querySelector('.mobile-side-menu');
    const openBtn = document.querySelector('.mobile-menu-toggle');
    const closeBtn = document.querySelector('.side-menu-close');
    const overlay = document.querySelector('.side-menu-overlay');

    if (openBtn && mobileMenu) {
        openBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    }

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
});
