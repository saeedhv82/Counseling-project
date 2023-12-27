'use strict'

// hamburger menu functionality

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("menu-bar").classList.toggle("burger-bg");
}

// swiper slider 

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,
    rewind: true,
    navigation: {
        nextEl: '.swiper-button-next',
        pervEl: '.swiper-button-perv',
    },
    breakpoints: {
        270: {
            slidesPerView: 1,
        },
        599: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
})


// var swiper2 = new Swiper('.mySwiper2', {
//     slidesPerView: 2,
//     spaceBetween: 10,
//     grabCursor: true,
//     breakpoints: {
//         270: {
//             slidesPerView: 1,
//         },
//         599: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         992: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         },
//     }
// })

