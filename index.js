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