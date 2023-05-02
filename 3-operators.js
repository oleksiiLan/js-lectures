console.log('arr' + '- object');//concatination

console.log(2 + 2);

console.log(2 + '2');//22
console.log(2 + + '2'); //4

//increment, decrement (постфіксна.префіксна)
let incr = 10;
let decr = 10;

//incr++;//increment
//decr--; //decrement

//console.log('incr: ', incr);
//console.log('decr: ', decr); 
//post
console.log(incr++); 
console.log(decr--);
//pre
console.log(++incr);
console.log(--decr);

console.log(5 < 2); //false
console.log(5%2);//ділення - виводить остачу
 
console.log(2*4 == 8);// comparing: true
console.log(2*4 == '8'); //true
console.log(2*4 === '8');//false - тому що === строго порівнює


// adn/or operators

let isChecked = true;
let isClosed = true;

console.log(isChecked && isClosed);//true
console.log(isChecked || isClosed);// якщо хочаб один з виразів true тоді виводить тру
console.log(isChecked || !isClosed);
console.log(isChecked && !isClosed);//operator ! (ne)
//ex#1
let hamburger = true;
let fries = true;
 if (hamburger&&fries){
    console.log('Я ситий');
 } else {
    console.log('Я голодний');
 };

 //ex#2
let hamburger1 = 5;
let fries1 = 0;
 if (hamburger1&&fries1){
    console.log('Я ситий');
 } else {
    console.log('Я голодний');
 };

 //console.log(hamburger1&&fries1);//повертає значення на якому закінчилась умова

//false = 0; "" ; null; undefined; NaN

// 3 gamburgers with cola or 2 portion of nuggets and 2 portion of fries
let hamburgers = 2;
let cola = 2;
let nuggets = 2;
let fries2 = 2;

if(hamburgers >= 3 && cola || nuggets >= 2 && fries2 >= 2){
   console.log("всі поїли");
} 

