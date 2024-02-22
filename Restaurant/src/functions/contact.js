// src/functions/contact.js
function createContactContent() {
    const contact = document.createElement('div');
    contact.classList.add('contact-content');
    contact.innerHTML = `
        <h2>Contact Us</h2>
        <p>If you have any questions, please don't hesitate to reach out to us!</p>
        <ul>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@starfood.com</li>
            <li>Address: 123 Spaceway Rd., Galaxy City, Universe</li>
        </ul>
        <form id="contact-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    `;
    // Add any additional contact-related elements or event listeners here...
    return contact;
}

export default createContactContent;
