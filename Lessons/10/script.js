// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContenyLoaded', function() {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e) {
        e.preventDefault();
        console.log("Red box: touchstart");
        console.log(e.target);
        console.log(e.touches[0].target);
        console.log(e.changedTouches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });

    box.addEventListener('touchend', function(e) {
        e.preventDefault();
        console.log("Red box: touchend");
    });

    // new RegExp('pattern', 'flags');
    // /pattern/
});
    // let ans = prompt('Введите ваше имя');

    // let reg = /n/gi;

    // console.log(ans.search(reg));
    // console.log(ans.match(reg));
    // console.log(reg.test(ans));

    // flag
    // i registr
    // g global vse vxozdeniya
    // m mnogostrochnost

    // class
    // \d zifri  \D ne zifri
    // \w bukvi  \W ne bukvi
    // \s probel  \S ne probel

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g, "*"));
    // alert('12-34-57'.replace(/-/g, '+'));

    // let ans = prompt('Введите число');

    // let reg = /\d/g;
    
    // console.log(ans.match(reg));

    let str = "My name/ is R2D2";
    console.log(str.match(/\w\d\w\d/i));
    console.log(str.match(/\//i));