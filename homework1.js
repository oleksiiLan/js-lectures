// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburher = 3;
let hamburgerAndFries = 1;
if(hamburher >= 3 && hamburgerAndFries >=1){
    console.log('Ми поїли');
} else {
    console.log('Ми йдемо в інше кафе');
}


// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

let price = 1200;
if (price >= 1000 && price <= 1900){
    console.log('The price is between 1000 and 1900');
} else {
    console.log('false');
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару
//     не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !,
//     а інший без цього оператора.
//     Результат виводити в консоль.
//3.1
let price31 = 1200;
if (!(price31 >= 1000 && price31 <= 1900)){
    console.log('The price is NOT between 1000 and 1900');
} else {
    console.log('...between 1000 and 1900');
}
//3.2
let price32 = 200;
if (price32 < 1000 || price32 > 1900){
    console.log('The price is NOT between 1000 and 1900');
} else {
    console.log('...between 1000 and 1900');
}

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

const season = 2;
if (season == 1){
  console.log('Winter');
} else if (season == 2){
  console.log('Spring');
} else if (season == 3){
  console.log('Summer');
} else if (season == 4){
    console.log('Autumn');
} else {
    console.log('The season is not exist');
}
// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
//     (не середнє арифметичне значення, 
//     а яке з трьох заданих чисел среднє за значенням) використовуючи 
//     оператор if-else.
//     Використати вкладені оператори if. Результат виводити в консоль.
let a = 28;
let b = 6;
let c = 12;
let averageValue;

if (a > b && a > c) {
    if (b > c) {
        averageValue = b
    } else {
        averageValue = c
    } 
} else if (b > a && b > c) {
    if(a > c){ 
        averageValue = a;
    } else {
        averageValue = c;
    }
} else {
    if(a > b){ 
        averageValue = a;
    } else {
        averageValue = b;
    }
}

console.log(`| ${a} | ${b} | ${c} |   Average value : ${averageValue}`) ;

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let weekDay = 7;
switch(weekDay){
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    case 7:
        console.log('Today is Sunday');
        break;
    default:
        console.log('Error');
        break;
}
// 7.  За допомогою switch реалізуйте обчислення виразу, 
//     передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let x1 = 4;
let x2 = 2;
let sum;
let operation = '/'

switch (operation) {
    case '+':
        sum = x1 + x2;
        console.log("sum = " + sum);
    break;
    case '-':
        sum = x1 - x2;
        console.log("sum = " + sum);
    break;
    case '*':
        sum = x1 * x2;
        console.log("sum = " + sum);
    break;
    case '/':
        sum = x1 / x2;
        console.log("sum = " + sum);
    break;
    default:
        sum = 0
        break;
}

// 8.*  Використовуючи властивості рядків (тип string), 
//      та регулярний вираз (regular expression) видалити голосні букви
//      зі слова.
//      - а, е, и, і, о, у, я, ю, є, ї.
let str = "Добрий день";
let strVowels = /[аеиіоуяюєї]/gi;
let removeVowels = str.replace(strVowels, '_');
//console.log(someText.trim()); //reduce space
//console.log(str.length);
console.log('Видалені голосні: ', removeVowels);

// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів 
//      в кілометри, так щоб в консоль виводився результат обчислень 
//      з правильним закінченням.
//      Наприклад: 1000 метрів це 1 кілометр;  
//                 32 метри це 0,032 кілометра і т.д.
let metr = 1000;
let calc = metr/1000;
//let calcKm = calc/100;
//console.log(calculateKm);
  //if (metr <= 1){
    console.log(`${metr} ${metr % 10 === 1 ? 'метр' : metr % 10 === 0 ? 'метрів' : 'метри'} це ${calc} ${calc % 10 === 1 ? 'кілометр' : calc % 10 === 0 ? 'кіломертрів' : 'кілометри'}`);
    //        console.log(`${metr} метр це ${calc} кілометра`)
  //} 
//   } else if (metr >= 2 && metr <=4){
//     console.log(`${metr} метри це ${calc} кілометра`);
//   } else if (metr >= 5 && metr < 999){
//     console.log(`${metr} метрів це ${calc} кілометра`);
//   } else if (metr >= 1000 && metr < 10000){
//     console.log(`${metr} метрів це ${calc} кілометр`);
//   }



