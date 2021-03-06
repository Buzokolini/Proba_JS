'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }

}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
        a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else  {
            i = i - 1;
        }
    };
}      
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budjet / 30).toFixed();
    alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей");
}

appData.moneyPerDay = (appData.budjet / 30).toFixed();

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay + " рублей");

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        alert("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка");
    } else {
        alert("Что-то пошло не так");
    }
}
detectLevel();


function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какиая сумма у вас на депозите?"),
            percent = +prompt("Какой процент у депозита?");

        appData.monthIncom = (save/100/12*percent).toFixed();
        alert("Ваш доход в месяц составляет: " + appData.monthIncom);
    }
}
checkSavings();

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
        let a = prompt("Введите дополнительную статью расходов в этом месяце", '');
        
        if((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            
            appData.optionalExpenses[i] = a;
        } else  {
            i = i - 1;
        }
    };
}
chooseOptExpenses()