//while

let num = 50;

while (num < 90){
    console.log(num);//infinite loop
}

let num1 = 80;

while (num1 < 90){
    console.log(num1);
    num1++;
}

//do - while

let num2 = 80;

do{
    console.log(num2);
    num2++;
} while(num2 < 90)

//for

for(let i =1; i < 8; i++){
    console.log(i);
}

num = 10;
for(let i = 1; i < 7; i++){//7 ітерацій
    console.log(num);//num +1
    num++;
}

num = [1,2,3,4];
for(let i = 0; i < num.length; i++){
    console.log(num);
    num++;
}

num = 10
for(let i = 1; i < 1; i++){
    console.log(num);
    num++;
}


//зупинити цикл при певних умовах
num = 0
for(let i = 0; i < 8; i++){
    if(num === 5){
        break;
    }
    console.log(num);
    num++;
}
//continue


//цикл в середині цикла

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`j = ${j}`);
    }
}
//задача з виводом зірочок


for(let i = 0; i < 1; i++){
    console.log(`*`);
    for(let j = 0; j < 1; j++){
        console.log(`**`);
        for(let k = 0; k < 1; k++){
            console.log(`***`);
        }
    }
}