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

document.querySelector(".form-btn__open").addEventListener("click", function() {
document.querySelector(".form").classList.add("form__active");
this.classList.add("active");
})

document.addEventListener("click", function(e) {
let target = e.target;
let form = document.querySelector(".form");
if (!target.closest(".form-container")) {
form.classList.remove("form__active");
form.querySelector("input").value = "";
document.querySelector(".form-btn__open").classList.remove("active")
}
})

document.querySelector(".burger").addEventListener("click", function() {
document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".burger-close").addEventListener("click", function() {
document.querySelector(".header__nav").classList.remove("active");
})

  const container = document.querySelector(".container")
    const swiper = new Swiper('.swiper', {
      speed: 300,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })

            $( function() {
        $( "#accordion" ).accordion({
            icons: false,
            heightStyle: "content",
            collapsible: true,
            active: false
          });
        } );

