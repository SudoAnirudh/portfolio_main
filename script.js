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
        { element: document.querySelector('.java'), width: '50%' },
        { element: document.querySelector('.tech-enthusiasm'), width: '95%' }
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