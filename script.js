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
    rotatingText.textContent = phrases[currentPhrase];
    currentPhrase = (currentPhrase + 1) % phrases.length; // Loop through the phrases
}

setInterval(rotateText, 3000); // Change text every 3 seconds

// Initial call to set the first phrase
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
document.addEventListener('DOMContentLoaded', function () {
    const skills = [
        { element: document.querySelector('.python'), width: '90%' },
        { element: document.querySelector('.c-programming'), width: '80%' },
        { element: document.querySelector('.machine-learning'), width: '70%' },
        { element: document.querySelector('.ai-enthusiasm'), width: '85%' }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target;
                const skillWidth = skillFill.getAttribute('data-width');
                skillFill.style.width = skillWidth; // Set the width to the specific value
                skillFill.classList.add('active'); // Add active class for animation
                observer.unobserve(skillFill); // Stop observing once the animation runs
            }
        });
    });

    skills.forEach(skill => {
        skill.element.setAttribute('data-width', skill.width); // Set the data-width attribute
        observer.observe(skill.element); // Observe each skill fill
    });
});