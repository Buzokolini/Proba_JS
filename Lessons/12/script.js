let box = document.querySelector('.box'),
    btn = document.querySelector('buttin');
    

let width = document.clientWidth,        //без полосы прокрутки
    height = document.clientHeight;

let width1 = document.offsetWidth,      //с полосой прокрутки
    height1 = document.offsetHeight;

let width2 = document.scrollWidth,      //вся ширина и высота страницы
    height2 = document.scrollHeight;

btn.addEventListener('click', function() {
    box.style.height2 = box.scrollHeight + 'px';
});

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());           //получает значения left, right? top, bottom
console.log(box.getBoundingClientRect().left);

console.log(document.docymentElement.clientWidth);  //ширина документа
console.log(document.docymentElement.clientHeight); //ширина документа
console.log(document.docymentElement.scrollTop);    //сколько мы прокрутили документ от верха
console.log(document.docymentElement.scrollTop);    //сколько мы прокрутили документ от верха

scrollBy(0, 200); //перемещает от текущего местоположения
scrollTo(0, 200); //перемещает в указанные координаты
