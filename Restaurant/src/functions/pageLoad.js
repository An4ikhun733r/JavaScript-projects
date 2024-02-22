function loadContent() {
    const content = document.getElementById("content")
    content.classList.add('tab-content');
    
    const heading = document.createElement("h2")
    heading.textContent = 'Welcome to Star Food'

    const paragraph = document.createElement("p")
    paragraph.textContent = 'The best food from all galaxies. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi in, neque, dignissimos perspiciatis illo deserunt.'

    content.appendChild(heading)
    content.appendChild(paragraph)
}

export default loadContent