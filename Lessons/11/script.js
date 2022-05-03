// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);


// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello,world');
// }

// let timerId = setTimeout(function log() {
//     console.log("Hello");
//     setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

    function myAnimation () {
        let pos = 0;

        let id = setInterval(frame, 10);
        function frame () {
            if (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.getElementsByClassName.top = pos + 'px';
                elem.getElementsByClassName.left = pos + 'px';
            }
        }
    }

btn.addEventListener('click', myAnimation);

let btnBlok = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('BUTTON');

    btnBlok.addEventListener('click', function(event) {
        if (event.target && event.target.tagName == 'BUTTON') {
            console.log('Hello');
        }
    });

    let btnBlok1 = document.querySelector('.btn-block'),
    btns1 = document.getElementsByTagName('BUTTON');

    btnBlok.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('first')) {
            console.log('Hello');
        }
    });
   
    let btnBlok2 = document.querySelector('.btn-block'),
    btns2 = document.getElementsByTagName('BUTTON');

    btnBlok.addEventListener('click', function(event) {
        if (event.target && event.target.matches('button.first')) {
            console.log('Hello');
        }
    });