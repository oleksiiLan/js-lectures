//let number = 5;//possible to change
//const userScore = 100;//impossible to change - constanta



//pattern
// 1.camelCase (variables)
// 2.snake_case (constanta, etc.)
// 3.UPPER_SNAKE_CASE (constanta)
// 4.kebab-case (file, directory)
// 5. PascalCase (class)

let nUmber = 123; //different from number variable

let number = 5
console.log(number);

number = 12;//new value for number
console.log(number);


const userScore = 100;
console.log(userScore);


const obj = {
    age: 20
}
console.log(obj);

obj.age = 30
console.log(obj);

var firstname = 'Alex'//stay in memory of computer befor creating
console.log(firstname);

//область видимості змінних
{
    let result = 50;//exception
}
console.log(result);

{
    var result1 = 50;//available
}
console.log(result1);

a = 10;
console.log(a);
alert();
[].push('a')

//привильно називати змінні
let a = 3000;
let b = 2000;
//....100 lines of code
console.log("Ширина авто: " + a + ", довжина: " + b);

let width = 3000;
let length = 2000;
console.log("Ширина авто: " + width + ", довжина: " + length);
//best practice for naming variables
let vehicleBodyWidth = 3000;
let vehicleBodyLength = 2000;
console.log("Ширина авто: " + vehicleBodyWidth + ", довжина: " + vehicleBodyLength);




