//........................................................... Стили для слайдера

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    removeClass();
    addClass(n);
    let i;
    let slides = document.getElementsByClassName("slider-item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 

}

// Удаляем стили у навигации
function removeClass(){
    let items = document.querySelectorAll('.slider-navigation-item');

    for(item of items){
        item.classList.remove("current");
    }
    
}

// Добавляем стили к навигации
function addClass(index){
    let items = document.querySelectorAll('.slider-navigation-item');

    if (index > items.length) {
        index = 1
      }
      if (index < 1) {
          index = items.length
      }

    items[index-1].classList.add('current');
    
}


//........................................................... Стили для слайдера- конец

//........................................................... Стили для Меню

function showMenu (item){
    item.classList.add("navbar-menu_active")
}

function hideMenu (item){
    item.classList.remove("navbar-menu_active")
}

function toggleMenu(){
    let menu = document.querySelector(".navbar-menu")
    if(menu.classList.contains("navbar-menu_active")){
        hideMenu(menu)
    }else{
        showMenu(menu)
    }


}

//........................................................... Стили для Меню - конец

//........................................................... Стили для модалки

function showModal(){

    let elem = document.querySelector(".action-modal")
    elem.classList.remove("hidden")
}


function hideModal(){

    let elem = document.querySelector(".action-modal")
    elem.classList.add("hidden")
}