const toggleThemeBtn = document.querySelector("#toggle-theme");
const openSubmenuButton = document.querySelector('.submenu-open-btn')
const submenu = document.querySelector('.submenu')
const chevronIcon = document.querySelector('#submenu-chevron')
const barsIcon = document.querySelector('.bars-icon')
const overlay = document.querySelector('.overlay')
const navMenu = document.querySelector('.nav-menu')
const closeMenuButton = document.querySelector('.close-menu')

const closeMenu = () => {
    overlay.classList.toggle('hidden')
    navMenu.classList.remove('-right-52')
    navMenu.classList.add('right-0')
}

toggleThemeBtn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
})

openSubmenuButton.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle('flex')
    chevronIcon.classList.toggle('rotate-180')
})

barsIcon.addEventListener('click', closeMenu)

overlay.addEventListener('click', (e) => {
    if (e.currentTarget) {
        closeMenu()
        navMenu.classList.add('-right-52')
    }
})

closeMenuButton.addEventListener('click', ()=>{
    closeMenu()
    navMenu.classList.add('-right-52')
})