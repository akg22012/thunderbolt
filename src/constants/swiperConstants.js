export const homeSlider = {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export const workSlider = {
  observer: true,
  observeParents: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  // loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.4,
      spaceBetween: 20,
    },
  },
};

export const homeSkillSlider = {
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 7.6,
      spaceBetween: 50,
    },
  },
};
export const PricingSkillSlider = {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
    1024: {
      slidesPerView: 6.5,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    },
  },
};
export const statsSlider = {
  observer: true,
  observeParents: true,
  slidesPerView: 1.2,
  spaceBetween: 10,
  loop: false,
};
export const pricingSlider = {
  observeParents: true,
  observer: true,
  spaceBetween: 20,
  slidesPerView: 6,
  loop: false,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
  },
};
