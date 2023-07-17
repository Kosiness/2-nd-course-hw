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


