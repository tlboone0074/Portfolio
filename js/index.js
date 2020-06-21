

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {

    navbar.classList.toggle("change");
});




// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menutBtn.addEventListener('click', () => {

//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });


