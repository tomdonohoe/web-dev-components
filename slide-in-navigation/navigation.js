const navigationLinks = document.querySelector('.navigation-links')
const navigationToggleIcon = document.querySelector('.navigation-icon')
const navigationOverlay = document.querySelector('.navigation-overlay')

const toggleNavigation = () => {
    navigationOverlay.classList.toggle('navigation-toggled')
    navigationToggleIcon.classList.toggle('change')
}

navigationToggleIcon.addEventListener('click', toggleNavigation)