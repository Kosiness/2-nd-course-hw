// Задание 1 //
let str = 'бананааа';
console.log(str.toUpperCase());

//Задание 2 //

const words = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';
const searchOne = 'нос';

words.forEach((word) =>{
   if (word.toLowerCase().includes(search.toLowerCase())) {
        console.log(word);
    }
    if (word.toLowerCase().includes(searchOne.toLowerCase())) {
        console.log(word);
    }
})

// Задание 3 //

let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

// Задание 4 //

const arr = [52, 53, 49, 77, 21, 32];
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(max);
console.log(min);

// Задание 5 //

function getRandomNumb(numbMin, numbMax) {
    return Math.round(Math.random() * (numbMax - numbMin) + numbMin);
    
}
console.log(getRandomNumb(1, 10));

// Задание 6 //

function getRandomNumb(num) {
    const arrLen = Math.floor (num/2);
    const result = [];
    
    for (let i = 0; i < arrLen; i++) {
        const random = Math.floor(Math.random()*(num+1));
        result.push(random);
    }
    return result;
}
console.log(getRandomNumb(7));
console.log(getRandomNumb(12));

// Задание 7 //

function getRandomNumber(numb, numbs) {
    return Math.round(Math.random() * (numbs - numb) + numb);
    
}
console.log(getRandomNumber(2, 11));

// Задание 8 //

let myDate = new Date();
console.log(myDate);

// Задание 9 //
let currentDate = new Date();
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate);


//let currentDay = new Date();
//let day74 = 74*24*60*60*1000;
//let day = currentDay.setMilliseconds(day74);
//let dayFut = new Date(day);
//console.log(dayFut);




// Задание 10 //
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const exer10 = (currentDate) => {
    let date = currentDate.getDate();
    if(date<10) {
        date = "0" + date;
    }

    let month = months[currentDate.getMonth() - 1];
    let day = days [currentDate.getDay()];
    let hours = currentDate.getHours();

    if(hours<10) {
        hours = "0" + hours;
    }

    let min = currentDate.getMinutes();
    if(min <10) {
        min="0"+min;
    }

    let sec = currentDate.getSeconds();
    if(sec<10) {
        sec="0"+sec;
    }

    console.log(`Дата: ${date}.${month}.${currentDate}`);
    console.log(`Время: ${hours}.${min}.${sec}`);

}
exer10(new Date(prompt(`Введите год`), prompt(`Введите мясяц`), prompt(`Введите день`),prompt(`Введите час`), prompt(`Введите минуты`), prompt(`Введите секунды`)));

exer10(currentDate = new Date);

