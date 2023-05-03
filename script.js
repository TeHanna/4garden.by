//Gallery random
// function randomImages() {
//   const pictureInnerContainer = document.querySelector('.picture-inner-container');

//   let images = [
//     '<img src="./assets/img/gallery/galery1.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery2.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery3.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery4.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery5.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery6.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery7.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery8.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery9.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery10.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery11.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery12.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery13.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery14.jpg" alt="img" class="img-gallery">',
//     '<img src="./assets/img/gallery/galery15.jpg" alt="img" class="img-gallery">',
// ]

//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }

//   shuffle(images).map((item) => pictureInnerContainer.innerHTML += item)
// }
// randomImages();