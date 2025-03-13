// JavaScript to rotate the text
const rotatingText = document.querySelector('.rotating-text');
const phrases = [
    "AI & ML Engineering Student",
    "Python & C Programmer",
    "AI Enthusiast",
    "Passionate About Emerging Tech and Innovation"
];

let currentPhrase = 0;

function rotateText() {
    rotatingText.style.opacity = '0';
    setTimeout(() => {
        rotatingText.textContent = phrases[currentPhrase];
        rotatingText.style.opacity = '1';
        currentPhrase = (currentPhrase + 1) % phrases.length;
    }, 500);
}

setInterval(rotateText, 3000);
rotateText();

// Simple Contact Form Validation

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    }
});

// Particle.js Configuration
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: false,
                animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            }
        },
        retina_detect: true
    });
});

// Enhanced Skill Animations
const observeSkills = () => {
    const skillFills = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                fill.style.width = width;
                observer.unobserve(fill);
                
                // Animate the percentage counter
                const card = fill.closest('.skill-card');
                const percentage = card.querySelector('.skill-percentage');
                const targetValue = parseInt(width);
                let currentValue = 0;
                
                const counter = setInterval(() => {
                    if (currentValue >= targetValue) {
                        clearInterval(counter);
                    } else {
                        currentValue += 1;
                        percentage.textContent = `${currentValue}%`;
                    }
                }, 20);
            }
        });
    }, { threshold: 0.5 });

    skillFills.forEach(fill => observer.observe(fill));
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubProjects();
});

document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubProjects();
});

document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubProjects();
});

function fetchGitHubProjects() {
    const username = 'SudoAnirudh'; // Replace with your GitHub username
    const url = `https://api.github.com/users/${username}/repos`;
    const selectedRepos = ['Intrusion-Detection-System-Using-ML', 'Feature-Extraction', 'Image-Enhancement-Toolkit']; // Replace with your selected repository names

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const workGrid = document.querySelector('.work-grid');
            workGrid.innerHTML = ''; // Clear existing content

            const filteredData = data.filter(repo => selectedRepos.includes(repo.name));

            if (filteredData.length === 0) {
                workGrid.innerHTML = '<p>No selected projects found.</p>';
                return;
            }

            filteredData.forEach(repo => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('work-item', 'slide-up');
                projectItem.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available'}</p>
                    <a href="${repo.html_url}" target="_blank">View Project</a>
                `;
                workGrid.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Error fetching GitHub projects:', error));
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    observeSkills();
    fetchGitHubProjects();
});