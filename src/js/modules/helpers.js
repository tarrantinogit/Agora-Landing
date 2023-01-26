import Swiper from "swiper/bundle";


export function downloadButton() {
	const downloadButtons = document.querySelectorAll('.input--file');
	const fileChosen = document.querySelectorAll('.download__text');
	const resetBtns = document.querySelectorAll('.download__reset-btn');

	downloadButtons.forEach((btn, index) => {
		btn.addEventListener('change', function (e) {
			fileChosen[index].textContent = this.files[0].name;
			resetBtns[index].classList.add('active');
		})
	})
	resetBtns.forEach((btn, index) => {
		btn.addEventListener('click', function (e) {
			btn.classList.remove('active');
			downloadButtons[index].value = '';
			fileChosen[index].textContent = 'Choose a file'
		})
	})

}

export function scroll() {
	document.querySelectorAll('.scroll-link').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});
}


export const testimonilasSwiper = new Swiper('.swiper.testimonials__swiper', {
	direction: 'horizontal',
	centeredSlides: true,
	slidesPerView: "2",
	speed: 800,
	autoHeight: true,
	// roundLengths: true,
	loop: true,
	loopAdditionalSlides: 30,
	spaceBetween: 32,

	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		360: {
			slidesPerView: 1,
			spaceBetween: 32,
		},
		640: {
			slidesPerView: 1.5,
			spaceBetween: 32,
		},
		768: {
			slidesPerView: 1.8,
			spaceBetween: 32,
		},

	}
});

export const techSwiper = new Swiper('.swiper.technologies-swiper', {
	slidesPerView: 1,
	centeredSlides: false,
	grid: {
		rows: 2,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	breakpoints: {
		567: {
			slidesPerView: "auto",
			centeredSlides: true,
			slidesPerGroup: 1,
			spaceBetween: 32,
			grid: false
		}
	}
});


export function capabilitiesSwiper() {
	if (document.body.clientWidth <= 640) {
		const swiper = new Swiper('.capabilities__swiper.swiper', {
			direction: 'horizontal',
			loop: false,
			spaceBetween: 32,
			centeredSlides: true,
			slidesPerView: "auto",
			observer: true,
			observeParents: true,

			pagination: {
				el: ".capabilities__swiper-pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".capabilities__swiper-button-next",
				prevEl: ".capabilities__swiper-button-prev",
			},
			breakpoints: {
				450: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				500: {
					slidesPerView: "auto",
					spaceBetween: 32,
				},
			}
		});

	}
}


export function accordion() {
	let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

	accordionItemHeaders.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener("click", event => {
			if (!event.target.classList.contains("active")) {
				accordionItemHeaders.forEach(accordionItemHeader => {
					let accordionItemBody = accordionItemHeader.nextElementSibling;
					if (accordionItemHeader.classList.contains("active")) {
						accordionItemHeader.classList.remove("active")
						accordionItemBody.style.maxHeight = 0;
					}
				});
			}
			accordionItemHeader.classList.toggle("active");
			let accordionItemBody = accordionItemHeader.nextElementSibling;

			if (accordionItemHeader.classList.contains("active")) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			} else {
				accordionItemBody.style.maxHeight = 0;
			}
		});
	});
}

export function burgerMenu() {
	const burgerBtn = document.querySelector('.header__burger');
	const mobileMenu = document.querySelector('.header__burger-menu');
	const overlay = document.querySelector('.overlay');
	const mobileMenuLinks = document.querySelectorAll('.header__burger-list-link');

	burgerBtn.addEventListener('click', (e) => {
		if (e.target && overlay.classList.contains('active')) {
			document.body.style.overflowY = 'visible';
			burgerBtn.classList.remove('active');
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');

		} else {
			burgerBtn.classList.add('active');
			mobileMenu.classList.add('active');
			overlay.classList.add('active');
			document.body.style.overflowY = 'hidden';
		}
	});
	mobileMenuLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			if (e.target && mobileMenu.classList.contains('active')) {
				burgerBtn.classList.remove('active');
				mobileMenu.classList.remove('active');
				overlay.classList.remove('active');
				document.body.style.overflowY = 'visible';
			}
		})
	})
	overlay.addEventListener('click', (e) => {
		if (e.target && mobileMenu.classList.contains('active')) {
			burgerBtn.classList.remove('active');
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');
			document.body.style.overflowY = 'visible';
		}
	});
}


export function symbolsCounter() {
	const text = document.querySelectorAll('.label__text--additional span');
	const textArea = document.querySelectorAll('.input--textarea');
	textArea.forEach((input, index) => {
		input.addEventListener('input', (e) => {
			text[index].innerHTML = 500 - (+input.value.length)
		});
	})

}


export function inputsValidation() {

	const wpcf7Elm = document.querySelector('#wpcf7-f6-o2');
	if (document.querySelector('.input[aria-required="true"]')) {
		const inputs = wpcf7Elm.querySelectorAll('.input[aria-required="true"]');


		wpcf7Elm.addEventListener('wpcf7invalid', function (event) {
			inputs.forEach(input => {
				input.addEventListener('change', (e) => {
					if (input.getAttribute('aria-invalid') == 'true') {
						input.classList.remove('error');
					}
				})

				input.classList.add('error');


			})
		}, false);
	}
}


