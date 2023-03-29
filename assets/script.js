const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

bulmaCarousel.attach('#post_images', {
    slidesToScroll:1,
    slidesToShow: 1,
    loop:true
})