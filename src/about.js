import AboutImage from './Restaurant.jpg'

export default function aboutPage() {
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const fragment = document.createDocumentFragment();

    // Crear la sección "About Us"
    const aboutSection = document.createElement("section");
    aboutSection.id = "about";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us";
    aboutSection.appendChild(aboutTitle);

    const aboutContent = document.createElement("div");
    aboutContent.className = "about-content";

    // Imagen de "About Us"
    const aboutImageContainer = document.createElement("div");
    aboutImageContainer.className = "about-image";
    const aboutImage = document.createElement("img");
    aboutImage.src = AboutImage;
    aboutImage.alt = "Our Restaurant";
    aboutImageContainer.appendChild(aboutImage);
    aboutContent.appendChild(aboutImageContainer);

    // Texto de "About Us"
    const aboutTextContainer = document.createElement("div");
    aboutTextContainer.className = "about-text";

    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "Welcome to Restaurante Delicioso! We are a family-owned restaurant with a passion for authentic flavors and unforgettable experiences. Since our opening, we have been dedicated to bringing the finest culinary creations to our community.";
    aboutTextContainer.appendChild(aboutText1);

    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "Our chefs use only the freshest ingredients, combining tradition with innovation to serve dishes that satisfy every palate. Whether you're here for a casual lunch or a special dinner, we promise to make every meal a memorable experience.";
    aboutTextContainer.appendChild(aboutText2);

    const aboutText3 = document.createElement("p");
    aboutText3.textContent = "Join us and taste the difference that passion and dedication bring to every dish.";
    aboutTextContainer.appendChild(aboutText3);

    aboutContent.appendChild(aboutTextContainer);
    aboutSection.appendChild(aboutContent);
    fragment.appendChild(aboutSection);

    // Crear la sección "Our Mission"
    const missionSection = document.createElement("section");
    missionSection.id = "our-mission";

    const missionTitle = document.createElement("h2");
    missionTitle.textContent = "Our Mission";
    missionSection.appendChild(missionTitle);

    const missionText = document.createElement("p");
    missionText.textContent = "At Restaurante Delicioso, our mission is simple: to create memorable dining experiences through exceptional food, welcoming service, and a comfortable atmosphere. We believe in the power of good food to bring people together, and we strive to make every guest feel like part of our family.";
    missionSection.appendChild(missionText);

    fragment.appendChild(missionSection);

    // Crear la sección "Meet the Team"
    const teamSection = document.createElement("section");
    teamSection.id = "our-team";

    const teamTitle = document.createElement("h2");
    teamTitle.textContent = "Meet the Team";
    teamSection.appendChild(teamTitle);

    const teamMembersContainer = document.createElement("div");
    teamMembersContainer.className = "team-members";

    // Crear cada miembro del equipo
    const teamMembers = [
        { imgSrc: "https://via.placeholder.com/150", name: "Chef Juan Pérez", position: "Head Chef" },
        { imgSrc: "https://via.placeholder.com/150", name: "María Gómez", position: "Restaurant Manager" },
        { imgSrc: "https://via.placeholder.com/150", name: "Carlos López", position: "Sous Chef" }
    ];

    teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.className = "team-member";

        const memberImg = document.createElement("img");
        memberImg.src = member.imgSrc;
        memberImg.alt = member.name;
        memberDiv.appendChild(memberImg);

        const memberName = document.createElement("h3");
        memberName.textContent = member.name;
        memberDiv.appendChild(memberName);

        const memberPosition = document.createElement("p");
        memberPosition.textContent = member.position;
        memberDiv.appendChild(memberPosition);

        teamMembersContainer.appendChild(memberDiv);
    });

    teamSection.appendChild(teamMembersContainer);
    fragment.appendChild(teamSection);

    content.appendChild(fragment);
}
