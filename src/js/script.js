new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '#dots',
  draggable: true,
  rewind: true,
  scrollLock: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

// new Glider(document.querySelector('.glider-dots'), {
//   slidesToShow: 7,
//   dots: '#dots',
//   draggable: true,
//   rewind: true,
//   scrollLock: false,
// });

// window.addEventListener("resize", function() {
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     Glider(document.querySelector('.glider-dots'), {
//       slidesToShow: 7,
//     });
//   } else {
//     Glider(document.querySelector('.glider-dots'), {
//       slidesToShow: 3,
//     });
//   }
// });

