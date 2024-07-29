// loadComponents.js
function loadComponent(url, selector) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (selector === 'header') {
                setActiveNavLink();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar_links');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header.html', 'header');
    loadComponent('footer.html', 'footer');
});
