export default function homePage() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    const fragment = document.createDocumentFragment();

    // Crear la sección de Bienvenida
    const welcomeSection = document.createElement("section");
    welcomeSection.className = "welcome";

    const welcomeTitle = document.createElement("h2");
    welcomeTitle.textContent = "Bienvenidos";
    welcomeSection.appendChild(welcomeTitle);

    const welcomeText = document.createElement("p");
    welcomeText.textContent = "En Restaurante Delicioso, nos enorgullece ofrecer una experiencia gastronómica única. Nuestros platos son preparados con los ingredientes más frescos y con una receta secreta que hará que quieras más. ¡Ven y disfruta!";
    welcomeSection.appendChild(welcomeText);

    fragment.appendChild(welcomeSection);

    // Crear la sección de Menú Destacado
    const menuSection = document.createElement("section");
    menuSection.className = "menu";

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menú Destacado";
    menuSection.appendChild(menuTitle);

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.className = "menu-items";

    // Crear los items del menú
    const menuItems = [
        { imgSrc: "https://via.placeholder.com/250", title: "Platillo 1", description: "Descripción breve de este platillo increíble." },
        { imgSrc: "https://via.placeholder.com/250", title: "Platillo 2", description: "Descripción breve de este platillo increíble." },
        { imgSrc: "https://via.placeholder.com/250", title: "Platillo 3", description: "Descripción breve de este platillo increíble." }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const img = document.createElement("img");
        img.src = item.imgSrc;
        img.alt = item.title;
        menuItem.appendChild(img);

        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;
        menuItem.appendChild(itemTitle);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        menuItemsContainer.appendChild(menuItem);
    });

    menuSection.appendChild(menuItemsContainer);
    fragment.appendChild(menuSection);

    // Crear la sección de Testimonios
    const testimonialsSection = document.createElement("section");
    testimonialsSection.className = "testimonials";

    const testimonialsTitle = document.createElement("h2");
    testimonialsTitle.textContent = "Lo que dicen nuestros clientes";
    testimonialsSection.appendChild(testimonialsTitle);

    const testimonialTexts = [
        "\"El mejor restaurante de la ciudad, la comida es deliciosa y el ambiente es muy acogedor. ¡Volveremos pronto!\" - Juan Pérez",
        "\"Servicio excelente, personal amable y siempre con una sonrisa. Los platos son de alta calidad.\" - María López"
    ];

    testimonialTexts.forEach(text => {
        const testimonial = document.createElement("p");
        testimonial.textContent = text;
        testimonialsSection.appendChild(testimonial);
    });

    fragment.appendChild(testimonialsSection);

    // Crear la sección de Galería
    const gallerySection = document.createElement("section");
    gallerySection.className = "gallery";

    const galleryTitle = document.createElement("h2");
    galleryTitle.textContent = "Galería de Imágenes";
    gallerySection.appendChild(galleryTitle);

    const galleryContainer = document.createElement("div");
    galleryContainer.className = "gallery-images";

    const galleryImages = [
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400",
        "https://via.placeholder.com/600x400"
    ];

    galleryImages.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagen de galería";
        galleryContainer.appendChild(img);
    });

    gallerySection.appendChild(galleryContainer);
    fragment.appendChild(gallerySection);

    // Crear la sección de Promociones
    const promotionsSection = document.createElement("section");
    promotionsSection.className = "promotions";

    const promotionsTitle = document.createElement("h2");
    promotionsTitle.textContent = "Promociones Especiales";
    promotionsSection.appendChild(promotionsTitle);

    const promotionCard = document.createElement("div");
    promotionCard.className = "promotion-card";

    const promotionTitle = document.createElement("h3");
    promotionTitle.textContent = "Oferta de Fin de Semana";
    promotionCard.appendChild(promotionTitle);

    const promotionText = document.createElement("p");
    promotionText.textContent = "¡Ven el fin de semana y recibe un 20% de descuento en tu cuenta total!";
    promotionCard.appendChild(promotionText);

    promotionsSection.appendChild(promotionCard);
    fragment.appendChild(promotionsSection);

    // Crear la sección de Contacto
    const contactSection = document.createElement("section");
    contactSection.className = "contact";

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contáctanos";
    contactSection.appendChild(contactTitle);

    const contactAddress = document.createElement("p");
    contactAddress.textContent = "1234 Calle de la Comida, Ciudad Gourmet";
    contactSection.appendChild(contactAddress);

    const contactPhone = document.createElement("p");
    contactPhone.textContent = "Teléfono: (555) 123-4567";
    contactSection.appendChild(contactPhone);

    const contactEmail = document.createElement("p");
    contactEmail.textContent = "Email: contacto@restaurantedelicioso.com";
    contactSection.appendChild(contactEmail);

    const socialLinks = document.createElement("div");
    socialLinks.className = "social-links";

    const socialMedia = [
        { name: "Facebook", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "Twitter", href: "#" }
    ];

    socialMedia.forEach(social => {
        const link = document.createElement("a");
        link.href = social.href;
        link.textContent = social.name;
        socialLinks.appendChild(link);
    });

    contactSection.appendChild(socialLinks);
    fragment.appendChild(contactSection);

    // Finalmente, agregar el fragmento al contenido
    content.appendChild(fragment);
}