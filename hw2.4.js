// Задание 1 //
for (let a = 1;a < 3; a++ ) {
console.log ('Привет');
}

//Задание 2 //

for (let b = 1;b < 6;b++ ) {
    console.log(b);
}

// Задание 3 //

let c = 7 ;
while (c < 23) {
    console.log(c);
    c++;
}

// Задание 4 //

let obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}

for (key in obj) {
    console.log([key] + ' - Зарплата ' + obj[key]+ ' долларов');
}

// Задание 5 //

let n = 1000; sum = 0;
while (n >= 50) {
    n=n/2;
    sum ++;
}
console.log( 'Интераций : ' + sum + ", получилось число " + n);

// Задание 6 //

let friday = 4;

do {
    console.log (`Сегодня пятница, ${friday} + -e число.Необходимо подготовить отчет.`);
    friday = friday+7;
    
} while (friday <=31);

// Почему то,когда вставляю ${} он не выделяется никак..


