/*===== NAV TOGGLE =====*/
const nav = document.getElementById('nav')
const navToggle = document.querySelectorAll('.toggle')

for (const element of navToggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show-menu')
    })
}

const navLink = document.querySelectorAll('nav .nav-list .nav-item .nav-link')

for (const link of navLink) {
    link.addEventListener('click', function () {
        nav.classList.remove('show-menu')
    })
}

/*===== CHANGE MENU ON SCROLL =====*/
function changeHeader() {
    const header = document.getElementById('header')
    const navHeight = header.offsetHeight
    if (this.window.scrollY >= navHeight) {
        header.classList.add('header-scroll')
    } else {
        header.classList.remove('header-scroll')
    }
}

/*===== SWIPER TESTIMONIALS =====*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination'
    },

    mousewheel: true,
    keyboard: true,

    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/*===== SCROLL REVEAL =====*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 500,
    reset: true
})

scrollReveal.reveal(
    `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .content-testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
)

/*===== SCROLL TO TOP =====*/
function scrollTop() {
    const scrollTop = document.querySelector('.scroll-top')

    window.addEventListener('scroll', function () {
        if (window.scrollY >= 560) {
            scrollTop.classList.add('show-scroll-top')
        } else {
            scrollTop.classList.remove('show-scroll-top')
        }
    })
}

window.addEventListener('scroll', function () {
    changeHeader()
    scrollTop()
})