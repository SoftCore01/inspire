let burgerButton = document.querySelector(".burger");
let burgerImg = document.querySelector(".burger-img");
let closeImg = document.querySelector(".close");
let mobileNav = document.querySelector(".mobile-nav")

burgerButton.addEventListener("click", (e) => {
    if (burgerImg.style.display != "none") {
        burgerImg.style.display = "none";
        closeImg.style.display = "inline";
        mobileNav.style.display = "flex";
    } else {
        burgerImg.style.display = "inline";
        closeImg.style.display = "none";
        mobileNav.style.display = "none";
    }
    
})