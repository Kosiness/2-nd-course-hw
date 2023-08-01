// Задание 1 //
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <num.length; i++) {
    if (num[i] == 10)
    break;
    console.log(num[i]);
}

// Задание 2 //

const numbs = [1, 5, 4, 10, 0, 3];

for(let i in numbs){
    if(numbs[i]===4){
        console.log(i);
        break;
    }
}

for(let i = 0; i < numbs.length;i++){
    if(numbs[i]===4){
    console.log(i);
    break;
    }
}
console.log(numbs.indexOf(4));



// Задание 3 //

let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);

//Задание 4 //

let arr = [];
for (let i =0; i<3; i++){
    arr[i]=[];
    for(let j = 0; j<3; j++){
    arr [i][j]=1;
    }
}
console.log(arr);

// Задание 5 //

const number = [1, 1, 1];

for ( let i = 0; i <3; i++){
    number.push(2)
}

console.log(number);

//number.push(2, 2, 2);    Или так!
//console.log(number);

// Задание 6 //

let exerciseSix = [9, 8, 7, 'a', 6, 5];
exerciseSix.sort();
exerciseSix.pop();
console.log(exerciseSix);

// Задание 7 //
let exerSeven = [9, 8, 7, 6, 5];
let unswerUser = Number(prompt( "Введите число от 0 до 9"));
exerSeven.includes(unswerUser) ? console.log("Все верно!") : console.log("Неправильно!");

// Задание 8 //

let word = 'abcdef';
let drow = word.split('').reverse().join('');
console.log(drow);

// Задание 9 //

const exerNine = [[1, 2, 3,],[4, 5, 6]];
let result = exerNine[0].concat(exerNine[1]);
console.log(result);

// Задание 10 //

let exerTen = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
let resultTen;
for (let i = 0; i < exerTen.length-1; i++) {
    console.log(resultTen = exerTen[i] + exerTen[i+1])
}

// Задание 11//

let exerEleven = [ 2, 4, 6, 8, 10];
const resultEleven = exerEleven.map((mult) => mult**2);
console.log(resultEleven);


// Задание 12 // 

let exer12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLengthWords = function(word) {
    let resultExer12 = word.map((el)=>el.length);
    return resultExer12;
}
console.log(getLengthWords(exer12));

// Задание 13// 
function filterPositive(array) {
    let minus = [];
    for(const item of array) {
        if (item<0) minus.push(item)
    };
    return minus;
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
  console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]






