// Swiper JS //


// Inro
const swiper1 = new Swiper(".swiper1", {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
    speed: 3000,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: false
    },

});

// Our travels //
const swiper2 = new Swiper(".swiper2", {
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    speed: 1000,
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    reverseDirection: true,
});

// Our Partners //
const swiper3 = new Swiper(".swiper3", {
    loop: true,
    breakpoints: {
        100: {
            slidesPerView: 2,
            speed: 600,
            autoplay: {
                delay: 500,
            },
        },
        767: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
    allowTouchMove: false,
    speed: 1000,
    autoplay: {
        delay: 350,
    },

});