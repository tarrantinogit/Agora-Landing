import {
	testimonilasSwiper,
	popup,
	burgerMenu,
	capabilities,
	downloadButton, technologies, focusVisible, capabilitiesSwiper, symbolsCounter, scroll,

} from "./modules/functions.js";
import {accordion} from "./modules/functions.js";



document.addEventListener('DOMContentLoaded', () => {
	scroll();
	testimonilasSwiper;
	accordion();
	popup('button[data-popup-contact]', 'img[data-popup-contact-close]', '.popup-contact');
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	technologies();
	symbolsCounter();
})
