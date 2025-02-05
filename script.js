// burger
const header = document.querySelector(".header")
const burgerIcon = document.querySelector(".burder__icon")
const body = document.querySelector("body")

const burgerBtn = document.querySelector(".burger")

    // burgerBtn.addEventListener("click", () => {
    // header.classList.toggle(".burger--activ");
    // })

// alert(burgerBtn)

burgerBtn.addEventListener("click", () => {
    header.classList.toggle("header-mobile");
    body.classList.toggle("no-scroll");

    if (header.classList.contains("header-mobile")) {
        burgerIcon.src = "./img/svg/exit.png"
    } else {
        burgerIcon.src = "./img/svg/burger-meny.png"
    }
})

// modal

const modal = document.querySelector('.modal__wrapper')
const btnsModalOpen = document.querySelectorAll('.btn[type="button"]')

btnsModalOpen.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('none');
        body.classList.add('no-scroll');
    });
})

const btnModalExit = document.querySelector('.modal__exit');

btnModalExit.addEventListener('click', () => {
    modal.classList.add('none');
    body.classList.remove('no-scroll');
});

// video
const playVideoBtn = document.querySelector('.video__play-btn');
const video = document.querySelector('.video__media');
const playVideoIcon = document.querySelector('.video__play-btn img');

playVideoBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playVideoIcon.src = "./img/svg/play-icon__invert.png"
    } else {
        video.pause();
        playVideoIcon.src = "./img/svg/play-icon.png"
    }   
});
