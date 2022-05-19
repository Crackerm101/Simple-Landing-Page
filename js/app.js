const toggleNavBar = document.querySelector(".nav_toggle");
const links = document.querySelector(".links");
toggleNavBar.addEventListener("click", () => {
    links.classList.toggle("active");
    toggleNavBar.classList.toggle("active");
});

const questions = document.querySelectorAll(".questions");
questions.forEach((question) => {
    const btn = question.querySelector(".question-title");
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

const navbar = document.getElementById("navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
    const ScrollDown = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (ScrollDown > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
        links.classList.remove("active");
    }

    if (ScrollDown > 500) {
        topLink.classList.add("arrow_link");
    } else {
        topLink.classList.remove("arrow_link");
    }
});

var swiper = new Swiper(".swiper-container", {
    slidesPerGroup: 1,
    loop: true,
    speed: 1000,
    autoplay: true,
    grabCursor: true,
    spaceBetween: 50,
    mousewheel: false,
    centeredSlides: true,
    pagination: {
        el: ".tc-pagination",
        clickable: true,
    },
    breakpoints: {
        1204: {
            slidesPerView: 3,
            spaceBetween: 1,
        },

        1024: {
            slidesPerView: 3,
        },
        820: {
            slidesPerView: 1,
            spaceBetween: 2,
        },
    },
});
