// Menu Burger
const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.header-nav')
const shadow = document.querySelector('.shadow')
const headerLinks = document.querySelector('.header-list')
const logo = document.querySelector('.logo')

function openBurger () {
  burger.classList.toggle('burger-active')
  burgerMenu.classList.toggle('header-nav_active')
  shadow.classList.toggle('shadow-active')
  document.body.classList.toggle('lock')
  logo.classList.toggle('logo-hidden')
}

function closeBurger () {
  burger.classList.remove('burger-active')
  burgerMenu.classList.remove('header-nav_active')
  shadow.classList.remove('shadow-active')
  document.body.classList.remove('lock')
  logo.classList.remove('logo-hidden')
}

burger.addEventListener('click', openBurger)
headerLinks.addEventListener('click', closeBurger)
shadow.addEventListener('click', closeBurger)