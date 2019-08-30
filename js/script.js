'use strict';

let money, time, appData, question1, question2, bugetDay;
money = +prompt('Ваш бюджет на месяц? ', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');
bugetDay = money / 30;

question1 = prompt('Введите обязательную статью расходов в этом месяце', '');
question1 = +prompt('Во сколько обойдется', '');

question2 = prompt('Введите обязательную статью расходов в этом месяце', '');
question2 = +prompt('Во сколько обойдется', '');

appData = {
    money,
    time,
    expenses: {
       question1, question2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Ваш бюджет на день составляет: ' + bugetDay.toFixed(2) + ' рублей');
console.log('appData: ', appData);