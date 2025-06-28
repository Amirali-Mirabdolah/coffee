const openSubmenuButton = document.querySelector('.submenu-open-btn')
const submenu = document.querySelector('.submenu')
const chevronIcon = document.querySelector('#submenu-chevron')
const barsIcon = document.querySelector('.bars-icon')
const overlay = document.querySelector('.overlay')
const navMenu = document.querySelector('.nav-menu')
const closeMenuButton = document.querySelector('.close-menu')
const cartMenu = document.querySelector('.mobile-cart')
const cartButton = document.querySelector('.cart-icon')
const closeCartButton = document.querySelector('.cart-close-btn')

document.querySelectorAll('.toggle-theme').forEach(button => {
    button.addEventListener("click", () => {
        console.log('toggle clicked');

        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})

openSubmenuButton.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle('flex')
    chevronIcon.classList.toggle('rotate-180')
})

const closeMenuHandler = () => {
    navMenu.classList.remove('right-0')
    navMenu.classList.add('-right-52')
    overlay.classList.add('hidden')
}

const closeCartHandler = () => {
    cartMenu.classList.remove('left-0')
    cartMenu.classList.add('-left-52')
    overlay.classList.add('hidden')
}

barsIcon.addEventListener('click', () => {
    navMenu.classList.add('right-0')
    navMenu.classList.remove('-right-52')
    overlay.classList.remove('hidden')
})

closeMenuButton.addEventListener('click', closeMenuHandler)
closeCartButton.addEventListener('click', closeCartHandler)

overlay.addEventListener('click', (e) => {
    if (e.currentTarget) {
        closeMenuHandler()
        closeCartHandler()
    }
})

cartButton.addEventListener('click', () => {
    cartMenu.classList.remove('-left-52')
    cartMenu.classList.add('left-0')
    overlay.classList.remove('hidden')
})