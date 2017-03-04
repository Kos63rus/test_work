var mainMenuBtn = document.querySelector(".user-panel .main-menu-btn");
var mainNav = document.querySelector(".user-panel .main-navigation");
var sectionContent = document.querySelector(".actual-content");
var closeModal = document.querySelector(".modal .modal-content-close");
var openModal1 = document.querySelector(".main-content-table tr:nth-child(2)");
var openModal2 = document.querySelector(".main-content-table tr:nth-child(3)");
var openModal3 = document.querySelector(".main-content-table tr:nth-child(4)");
var openModal4 = document.querySelector(".main-content-table tr:nth-child(5)");
var openModal5 = document.querySelector(".main-content-table tr:nth-child(6)");
var popup = document.querySelector(".modal");

mainMenuBtn.addEventListener("click", function(event){
  event.preventDefault();
  mainNav.classList.toggle("visually-hidden");
  sectionContent.classList.toggle("visually-narrow");
});

openModal1.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("visually-hidden");
});

openModal2.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("visually-hidden");
});

openModal3.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("visually-hidden");
});

openModal4.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("visually-hidden");
});

openModal5.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("visually-hidden");
});

closeModal.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("visually-hidden");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.add("visually-hidden");
  }
});
