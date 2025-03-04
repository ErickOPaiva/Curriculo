document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreContent = document.getElementById('more-content');

    

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            if (mobileMenuBtn.querySelector('i').classList.contains('fa-bars')) {
                mobileMenuBtn.querySelector('i').classList.remove('fa-bars');
                mobileMenuBtn.querySelector('i').classList.add('fa-times');
            } else {
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    }

    if (readMoreBtn && moreContent) {
        readMoreBtn.addEventListener('click', function() {
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block'; // Mostra o conteúdo
                readMoreBtn.textContent = 'Ler Menos'; // Altera o texto do botão
            } else {
                moreContent.style.display = 'none'; // Esconde o conteúdo
                readMoreBtn.textContent = 'Ler Mais'; // Altera o texto do botão
            }
        });
    }
});

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const animatedElements = document.querySelectorAll('.animated');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                if (element.classList.contains('fadeInLeft')) {
                    element.style.opacity = '1';
                } else if (element.classList.contains('fadeInRight')) {
                    element.style.opacity = '1';
                } else {
                    element.classList.add('fadeIn');
                }
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 255, 102, 0.1)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    const typingElement = document.querySelector('.hero-text h2 span');
    const originalText = typingElement.textContent;
    typingElement.textContent = '';

    function typeText() {
        let i = 0;
        const typing = setInterval(function() {
            if (i < originalText.length) {
                typingElement.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }

    setTimeout(typeText, 1500);

    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
