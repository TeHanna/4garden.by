const imgInnerContainer = document.querySelector('.gallery__inner-container');

function shuffle(array) {
  for (let i = array.length - 1; i > 1; i--) {
    let j = Math.floor(Math.random() * (i)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
}

function mixImages() {
  let imgPathArr= [];
  
  let i = 0;
  while (i < 21) {
    imgPathArr[i] = `./assets/img/gallery2/galery${i + 1}.jpg`;
    i++;
  }
  
  shuffle(imgPathArr);
  imgInnerContainer.innerHTML = '';
  imgPathArr.map(image => imgInnerContainer.innerHTML += `<img class="gallery__item" src=${image} alt="">`);
}

mixImages();

const scroll = window.requestAnimationFrame || 
               function(callback) {
                 window.setTimeout(callback, 1000 / 60);
               };
const galleryItems = document.querySelectorAll('.gallery__item');


function isItemInViewport(item) {
  const rect = item.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0)
    ||
    (rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

function checkVisibility() {
  Array.prototype.forEach.call(galleryItems, function(item) {
    if (isItemInViewport(item)) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });

  scroll(checkVisibility);
}

checkVisibility();


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