import menuPage from "./menu";
import homePage from "./home";
import aboutPage from "./about";
import contactPage from "./contact";
import estilos from "./home.css";


const menuButton = document.querySelector('.menu-button');
const homeButton = document.querySelector('.home-button');
const aboutButton = document.querySelector('.about-button');
const contactButton = document.querySelector('.contact-button');

menuButton.addEventListener('click', menuPage);
homeButton.addEventListener('click', homePage);
aboutButton.addEventListener('click', aboutPage);
contactButton.addEventListener('click', contactPage);

console.log('Hello World')