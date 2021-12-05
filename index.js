function handleBurgerMenuFn() {
    let x = document.getElementById("myTopnav");
    let openIcon = document.getElementById("open-hamburger-menu-icon");
    let closeIcon = document.getElementById("close-hamburger-menu-icon");
    if (x.className === "header topnav") {
        openIcon.style.display = "none";
        closeIcon.style.display = "inherit";
        x.className += " responsive";
    } else {
        x.className = "header topnav";
        openIcon.style.display = "inherit";
        closeIcon.style.display = "none";
    }
}

let customersCardCarousel = document.querySelector('.carousel');
let customersCardFlickity = new Flickity( customersCardCarousel, {
    // options
    cellalign: 'center',
    pageDots: true,
    groupCells: '20%',
    selectedAttraction: 0.03,
    friction: 0.15,
    initialIndex: 2,
    // wrapAround:true
});

let customersLogoCarousel = document.querySelector(".logos-carousel");
let customersLogoFlickity = new Flickity( customersLogoCarousel, {
    // options
    cellalign: 'left',
    pageDots: false,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    initialIndex: 3,
    autoPlay: true,
    // wrapAround:true,
    // autoplay:true
});

