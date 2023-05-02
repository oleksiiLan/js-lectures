/*
------------------------------
1. Прості типи або примітивні 
- stirng  (text)
- number (123432)
- boolean (true/false)
- null
- undefined
- symbol
- bigint 
-------------------------------
2. Обєкти
- звичайни обєкт {}
- масиви
- обєкт дати
- регулярні вирази
- помилки
-------------------------------
*/

let number = 5;

let floatNumber = 5.5;

// infinity , NaN (not a number)

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity

console.log('string' * 4); //NaN

//boolean
let isExist = true;//false

//null, undefined

console.log(qweqweqwe);

let value = null;
console.log(value);

let value2;
console.log(value2);//undefined

//object
let obj ={};

let person = {
    name: "Olexii",
    age: 31,
    status: {
        one: 123,
        two: 456
    }
};
console.log(person.status.one);

let person1 = new Object(); // empty object
person1.name = "Andrii",
person1.age = 30

//console.log(person, person1);

//інтерполяція
console.log(`Name: ${person1.name}`);
console.log(`Age: ${person1.age}`);

let endpoint = 'help'
console.log(`https://someURL/${endpoint}`);

//array
let arr = ['text', 'some text', 6, {name: 123}, []];
//console.log(arr);
console.log(arr[0]);//text
console.log(arr[4]);


let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3};
console.log('1: ', numArr[0]);
console.log('a: ', numObj.a);

let salary = {
    'Anna': 1000,
    'Vlad': 1200
};
let salaryArr = ['Anna', 1000, 'Vlad', 1200]//в обєкті є пряма кореляція, в масиві важко читати

let someArrObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlad',
    3: 1200
};
//console.log(salaryArr[0]);
console.log(someArrObj[0]); //якщо обєкт приходить з ключами цифрами

let someArrObj2 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlad',
    d: 1200
};
console.log('b1: ', someArrObj2["b"]); //якщо обєкт приходить з ключами буквами

//change object
someArrObj2.b = 2000;
console.log('b2: ', someArrObj2["b"]);

let someText = "  Hello world 123";
console.log(someText.length);//output - 11
console.log(someText.substring(0, 6)); // cut the word : Hello
console.log(someText.toLocaleUpperCase());//output upper case : HELLO WORLD
console.log(someText.toLocaleLowerCase());
console.log(someText.indexOf('o'));//output place number of first 'o'
console.log(someText.trim());// reduce spaces
console.log(someText.charAt(5)); //output letter with number 5
console.log(someText[2]);//output 2nd place: letter 'H'

let myArr = [];
myArr.push("Доброго")
myArr.push("вечора")
console.log(myArr);//method push add an element to array
//console.log(myArr.length); //2
//console.log(myArr.join(" "));//add space
console.log(myArr.pop());//remove 1st element from myArr and output the last element
console.log(myArr);



let newmObj = {
    a:1, 
    b:2, 
    c:'asdfgh'
};

console.log(newmObj.a);
delete newmObj.a   //removed 1st element from object
console.log(newmObj);
console.log(newmObj.c.length);

let someNum = 12.4;
console.log(Math.round(someNum));// заокруглює число до цілого

let resolution = "12.2px"
console.log(parseInt(resolution)); //витягнути заокруглене число
console.log(parseFloat(resolution)); // витянути число

