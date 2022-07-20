// DROPDOWN

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".menu__list")) {
    document.querySelectorAll(".dropdown").forEach(el => {
        el.classList.remove("dropdown__active");
    })
     document.querySelectorAll(".menu__btn").forEach(el => {
        el.classList.remove("btn__active");
    });
  }
})



// HERO

const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})


// CHOICES


document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
     },
  });

});


// GALLERY SLIDER


let gallerySlider = new Swiper(".gal__right", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,
  },

  grid: {
    rows: 1
  },
  spaceBetween: 30,
  pagination: {
    el: ".gal__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gal__btn-next",
    prevEl: ".gal__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 0,
      slidesPerGroup: 3
    },

    1024: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    1920: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


// KATALOG ACCORDION


$( function() {
  $( ".accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  } );


// KATALOG TABS

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});
document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
});
});


// SOBITIYA SLIDER


let sobSlider = new Swiper(".sob__container2", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,
  },

  grid: {
    rows: 1
  },
  spaceBetween: 50,
  navigation: {
    nextEl: ".sob__btn-next",
    prevEl: ".sob__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1024: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27
    },

    1920: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


// PROJECT SLIDER


let projSlider = new Swiper(".proj__container2", {
  slidesPerView: 3,
  slidesPerGroup: 3,
    keyboard: {
    enabled: true,
    onlyInViewport: true,
     pageUpDown: true,
  },

  grid: {
    rows: 1
  },
  spaceBetween: 50,
  navigation: {
    nextEl: ".proj__btn-next",
    prevEl: ".proj__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },

    1024: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },

    1920: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


// CONTACTS


let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.con__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         name: "Как вас зовут?",
         phone: {
           required: "Укажите ваш телефон",
           function: "Как вам позвонить?"
         }
       }
    });


    // MAP

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("myMap", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.760318649749244,37.614758623603784],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });

        var myPlacemark = new ymaps.Placemark([55.760318649749244,37.614758623603784], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Map.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

        myMap.geoObjects.add(myPlacemark);
    }


    // BURGER

    document.querySelector(".burger").addEventListener("click", function() {
      document.querySelector(".nav").classList.add("active");
    })
    document.querySelector(".burger-close").addEventListener("click", function() {
      document.querySelector(".nav").classList.remove("active");
    })

        //  SEARCH

        document.querySelector(".search-1024__open").addEventListener("click", function() {
          document.querySelector(".search-1024__form").classList.add("active");
        })
        document.querySelector(".search-1024__close").addEventListener("click", function() {
          document.querySelector(".search-1024__form").classList.remove("active");
        })

