document.querySelector(".burger").addEventListener("click", function() {
document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".burger-close").addEventListener("click", function() {
document.querySelector(".header__nav").classList.remove("active");
})
