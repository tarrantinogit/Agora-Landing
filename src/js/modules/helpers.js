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
	const btns = document.querySelectorAll('.header__burger-list-link.arrow');
	const burgerMenus = document.querySelectorAll('.header__burger-sub-nav');
	const backBtns = document.querySelectorAll('.header__burger-sub-link.header__burger-sub-link--back');

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

	overlay.addEventListener('click', (e) => {
		if (e.target && mobileMenu.classList.contains('active')) {
			burgerBtn.classList.remove('active');
			mobileMenu.classList.remove('active');
			overlay.classList.remove('active');
			document.body.style.overflowY = 'visible';
		}
	});


	btns.forEach((btn, index) => {
		btn.addEventListener('click', (e) => {
			if (e.target) {
				burgerMenus[index].classList.add('active');
			}
		});

	})
	backBtns.forEach((btn, index) => {
		btn.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
				burgerMenus[index].classList.remove('active');
			}
		});
	})
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


export function popup(btnSelector, btnCloseSelector, popupSelector) {
	const overlay = document.querySelector('.overlay');
	const btnOpen = document.querySelector(btnSelector);
	const popup = document.querySelector(popupSelector);
	const btnClose = document.querySelector(btnCloseSelector);
	const mobileMenu = document.querySelector('.header__burger-menu');


	const mobileCloseBtns = document.querySelectorAll('a[data-contact-us-close]');
	mobileCloseBtns.forEach(btn => {
		btn.addEventListener('click', (e) => {

			e.preventDefault();

			popup.classList.remove('active');
			overlay.classList.remove('active');
			document.body.style.overflowY = 'visible';

		});
	})


	btnOpen.addEventListener('click', (e) => {
		if (e.target) {
			e.preventDefault();
			document.body.style.overflowY = 'hidden';
			document.body.style.position = 'relative';
			document.body.style.height = '100%';
			popup.classList.add('active');
			overlay.classList.add('active');
		}

		btnClose.addEventListener('click', (e) => {
			if (e.target && mobileMenu.classList.contains('active')) {
				document.body.style.overflowY = 'visible';
				document.body.style.position = 'initial';
				document.body.style.height = 'auto';
				popup.classList.remove('active');
			} else {
				overlay.classList.remove('active');
				popup.classList.remove('active');
				document.body.style.overflowY = 'visible';
				document.body.style.position = 'initial';
				document.body.style.height = 'auto';
			}
		});

		overlay.addEventListener('click', (e) => {
			if (e.target) {
				popup.classList.remove('active');
				overlay.classList.remove('active');
				document.body.style.overflowY = 'visible';
				document.body.style.position = 'initial';
				document.body.style.height = 'auto';
			}
		});
	});
}


export function headerMenu() {
	const btns = document.querySelectorAll('.header__list-item.drop-down > a');
	const headerMenus = document.querySelectorAll('.header__list-item.drop-down .header__sub-nav');
	const listItems = document.querySelectorAll('.header__list-item.drop-down');

	const deactivateAll = () => {
		listItems.forEach((item) => item.classList.remove('active'));
		headerMenus.forEach((menu) => menu.classList.remove('active'));
		btns.forEach((btn) => btn.classList.remove('active'));
	};

	btns.forEach((btn, index) => {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			if (headerMenus[index].classList.contains('active')) {
				listItems[index].classList.remove('active');
				headerMenus[index].classList.remove('active');
				btn.classList.remove('active');
			} else {
				deactivateAll();

				listItems[index].classList.add('active');
				headerMenus[index].classList.add('active');
				btn.classList.add('active');
			}
		});
	});

	document.addEventListener('click', (e) => {
		const isMenuButton = [...btns].includes(e.target);
		const isSubMenu = [...headerMenus].some(menu => menu.contains(e.target));

		if (!isMenuButton && !isSubMenu) {
			deactivateAll();
		}
	});
}

export function changeText(elem, inner) {
	const item = document.querySelector(elem);
	if (document.body.offsetWidth < 577) {
		item.innerHTML = inner;
	}
}


export function initScrollObserver(itemSelector, imageWrapperSelector) {

		// Initialize items and images
		let items = Array.from($(itemSelector));
		let images = Array.from($(imageWrapperSelector));

		// Add the active class to the first image by default
		$(images[0]).addClass('is-active');

		// Initialize a variable to keep track of the last scroll position
		let lastScrollTop = 0;

		// Initialize IntersectionObserver
		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				let index = items.indexOf(entry.target);
				let st = window.pageYOffset || document.documentElement.scrollTop;

				if (entry.isIntersecting) {
					// If the item is in view, make the corresponding image active
					$(`${imageWrapperSelector}[data-index=${index}]`).addClass('is-active');
				} else {
					// If the item is not in view, make the corresponding image inactive
					// except for the last image when scrolling down
					if (index !== items.length - 1 || st <= lastScrollTop) {
						$(`${imageWrapperSelector}[data-index=${index}]`).removeClass('is-active');
					}
				}
				// Update the last scroll position
				lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
			});
		}, {threshold: 0.5});

		// Observe each item
		items.forEach(item => observer.observe(item));
}

export function scrollButton() {
	// Получите кнопку
	var scrollTopButton = document.querySelector('.btn__top');

	// Получите все секции на странице
	var sections = document.querySelectorAll('section');

	// Инициализировать IntersectionObserver
	var observer = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
			// Проверяем, является ли пересекаемый элемент первой секцией
			if (entry.target === sections[0]) {
				if (entry.isIntersecting) {
					// Если первая секция пересекает область видимости, скрываем кнопку
					scrollTopButton.classList.remove('active');
				} else {
					// Если первая секция не пересекает область видимости, показываем кнопку
					scrollTopButton.classList.add('active');
				}
			}
		});
	}, {threshold: 0.5});

	// Наблюдаем за всеми секциями
	sections.forEach(section => observer.observe(section));

	// При клике прокрутите до верха документа
	scrollTopButton.addEventListener('click', function() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	});
}


export function handleToggle(btnSelector, textSelector, linesCount = 4.2) {
	const descriptions = Array.from(document.querySelectorAll(textSelector));
	const btns = Array.from(document.querySelectorAll(btnSelector));

	function updateDescription(description, btn) {
		if (window.innerWidth <= 768) {
			if (btn.classList.contains("open")) {
				description.style.maxHeight = `${description.scrollHeight}px`;
				description.style.transition = 'max-height 0.5s';
			} else {
				description.style.maxHeight = `${linesCount}em`;
				description.style.overflow = 'hidden';
			}
		} else {
			description.style.maxHeight = 'none';
		}
	}

	descriptions.forEach((description, index) => {
		const btn = btns[index];
		updateDescription(description, btn);

		window.addEventListener("resize", function () {
			if (!btn.classList.contains("open")) {
				updateDescription(description, btn);
			}
		});

		btn.addEventListener("click", function (e) {
			e.preventDefault();
			btn.classList.toggle("open");
			if (btn.classList.contains("open")) {
				btn.innerHTML = "<span>Show less</span>";
				btn.insertAdjacentHTML('afterbegin', '<span class="icon"></span>');
				updateDescription(description, btn);
			} else {
				btn.innerHTML = "<span>Show more</span>";
				btn.insertAdjacentHTML('afterbegin', '<span class="icon"></span>');
				updateDescription(description, btn);
			}
		});
	});
}






