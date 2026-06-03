// script.js - Agro Forte | Todos os botões funcionando

document.addEventListener('DOMContentLoaded', () => {

    // ==================== MOBILE MENU ====================
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // ==================== SMOOTH SCROLL PARA TODOS OS LINKS ====================
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Fecha menu mobile ao clicar em um link
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });

    // ==================== BACK TO TOP BUTTON ====================
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.remove('hidden');
            } else {
                backToTop.classList.add('hidden');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==================== 5 PILARES (com efeito de clique) ====================
    const pilaresContainer = document.getElementById('pilares-container');
    
    if (pilaresContainer) {
        pilaresContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.card-hover');
            if (card) {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }

    // ==================== BOTÕES DE CTA (Call to Action) ====================
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            if (target) {
                document.querySelector(target).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Se não tiver data-target, vai para o topo
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // ==================== ANIMAÇÃO AO ROLAR ====================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // ==================== FECHAR MENU MOBILE AO CLICAR FORA ====================
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        }
    });

    console.log('%c✅ Todos os botões do site Agro Forte estão funcionando!', 
                'color: #4ade80; font-weight: bold; font-size: 14px;');
});

