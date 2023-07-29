var swiper = new Swiper(".myswiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

Fancybox.bind("[data-fancybox]", {
  
});



        function hmenu() {
          var x = document.getElementById("menu");
          if (x.style.display != "block") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
        }


