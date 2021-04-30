var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });