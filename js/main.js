/* ===================================================================
   MAIN.JS — Portfolio Interactions
   Vanilla JS: Scroll reveals, stacked testimonials, mobile nav,
   hero mouse glow, nav scroll behavior, scroll-to-top
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===================== SCROLL REVEAL (Intersection Observer) =====================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '50px 0px -20px 0px'
    });

    // Immediately reveal elements already in viewport, observe the rest
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('revealed');
        } else {
            revealObserver.observe(el);
        }
    });


    // ===================== NAV SCROLL EFFECT =====================
    const nav = document.getElementById('top-nav-fixed');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });


    // ===================== SCROLL TO TOP (improved) =====================
    const scrollBtn = document.getElementById('scroll-btn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, { passive: true });


    // ===================== SMOOTH SCROLL FOR NAV LINKS =====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ===================== MOBILE NAV — RIGHT SLIDE PANEL =====================
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
    const mobileNavOpen = document.getElementById('mobileNavOpen');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavLinks = document.querySelectorAll('[data-mobile-nav]');

    function openMobileNav() {
        if (mobileNav) mobileNav.classList.add('open');
        if (mobileNavBackdrop) mobileNavBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        if (mobileNav) mobileNav.classList.remove('open');
        if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (mobileNavOpen) {
        mobileNavOpen.addEventListener('click', openMobileNav);
    }
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }
    if (mobileNavBackdrop) {
        mobileNavBackdrop.addEventListener('click', closeMobileNav);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });


    // ===================== HERO MOUSE GLOW =====================
    const heroSection = document.querySelector('.hero-section');
    const heroGlow = document.getElementById('heroGlow');

    if (heroSection && heroGlow) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            heroGlow.style.left = (e.clientX - rect.left) + 'px';
            heroGlow.style.top = (e.clientY - rect.top) + 'px';
        });

        heroSection.addEventListener('mouseleave', () => {
            heroGlow.style.opacity = '0';
        });

        heroSection.addEventListener('mouseenter', () => {
            heroGlow.style.opacity = '1';
        });
    }


    // ===================== STACKED TESTIMONIALS =====================
    const testimonialData = [
        {
            text: "Alok is a go-getter person who believes that anything is achievable if you put your best foot forward. This was the attitude that struck me the most about him and helped the team think the same way. He is very good at thinking outside the box and coming up with solutions that may seem impossible but are actually the best ones. He also brings in a positive energy into the team which helps drive things so easy. He is an excellent addition to any team.",
            name: "Pragati Rithekar",
            role: "Direct Manager",
            img: "./img/testimonials/pragati.jpeg",
            linkedin: "https://www.linkedin.com/in/pragati-rithekar/"
        },
        {
            text: "Alok and I started working on StencilJs as a part of Globant's studio offering. We developed many Web Components as a team. Later, we worked together for a client project which had a similar tech stack and he was one of the key members. I found him to be a fast learner and an amazing team player. Alok and the team came a long way and built a viable product. He is also capable of handling and guiding a team. It's been a pleasure working with Alok.",
            name: "Ravindra Naik",
            role: "Worked on the same team",
            img: "./img/testimonials/ravindra.jpeg",
            linkedin: "https://www.linkedin.com/in/ravindra-naik/"
        },
        {
            text: "Professionals are persons that profess their skill to others and vow to perform their craft to the highest known standard. That is the way Alok behaves every day with such a passion for what he does and pushing himself to be always a better software developer and a better person. It is a real pleasure to work with him.",
            name: "Rhaynel Parra Aguiar",
            role: "Direct Manager at Globant",
            img: "./img/testimonials/rhaynel-parra.jpg",
            linkedin: "https://www.linkedin.com/in/rhaynel/"
        },
        {
            text: "Alok left a profound impression merely within a few months of working with him. His knowledge base is solid, attention to detail is excellent, and more than anything his work ethics and attitude are phenomenal. He was working on a very critical PoC right until his second last day — he completed all his assignments diligently and made sure he transitioned knowledge to team members. I am sure he will do wonderfully in life.",
            name: "Pawan Gondane",
            role: "Direct Manager at TCS",
            img: "./img/testimonials/pawan.jpg",
            linkedin: "https://www.linkedin.com/in/pawan-gondane-0678b375/"
        },
        {
            text: "Alok is a great professional, always willing to learn. He is a person you can talk to, always willing to help. He is a fast learner and very talented.",
            name: "Alberto Chamorro",
            role: "Senior to Alok at Globant",
            img: "./img/testimonials/alberto.jpg",
            linkedin: "https://www.linkedin.com/in/alberto-chamorro/"
        },
        {
            text: "Alok is punctual, talented, passionate — but what makes him ideal for any role is hardwork. No matter what it is, he will always give 100% of his potential. He is known to be detail oriented and for quickly grasping working knowledge of anything. If you want anyone who can pursue any responsibility and can perfectly rely on him, choose this person as priority.",
            name: "Mihir Kumar",
            role: "College peer & collaborator",
            img: "./img/testimonials/mihir.jpg",
            linkedin: "https://www.linkedin.com/in/mikr13/"
        },
        {
            text: "I must say that I am not at all surprised by Alok's success. Your keen intelligence and creative problem solving skills have always set you apart from the crowd. It's been a pleasure working with you.",
            name: "Jayshri Patil",
            role: "Worked on the same team",
            img: "./img/testimonials/jayshri-patil.jpg",
            linkedin: "https://www.linkedin.com/in/jayshri-patil/"
        },
        {
            text: "Alok is one of the most passionate JS developers. I have worked with him for more than a year and I can vouch for his skills, his dedication and his capability of finishing a project. He takes ownership and makes sure it is delivered at the right time with all the best industrial practices and standards.",
            name: "Udit Jain",
            role: "Worked together at TCS",
            img: "./img/testimonials/udit.jpg",
            linkedin: "https://www.linkedin.com/in/udit94125/"
        },
        {
            text: "Alok Raj is such a nice person to have around. He is not only a great colleague but also a very good JavaScript developer. He is very creative, hands-on, and organized. He is the guy to go to when you need help with JavaScript or any programming related issue. I learned a lot about leadership from Alok Raj.",
            name: "Vishal Singla",
            role: "Worked together at different company",
            img: "./img/testimonials/vishal.jpg",
            linkedin: "https://www.linkedin.com/in/vishalsingla34/"
        },
        {
            text: "Alok Raj has been a real pleasure to work with. Passionate, great and creative co-worker. Detail oriented, intelligent, deadline oriented and broad-minded. Thanks to interpersonal skills, Alok has great relations with both company clients and potential customers. Is able to work in a fast-paced environment. Highly recommended.",
            name: "Raunak Chatterjee",
            role: "Direct Manager",
            img: "./img/testimonials/raunak.jpg",
            linkedin: "https://www.linkedin.com/in/raunak-chatterjee/"
        },
        {
            text: "I had the pleasure of working with Alok for nearly 2 years at TCS, collaborating on several project teams. He always brings a positive environment and guides the juniors to pick up the pace.",
            name: "Rajeshwari Chapparad",
            role: "Worked on the same team at TCS",
            img: "./img/testimonials/rajeshwari.jpg",
            linkedin: "https://www.linkedin.com/in/rajeshwari-chapparad-a89806201/"
        },
        {
            text: "Alok is that friend and teammate whom anyone wishes to have. You can talk with him on Tech all day. A JavaScript enthusiast — and I really enjoyed working with him on some cool web projects.",
            name: "Sravan Kumar",
            role: "Worked on the same team",
            img: "./img/testimonials/sravan.jpg",
            linkedin: "https://www.linkedin.com/in/sravankumar23/"
        },
        {
            text: "I have worked with Alok in various small projects during our Undergraduate course. Alok is hardworking and someone you can count on as a teammate. He improved throughout his college years — not only academic but also practical knowledge by participating in various coding challenges.",
            name: "Priya Pal",
            role: "College peer",
            img: "./img/testimonials/priya-pal.jpg",
            linkedin: "https://www.linkedin.com/in/priya-p-b80a1294/"
        },
        {
            text: "Alok Raj is a very professional and amazing full stack developer.",
            name: "Avinash Dwivedi",
            role: "Direct Manager",
            img: "./img/testimonials/avinash.jpg",
            linkedin: "https://www.linkedin.com/in/avinash-dwivedi/"
        },
        {
            text: "Alok is a great professional developer. He always comes up with creative solutions to difficult problems. He has excellent communication skills and is willing to help when needed. Anyone would be lucky to have Alok as a colleague.",
            name: "Ayush Singh Kushwaha",
            role: "Worked together at different company",
            img: "./img/testimonials/ayush.jpg",
            linkedin: "https://www.linkedin.com/in/ayushsingh9/"
        }
    ];

    const stackContainer = document.getElementById('testimonialStack');
    const stackCounter = document.getElementById('stackCounter');
    const stackPrev = document.getElementById('stackPrev');
    const stackNext = document.getElementById('stackNext');

    if (stackContainer) {
        let currentIndex = 0;
        const total = testimonialData.length;
        const VISIBLE_CARDS = 4;

        function createCard(data) {
            const card = document.createElement('div');
            card.className = 'testimonial-stack-card';
            card.innerHTML = `
                <div class="testimonial-text">${data.text}</div>
                <div class="testimonial-author">
                    <img src="${data.img}" alt="${data.name}" class="testimonial-avatar" loading="lazy">
                    <div class="testimonial-meta">
                        <h4>${data.name}</h4>
                        <p>${data.role}</p>
                        <a href="${data.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            `;
            return card;
        }

        let isAnimating = false;

        function renderStack(direction) {
            // direction: 'next', 'prev', or undefined (initial)
            const cards = [];

            for (let i = VISIBLE_CARDS - 1; i >= 0; i--) {
                const dataIndex = (currentIndex + i) % total;
                const card = createCard(testimonialData[dataIndex]);

                const offset = i * 18;
                const scale = 1 - (i * 0.04);
                const opacity = i === 0 ? 1 : 0.65 - (i * 0.15);
                const zIndex = VISIBLE_CARDS - i;

                // Start off-screen for animated top card
                if (i === 0 && direction) {
                    const slideFrom = direction === 'next' ? 40 : -40;
                    card.style.transform = `translateX(${slideFrom}px) translateY(0) scale(1)`;
                    card.style.opacity = '0';
                } else {
                    card.style.transform = `translateY(${offset}px) scale(${scale})`;
                    card.style.opacity = opacity;
                }

                card.style.zIndex = zIndex;
                card.style.pointerEvents = i === 0 ? 'auto' : 'none';

                // Accent on stacked cards
                if (i > 0) {
                    card.style.borderColor = 'var(--color-primary)';
                    card.style.borderWidth = '1px';
                    card.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.08)';
                }

                cards.push(card);
            }

            stackContainer.innerHTML = '';
            cards.forEach(c => stackContainer.appendChild(c));

            // Animate top card in
            if (direction) {
                const topCard = cards[cards.length - 1]; // last appended = top card (i=0)
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        topCard.style.transform = 'translateX(0) translateY(0) scale(1)';
                        topCard.style.opacity = '1';
                    });
                });
            }

            stackCounter.textContent = `${currentIndex + 1} / ${total}`;
        }

        function nextCard() {
            if (isAnimating) return;
            isAnimating = true;
            currentIndex = (currentIndex + 1) % total;
            renderStack('next');
            setTimeout(() => { isAnimating = false; }, 500);
        }

        function prevCard() {
            if (isAnimating) return;
            isAnimating = true;
            currentIndex = (currentIndex - 1 + total) % total;
            renderStack('prev');
            setTimeout(() => { isAnimating = false; }, 500);
        }

        stackNext.addEventListener('click', nextCard);
        stackPrev.addEventListener('click', prevCard);

        // Swipe support
        let touchStartX = 0;
        stackContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        stackContainer.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) nextCard();
                else prevCard();
            }
        }, { passive: true });

        // Autoplay
        let autoplay = setInterval(nextCard, 5000);

        const wrapper = stackContainer.closest('.testimonials-stack-wrapper');
        if (wrapper) {
            wrapper.addEventListener('mouseenter', () => clearInterval(autoplay));
            wrapper.addEventListener('mouseleave', () => {
                autoplay = setInterval(nextCard, 5000);
            });
        }

        renderStack();
    }


    // ===================== ACTIVE NAV LINK ON SCROLL =====================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    const homeLink = document.querySelector('.navbar-nav .nav-link[href="#"]');

    function setActiveNav(id) {
        navLinks.forEach(link => {
            link.parentElement.classList.remove('active');
        });
        if (homeLink) homeLink.parentElement.classList.remove('active');

        if (!id) {
            // At top — mark Home active
            if (homeLink) homeLink.parentElement.classList.add('active');
        } else {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.parentElement.classList.add('active');
                }
            });
        }
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                setActiveNav(id);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-72px 0px -50% 0px'
    });

    sections.forEach(section => sectionObserver.observe(section));

    // When scrolled to very top, mark Home active
    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 100) {
            setActiveNav(null);
        }
    }, { passive: true });


    // ===================== SERVICE WORKER =====================
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./serviceWorker.js');
    }

});

// Global scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
