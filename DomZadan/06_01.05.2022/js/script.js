let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('li'),
    title = document.querySelector('#title'),
    adv = document.getElementsByClassName('adv')[0],
    otvetRes = document.querySelector('#prompt');


    menu.insertBefore(menuItem[2], menuItem[1]);

    menuItemLi.classList.add('menu-item');
    menu.appendChild(menuItemLi);
    menuItemLi.textContent = "Пятый пункт";

    document.body.style.backgroundImage = "url(img/apple_true.jpg)";

    title.textContent = "Мы продаем только подлинную технику Apple";

    adv.remove();

    let qwe = prompt('Как вы относитесь к технике apple?', '');
    otvetRes.textContent = qwe;

