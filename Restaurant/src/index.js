import loadContent from './functions/pageLoad.js'
import loadMenuContent from './functions/menu.js';
import loadContactContent from './functions/contact.js';

const contentDiv = document.getElementById('content');

document.querySelectorAll('nav ul li a').forEach(tab => {
    tab.addEventListener('click', switchTab);
});

function switchTab(event) {
    // Prevent page from refreshing on nav item click
    event.preventDefault();

    // Clear current content
    contentDiv.innerHTML = '';

    // Get the clicked tab's data attribute and call the appropriate function
    const tabChoice = event.target.id;
    switch (tabChoice) {
        case 'home':
            contentDiv.appendChild(loadContent());
            break;
        case 'menu':
            contentDiv.appendChild(loadMenuContent());
            break;
        case 'contact':
            contentDiv.appendChild(loadContactContent());
            break;
    }
}

// Load the home tab content initially
window.onload = () => {
    contentDiv.appendChild(loadContent());
};
