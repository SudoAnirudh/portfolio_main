document.addEventListener('DOMContentLoaded', () => {
    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Hide header on scroll down
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });

    // Light/Dark Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const setTheme = (mode) => {
        if (mode === 'light') {
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'light' ? 'light' : 'dark');
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        setTheme(isLight ? 'light' : 'dark');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Typing animation for hero tagline
    const taglineText = 'AI/ML Enthusiast | Python Developer | Problem Solver';
    const typedTagline = document.getElementById('typedTagline');
    if (typedTagline) {
        let i = 0;
        function typeWriter() {
            if (i <= taglineText.length) {
                typedTagline.textContent = taglineText.substring(0, i);
                i++;
                setTimeout(typeWriter, 60);
            }
        }
        typeWriter();
    }

    // Contact Form AJAX Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formStatus.textContent = 'Sending...';
            formStatus.className = 'form-status';
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                if (data.toLowerCase().includes('success')) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                } else {
                    formStatus.textContent = data;
                    formStatus.className = 'form-status error';
                }
            })
            .catch(() => {
                formStatus.textContent = 'An error occurred. Please try again later.';
                formStatus.className = 'form-status error';
            });
        });
    }
}); 