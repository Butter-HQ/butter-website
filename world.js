var menu = document.getElementById("hamburger-menu")
var hamburger = document.getElementById("hamburger-icon")
var x = document.getElementById("x")

function showMenu() {
    menu.style.display = "flex";
    requestAnimationFrame(() => {
        menu.style.transform = "translate(0%)";
    })  
}

function exit() {
    menu.style.transform = "translate(100%)"
    menu.addEventListener('transitionend', hideMenu);
}

function hideMenu() {
    menu.style.display = "none";
    menu.removeEventListener('transitionend', hideMenu);
}

hamburger.addEventListener("click", showMenu)
x.addEventListener("click", exit)