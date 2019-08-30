'use strict';

let money, time, appData;
money = +prompt('Ваш бюджет на месяц? ', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q2 = +prompt("Во сколько обойдется?", ''),
    q3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q4 = +prompt("Во сколько обойдется?", '')

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

alert('Ваш бюджет на день составляет: ' + appData.budget/30 + ' рублей');
console.log('appData: ', appData);