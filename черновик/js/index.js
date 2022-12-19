// Добавляем для меню с бургером класс open для включения бургера,
// тут ищется элемент с нужным id при нажатии на котрый в блоке с нужным классом 
// добавится новый класс open. В querySelector() в скобочки пишем класс с точкой,
// вот так: .header__bottom-menu , если без точки то это уже 
// к элементам типо div a span header  и проч будет добавляться
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header__bottom-menu").classList.toggle("open")
    })
})