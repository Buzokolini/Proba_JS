// Part 1
// if (2*4 == 7) {
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }

//Part 2
// let num = 50;

// if(num < 49) {
//     console.log("Неверно")
// } else if(num > 100) {
//     console.log("Многовато будет")
// } else {
//     console.log("Верно")
// };

// (num == 40) ? console.log("Верно") : console.log("Неверно");

// //Part 3

// switch (num) {
//     case num < 40:
//         console.log("Неверно");
//         break;
//     case num > 100:
//         console.log("Много");
//         break;
//     case num > 80:
//         console.log("Все еще много");
//         break;
//     case 50:
//         console.log("Угадал");
//         break;
//     default:
//         console.log("Что-то пошло не так");
//         break;

// }


//Циклы
let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(i)
}

//Прерывание цикла
for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break
    }
    console.log(i)
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
}