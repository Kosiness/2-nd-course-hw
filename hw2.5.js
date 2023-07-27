// Задание 1 //

function comparison (a, b) {    //const comparison = (a, b) => {
    
    if (a <=b) {
        return a;
    } else {
        return b;
    }
}
console.log (comparison(8, 4));
console.log (comparison(6, 6));

// Задание 2 //

function numb(number) {        //const numb = (number) => {
    
    if(number % 2 == 0) {
        return ( "Четное число")
    }else{
        return ( "Нечетное число")
    }
}
console.log(numb(7));

// Задание 3.1 //

function num (b) {
    console.log(b * b); // b**2;
}
num (5);

// Задание 3.2 //

function numbs(c) {
    return c * c; // c**2;
}
console.log (numbs(4));

// Задание 4 //

"use strict"

let age = prompt ( "Сколько вам лет?");

if (age < 0) {
    function printMessage() {
        console.log ( "Вы ввели неправильное значение");
    }
} else if ( age >=0 && age <= 12 ) {
    function printMessage() {
        console.log ("Привет,друг!");
    }
} else {
    function printMessage() {
        console.log("Добро пожаловать!");
    }
}

printMessage();

// Задание 5 //

function number(e, f) {

    if ( isNaN(e) || isNaN(f)) {
        return ("Одно или оба значения не являются числом");
    } else {
        return e * f;
    }

}
console.log ( number(7, 8));
console.log ( number('e', 2));

// Задание 6 //

let userNumb = prompt("Назовите число");

if ( isNaN(userNumb)){
    function answer(params) {
        console.log("Переданный параметр не является числом");
    }

} else {
    function answer (params){
    console.log(`${userNumb} в кубе равняется ${ userNumb ** 3}`); 
    }

}
answer();
// Задание 7 //

function getArea () {
    return 3.14 * this.radius **2;
}

function getPerimetr(){
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius : 10,
    getAreaCircle : getArea,
    getPerimetrCircle : getPerimetr,
};

const circle2 = {
    radius : 10,
    getAreaCircle : getArea,
    getPerimetrCircle : getPerimetr,
};

console.log(circle1.getAreaCircle());
console.log(circle1.getPerimetrCircle());
console.log(circle2.getAreaCircle());
console.log(circle2.getPerimetrCircle());

// Задание 8 //



