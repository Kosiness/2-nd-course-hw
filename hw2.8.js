// Задание 1 //
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort((a, b)=> a.age > b.age ? 1 : -1);
 console.log(people.sort());

 // Задание 2 //

 function isPositive(el) {
    return el >= 0;
    }
    function isMale(el) {
    return el.gender === 'male';
    
    }
    function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0;i < arr.length;i++){
        if(ruleFunction(arr[i]))
        output.push(arr[i]);
    }
    return output;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const peoples = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peoples, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

    // Задание 3 //

    let timer = setInterval (() => {console.log(new Date());},3000);
    setTimeout (() => {clearInterval(timer); console.log("30 секунд прошло");}, 1000*30);

    // Задание 4 //

    function delayForSecond(callback) {
        setTimeout(() => {
            callback();
        }, 1000);
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })

   // Задание 5 //

   // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond((cb) => sayHi('Глеб'));