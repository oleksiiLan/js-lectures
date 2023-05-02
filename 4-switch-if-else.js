//умови - if-else
 if (4 == 9){
    console.log('Expression true');
 } else {
    console.log('Expresiom is false');
 }
//-----------------
 if (4 == 9){
    console.log('Expression true');
 } else {
    console.log('Expresiom is false');
 }

 let num = 50;
  if (num < 49){
    console.log('error');
  } else if (num > 100){
    console.log('some big number');
  } else {
    console.log('ok');
  }


  //ternary opperator
let num1 = 50;
(num1 === 50) ? console.log('ok') : console.log('error');

//switch-case - if a lot of conditions use
let number = 50;
switch(number){
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
    case 51:
        console.log('Your value is 51');
        break;
    case 52:
        console.log('Your value is 52');
        break;
    default:
        console.log('This is default output');
        break;
}

//якщо купуєте bmw то в консоль bmw, Audi, Mercedes, Ford

let car = 'Audi';

let car1 = 'BMW';

switch(car){
    case car1: 
        console.log('Я тепер власник BMW');
        break;
    case car: 
        console.log('Я тепер власник Audi');
        break;
    case 'Mercedes': 
        console.log('Я тепер власник Mercedes');
        break;
    case 'Ford': 
        console.log('Я тепер власник Ford');
        break;  
    default:
        console.log('Поки хожу пішки');
        break;  
}