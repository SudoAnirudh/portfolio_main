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
