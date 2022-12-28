import {
	testimonilasSwiper,
	burgerMenu,
	accordion,
	downloadButton, capabilitiesSwiper, symbolsCounter, scroll, inputsValidation,

} from "./modules/helpers.js";




document.addEventListener('DOMContentLoaded', () => {
	scroll();
	testimonilasSwiper;
	accordion();
	burgerMenu();
	capabilitiesSwiper();
	downloadButton();
	symbolsCounter();
	inputsValidation();

	const techSectionRef = document.querySelector('#technologies');

	const techMarque = $('.marquee').marquee({
		duration: 7000,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		startVisible: true,
		pauseOnHover: true
	});

	techMarque.marquee('pause');

	const callback = function (entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				techMarque.marquee('resume')
			} else {
				techMarque.marquee('pause');
			}
		})
	};
	const observer = new IntersectionObserver(callback, { threshold: 0 });
	observer.observe(techSectionRef);

})
