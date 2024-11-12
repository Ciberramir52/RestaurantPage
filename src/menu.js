const platillosEspeciales = [["https://via.placeholder.com/250", "Una deliciosa combinación de sabores."], ["https://via.placeholder.com/250", "Ingredientes frescos y de calidad."], ["https://via.placeholder.com/250", "Sabores únicos que te sorprenderán."]];
const contactInfo = ["1234 Calle de la Comida, Ciudad Gourmet, CP 56789", "Teléfono: (555) 123-4567", "Email: contacto@restaurantedelicioso.com"];
const socialMedia = ["Facebook", "Instagram", "X"];

export default function menuPage() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const fragment = document.createDocumentFragment();
    const menu = document.createElement("section");
    menu.classList.add("menu");
    const menuTitle = document.createElement("h2");
    menuTitle.innerText = "Menu Destacado";
    menu.appendChild(menuTitle);
    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    platillosEspeciales.forEach((platillo, index) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        const img = document.createElement("img");
        img.src = platillo[0];
        img.alt = `Platillo ${index + 1}`;
        menuItem.appendChild(img);
        const tituloPlatillo = document.createElement("h3");
        tituloPlatillo.innerText = `Platillo ${index + 1}`;
        menuItem.appendChild(tituloPlatillo);
        const description = document.createElement("p");
        description.innerText = platillo[1];
        menuItem.appendChild(description);
        menuItems.appendChild(menuItem);
    });
    menu.appendChild(menuItems);
    fragment.appendChild(menu);
    const contact = document.createElement("section");
    contact.classList.add("contact");
    const contactTitle = document.createElement("h2");
    contactTitle.innerText = "Contáctanos";
    contact.appendChild(contactTitle);
    contactInfo.forEach(info => {
        const paragraph = document.createElement("p");
        paragraph.innerText = info;
        contact.appendChild(paragraph);
    });
    const socialLinks = document.createElement("div");
    socialLinks.classList.add("social-links");
    socialMedia.forEach(media => {
        const mediaLink = document.createElement("a");
        mediaLink.href = "#";
        mediaLink.target = "_blank";
        mediaLink.innerText = `🔗 ${media}`;
        socialLinks.appendChild(mediaLink);
    });
    contact.appendChild(socialLinks);
    fragment.appendChild(contact);
    content.appendChild(fragment);
}