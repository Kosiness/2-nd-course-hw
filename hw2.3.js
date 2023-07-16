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
    case '1' :
        console.log('Январь , зима');
        break;
    case '2' :
        console.log('Февраль , зима');
        break;
    case '3' :
        console.log('Март , весна');
        break;
    case '4' :
        console.log('Апрель , весна');
        break;
    case '5' :
        console.log('Май , весна');
        break;
    case '6' :
        console.log('Июнь , лето');
        break;
    case '7' :
        console.log('Июль , лето');
        break;
    case '8' :
        console.log('Август , лето');
        break;
    case '9' :
        console.log('Сентябрь , осень');
        break;
    case '10' :
        console.log('Октябрь , осень');
        break;
    case '11' :
        console.log('Ноябрь , осень');
        break;
    case '12' :
        console.log('Декабрь , зима');
        break;

    default :
        console.log('Такого месяца не существует!')
        break;
        
}


