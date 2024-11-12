export default function contactPage() {
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const fragment = document.createDocumentFragment();

    const contactSection = document.createElement("section");
    contactSection.id = "contact";

    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    contactSection.appendChild(contactTitle);

    const contactInfo = document.createElement("div");
    contactInfo.className = "contact-info";

    const contactText = document.createElement("p");
    contactText.textContent = "We would love to hear from you! Feel free to reach out using any of the methods below.";
    contactInfo.appendChild(contactText);

    const contactDetails = document.createElement("div");
    contactDetails.className = "contact-details";

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> 1234 Foodie Lane, Gourmet City, CA 90210";
    contactDetails.appendChild(address);

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> (555) 123-4567";
    contactDetails.appendChild(phone);

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> contact@restaurantedelicioso.com";
    contactDetails.appendChild(email);

    contactInfo.appendChild(contactDetails);
    contactSection.appendChild(contactInfo);

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Send Us a Message";
    contactSection.appendChild(formTitle);

    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";

    const nameGroup = document.createElement("div");
    nameGroup.className = "form-group";
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name";
    nameGroup.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.required = true;
    nameGroup.appendChild(nameInput);
    contactForm.appendChild(nameGroup);

    const emailGroup = document.createElement("div");
    emailGroup.className = "form-group";
    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.textContent = "Email";
    emailGroup.appendChild(emailLabel);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.name = "email";
    emailInput.required = true;
    emailGroup.appendChild(emailInput);
    contactForm.appendChild(emailGroup);

    const messageGroup = document.createElement("div");
    messageGroup.className = "form-group";
    const messageLabel = document.createElement("label");
    messageLabel.setAttribute("for", "message");
    messageLabel.textContent = "Message";
    messageGroup.appendChild(messageLabel);

    const messageTextarea = document.createElement("textarea");
    messageTextarea.id = "message";
    messageTextarea.name = "message";
    messageTextarea.rows = "4";
    messageTextarea.required = true;
    messageGroup.appendChild(messageTextarea);
    contactForm.appendChild(messageGroup);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";
    contactForm.appendChild(submitButton);

    contactSection.appendChild(contactForm);
    fragment.appendChild(contactSection);

    content.appendChild(fragment);
}
