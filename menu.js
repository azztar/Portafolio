const iconMenu = document.querySelector(".nav_mobile")
const menu = document.querySelector(".menu_desktop")

iconMenu.addEventListener("click", function() {
    menu.classList.toggle("menu_show")
})