"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
// Меню бурнер
const iconMenu = document.querySelector('.add__class');
const menuBody = document.querySelector('.menu__wrapper');
const menuBg = document.querySelector('.green__bg');
const menuClose = document.querySelector('.close__menu');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
        menuBg.classList.toggle('_active');
        menuClose.classList.remove('_active');
	});
}
if (menuClose) {
	menuClose.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
        menuBg.classList.remove('_active');
        menuClose.classList.remove('_active');
	});
    
}

let menuArrows = document.querySelectorAll('.header__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('sub__menu-active');
        });
        }
    };



const cardServise = document.querySelectorAll('.card__service-wrap');
console.log(cardServise)

cardServise.forEach(cardServiceWrap => {
    cardServiceWrap.addEventListener("click", function () {  
        for (let i = 0; i < cardServise.length; i++) {
            if (cardServise[i].classList.contains('card__service_active')) {
                cardServise[i].classList.remove('card__service_active')
                break
            }
        }
        
        cardServiceWrap.classList.toggle('card__service_active');
    });
})




// $(document).ready(function() {
//     $('.slider').slick();
// });

// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if(menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }

