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
  openModal1.classList.add("active");
  popup.classList.remove("visually-hidden");
});

openModal2.addEventListener("click", function(event){
  event.preventDefault();
  openModal2.classList.add("active");
  popup.classList.remove("visually-hidden");
});

openModal3.addEventListener("click", function(event){
  event.preventDefault();
  openModal3.classList.add("active");
  popup.classList.remove("visually-hidden");
});

openModal4.addEventListener("click", function(event){
  event.preventDefault();
  openModal4.classList.add("active");
  popup.classList.remove("visually-hidden");
});

openModal5.addEventListener("click", function(event){
  event.preventDefault();
  openModal5.classList.add("active");
  popup.classList.remove("visually-hidden");
});

closeModal.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("visually-hidden");
  if (openModal1.classList.contains("active")) {
    openModal1.classList.remove("active");
  };
  if (openModal2.classList.contains("active")) {
    openModal2.classList.remove("active");
  };
  if (openModal3.classList.contains("active")) {
    openModal3.classList.remove("active");
  };
  if (openModal4.classList.contains("active")) {
    openModal4.classList.remove("active");
  };
  if (openModal5.classList.contains("active")) {
    openModal5.classList.remove("active");
  };
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.add("visually-hidden");
  }
  if (openModal1.classList.contains("active")) {
    openModal1.classList.remove("active");
  };
  if (openModal2.classList.contains("active")) {
    openModal2.classList.remove("active");
  };
  if (openModal3.classList.contains("active")) {
    openModal3.classList.remove("active");
  };
  if (openModal4.classList.contains("active")) {
    openModal4.classList.remove("active");
  };
  if (openModal5.classList.contains("active")) {
    openModal5.classList.remove("active");
  };
});
