'use strict'

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: "",
    savings: false,
};

var q1 = prompt("Введите обязательную статью расходов в этом месяце");
var howmuch1 = parseFloat (prompt("Во сколько обойдется?"));
var q2 = prompt("Введите обязательную статью расходов в этом месяце");
var howmuch2 = parseFloat (prompt("Во сколько обойдется?"));

appData.expenses[q1] = howmuch1;
appData.expenses[q2] = howmuch2;

let totalExpenses = howmuch1 + howmuch2;
let onedaybudget = (appData.budget - totalExpenses) / 30;

alert("Бюджет на 1 день: " + onedaybudget.toFixed(2));
