//function with name
let a = 5;
let b = 3;
let c;
c = a + b;
console.log(c);
//...some code
a = 8;
b = 12;
c = a + b;
console.log(c);
//функція допомогає уникати дублювання

function sum (a, b){// a,b - параметри
    let c = a + b;
    //return c;//повернення результату, фініш
    console.log(c);
}
sum(8, 12)//коли викликаю то a, b - аргументи
console.log(sum(8, 12));//if return is present
//------------------------------------
//anonimous function
function(a, b){
    let c = a + b;
    console.log(c);
}

const anonimousFunc = function(a, b){
    let c = a + b;
    console.log(c);
}
anonimousFunc(1, 2);
//стрілочна функція
const arrowFunc = (a,b) => {
    let c = a + b;
    console.log(c);
}
arrowFunc(1,2);


//default value

const funcWithDefaultValue = (a, b = 2) => {
    return (a * b)
}
console.log(funcWithDefaultValue (3, 5));//15
console.log(funcWithDefaultValue (3));//6

//example with data

const myRequestWithDate = (field1, timestamp = Date()) => {
    let requestBody = {
        someDate: 1,
        someDate2: 2,
        timestamp: ''
    }
    requestBody.someDate = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}
console.log(myRequestWithDate('qweqwe', '876543234'));

const playWithReturnFunc = () => {   
    for(let i = 0; i < 8; i++){
        console.log(i);//від 0 і до 8 +1
        if(i === 6){
            return 'qwqeqweqwe'
        }
    }
}
//playWithReturnFunc();//output: 0,1,2,3,4,5,6
console.log(playWithReturnFunc());//...qweqweqwe

//callback function - (для неочевидних місць)виконання не по порядку
// - для затримок в тесті 
function first(){
    console.log('First');
}
first();

//setTimeout - штучна затримка
function someFunction(){
    console.log('hello');
}
setTimeout(someFunction, 5000) //5000 - miliseconds


function requst1(){
    setTimeout(function(){ //callback function
        console.log('First');//output second after 5sec
    }, 5000)
}
function srequest2 (){
    console.log('Second');
}
request1();
ewquest2();

function someFunctionWithCallback(param1, callbackFunction){
    console.log(`Here is my parametr: ${param1}`);//інтерполяція  (конкатинація через + param1)
    callbackFunction();
}
someFunctionWithCallback('parampasd', function(){
    console.log('Text from callback')
})

//example  - (Mocha library)
function it (testdescription, testAction){
    console.log('Here is my test description');
    testAction();
}

it('Auth test', () => {//callback function
    console.log('Some test actions...');
})
