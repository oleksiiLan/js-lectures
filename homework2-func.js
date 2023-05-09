// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const mcDonalds = (hamburgher, hamburgerAndFries) => {
    if(hamburgher >= 4 && hamburgerAndFries >=1){
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
}
mcDonalds(4, 1);



// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

const price = (a) => {
    if (a >= 1000 && a <= 1900){
        console.log('The price is between 1000 and 1900');
    } else {
        console.log('false');
    }
}
price(1200);

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару
//     не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !,
//     а інший без цього оператора.
//     Результат виводити в консоль.

//3.1
const price31 = (a) => {
    if (!(a >= 1000 && a <= 1900)){
        console.log('The price is NOT between 1000 and 1900');
    } else {
        console.log('...between 1000 and 1900');
    }
}
price31(2200);
//3.2
function price32(x) {
    if (x <= 1000 || x >= 1900){
        return 'The price is NOT between 1000 and 1900';
    } else {
        return '...between 1000 and 1900';
    }
}
console.log(price32(1200));

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.
const season = (a) => {
    if (a === 1){
        console.log('Winter');
    } else if (a === 2){
        console.log('Spring');
    } else if (a === 3){
        console.log('Summer');
    } else if (a === 4){
        console.log('Autumn');
    } else {
        console.log('The season is not exist');
    }
}
season(4);

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
//     (не середнє арифметичне значення, 
//     а яке з трьох заданих чисел среднє за значенням) використовуючи 
//     оператор if-else.
//     Використати вкладені оператори if. Результат виводити в консоль.

function avgValue (a,b,c) {
    if (a > b && a > c) {
        if (b > c) {
            return b;
        } else {
            return c;
        } 
    } else if (b > a && b > c) {
        if(a > c){ 
            return a;
        } else {
            return c;
        }
    } else {
        if(a > b){ 
            return a;
        } else {
            return b;
        }
    }
}
console.log(avgValue(2,1,3));

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

const weekDays = (day) => {
    if (day === 1){
        return 'Today is Monday';
    } else if (day === 2) {
        return 'Today is Tuesday';
    } else if (day === 3) {
        return 'Today is Wednesday';
    } else if (day === 4) {
        return 'Today is Thursday';
    } else if (day === 5) {
        return 'Today is Friday';
    } else if (day === 6) {
        return 'Today is Saturday';
    } else if (day === 7) {
        return 'Today is Sunday';
    } else {
        return 'Error';
    }       
}
console.log(weekDays(1));

// 7.  За допомогою switch реалізуйте обчислення виразу, 
//     передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function calculate(x1, x2, operation) {
    let result;
    
    switch (operation) {
        case '+':
            result = x1 + x2;
            break;
        case '-':
            result = x1 - x2;
            break;
        case '*':
            result = x1 * x2;
            break;
        case '/':
            result = x1 / x2;
            break;
        default:
            result = 0;
            break;
    }
    console.log(`Result = ${result}`);
}
calculate(4,2,'*');


// 8.*  Використовуючи властивості рядків (тип string), 
//      та регулярний вираз (regular expression) видалити голосні букви
//      зі слова.
//      - а, е, и, і, о, у, я, ю, є, ї.

const removeV1 = (str,vowels) => {
    vowels = /[аеиіоуяюєї]/gi;
    removeVowels = str.replace(vowels, '_');
    return `Видалені голосні: ${removeVowels}`;
}   
console.log(removeV1("Добрий день"));


// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів 
//      в кілометри, так щоб в консоль виводився результат обчислень 
//      з правильним закінченням.
//      Наприклад: 1000 метрів це 1 кілометр;  
//                 32 метри це 0,032 кілометра і т.д.


function calc(metr) {
    let kilometers = metr / 1000;
    let endingMetr = "str";
    let endingKilometer = "str";
    
    if (metr % 10 === 1 && metr % 100 !== 11) {
      endingMetr = "метр";
    } else if ((metr % 10 === 2 || metr % 10 === 3 || metr % 10 === 4) && (metr % 100 !== 12 && metr % 100 !== 13 && metr % 100 !== 14)) {
      endingMetr = "метри";
    } else {
      endingMetr = "метрів";
    }
    
    if (kilometers % 10 === 1 && kilometers % 100 !== 11) {
      endingKilometer = "кілометр";
    } else if ((kilometers % 10 === 2 || kilometers % 10 === 3 || kilometers % 10 === 4) && (kilometers % 100 !== 12 && kilometers % 100 !== 13 && kilometers % 100 !== 14)) {
      endingKilometer = "кілометри";
    } else {
      endingKilometer = "кілометра";
    }
    
    return (`${metr} ${endingMetr} це ${kilometers} ${endingKilometer}`);
}
console.log(calc(0));  
console.log(calc(1));
console.log(calc(2));
console.log(calc(4));
console.log(calc(5));
console.log(calc(10));
console.log(calc(25));
console.log(calc(101));
console.log(calc(102));
console.log(calc(1000));