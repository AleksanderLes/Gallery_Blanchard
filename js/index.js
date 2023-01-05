/* drop menu */

const btns = document.querySelectorAll(".menu__link");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "link__active";

btns.forEach(item => {
        item.addEventListener("click", function() {
            let DropThis = this.parentElement.querySelector(".dropdown");
            dropdowns.forEach(el => {
                if (el != DropThis) {
                    el.classList.remove(activeClassdropdowns)
                }
            });
            btns.forEach(el => {
                if (el != this) {
                    el.classList.remove(activeClassbtns)
                }
            });
            DropThis.classList.toggle(activeClassdropdowns);
            this.classList.toggle(activeClassbtns);
        })
    })
    /* scrolbar */
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
        /* чтобы изначально ползунок был виден */
        autoHide: false,
        /* с помощью этого значения вы можете управлять высотой ползунка*/
        scrollbarMaxSize: 25,
    });
})

/* Кастомный селект */
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
});


/*  swiper hero */
new Swiper('.hero__swiper', {
    speed: 3000,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 5000,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
})

/*  swiper gallery */

new Swiper('.gallery__swiper', {
    speed: 300,
    /* loop: true,*/
    pagination: {
        el: '.gallery__pagination',
        clickable: true,
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery__nav-btn--next',
        prevEl: '.gallery__nav-btn--prev',
    },
    simulateTouch: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    /*
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".gallery__swiper",
    },
    */
    slidesPerView: 1,

    /*отключит слайдер если мало слайдов*/
    watchOverflow: true,

    breakpoints: {

        581: {
            slidesPerView: 2,
            spaceBetween: 30,

        },

        960: {
            slidesPerView: 2,
            spaceBetween: 34
        },
        1201: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },

});

/*  swiper events */
const swiper = new Swiper('.events__swiper', {

    autoHeight: true,
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.events__pagination',
        type: 'bullets',
        clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,

    breakpoints: {
        690: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 31,
            slidesPerGroup: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    },

});

/*  swiper projects */
new Swiper('.projects__swiper', {


    loop: true,
    navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        580: {
            slidesPerView: 2,
            spaceBetween: 36
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 50
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

});

/* Accordion */
new Accordion('.accordion');


/* katalog tabs */
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('tabs-item--active') });

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active'); /* важно! обратные ковычки */

    });
});

// Mask
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

// Validation

new JustValidate('#form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30,
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },

    },
    messages: {
        name: {
            required: 'Вы&nbsp;не&nbsp;ввели имя',
            minLength: 'Имя должно содержать  2 символа'
        },

        tel: {
            required: 'Вы&nbsp;не&nbsp;ввели телефон',
            function: 'Введен неправильный номер телефона'
        }
    },
});

/* map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758463, 37.601079],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
        controls: []
    }, {
        geolocationControlFloat: 'right',

        zoomControlSize: 'small'
    });


    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            top: '280px',
            right: '15px'
        },

    })
    myMap.controls.add('geolocationControl', {
            float: 'none',
            position: {
                top: '350px',
                right: '15px'
            }
        })
        // Вспомогательный класс, который можно использовать
        // вместо GeoObject c типом геометрии «Point» (см. предыдущий пример)
    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {
        hintContent: 'Москва, Леонтьевский переулок, дом 5/1, Шоурум №4',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Placemark-icon.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}

/* burger */
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menulinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menulinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

/* search */

let btnOpen = document.querySelector('.search-open');
let inputSearch = document.querySelector('.search-top');
let closeSearch = document.querySelector('.search__btn-close');
let btnSearch = document.querySelector('.search__btn');


btnOpen.addEventListener('click', function() {
    inputSearch.classList.add('search-top--active');
    btnOpen.classList.add('search-open--deactive');
    inputSearch.querySelector("input").value = "";
})
closeSearch.addEventListener('click', function() {
    inputSearch.querySelector("input").value = "";
    inputSearch.classList.remove('search-top--active');
    btnOpen.classList.remove('search-open--deactive');
})
