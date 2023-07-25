//Задание 1//
let password = 'horse';
let SayPassword = prompt('Введите пароль');
   
if (SayPassword === password){
    alert('Пароль введен верно');
}else {
    alert('Пароль введен неправильно');
}

// Задание 2 //

let numbr = Number(prompt('Введите число'));
if (numbr > 0 && numbr < 10) {
    console.log('Верно');

}else {
    console.log ('Неверно')
}


// Задание 3 //

let d = prompt ('Введите первое число');
let e = prompt ('Введите второе число');
if ( d > 100 || e > 100) {
    alert ('Верно');
} else {
    alert('Неверно')
}

// Задание 4 //
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
a = Number(a);
b = Number(b);
alert(a+b);

// Задание 5 //

let MounthNumber = prompt('Введите число месяца');

switch(MounthNumber) {
    case '1':
    case '2': 
    case '12': 
console.log('Зима');
    break;
    case '3':
    case '4':
    case '5':
console.log('Весна');
    break;
    case '6':
    case '7':
    case '8':
console.log('Лето');
    break;
    case '9':
    case '10':
    case '11':
console.log('Осень');
    default :
        console.log('Такого месяца не существует!')
        break;
        
}




//Задания 2.1/////////////////

// Задание 1//
let a = 10;
alert (a);
a = 20;
alert (a);

// Задание 2 //

let iPhone = "9 января 2009 года";
alert (iPhone);

// Задание 3 //

let creator = 'Брендан Эйх';
alert (creator);

// Задание 4 //

let b = 10;
let c = 2;
alert (b+c);
alert (b-c);
alert (b*c);
alert (b/c);

// Задание 5 //

let result = 2**5;
alert (result);

// Задание 6 //

let A = 9;
let B = 2;
alert (A%B);

// Задание 7 //

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
--num;
alert(num);

// Задание 8 //

let age = Number(prompt(`Сколько тебе лет ?`));
alert (age);

// Задание 9.0 //

let user = {
    name: 'Джигурда',
    age: 62,
    isAdmin: true
}

// Задание 9.1 //

user ['city of residence'] = 'Москва';

// Задание 9.2 //

user.age = 60;

// Задание 9.3 //

delete user ['city of residence'];

// Задание 9.4 //

let info = prompt ("Какую информацию хотите узнать o пользователе?");
console.log(user[info]);
alert (user[info]);

// Задание 10 //

let userName = prompt('Введите ваше имя');
alert (`Привет, ${userName}!`);




