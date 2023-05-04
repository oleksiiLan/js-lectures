console.log('Запит даних з серверу ...');

setTimeout(() => {
    console.log('підготовка даних для відправки сервера ...');

    const product = {
        name: 'Laptop',
        price: 10000
    }

    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)
}, 10000)// setTimeout спочатку виконується, а потім все що в тілі функції
//====================================================

const req = new Promise((resolve, reject)= {});// resolve - коли дія виконалась успішно, reject - коли сталася помилка 

const req2 = new Promise ((resolve, reject) => {
    console.log('Запит даних з серверу ...');
    
    setTimeout(() => {
        console.log('підготовка даних для відправки сервера ...');
        const product = {
            name: 'Laptop',
            price: 10000
        }
        setTimeout(() => {
            product.status = 'inStock';
            console.log(product);
        }, 2000)

    }, 10000)
})
//====================================================

const req3 = new Promise ((resolve, reject) => {
    console.log('Запит даних з серверу ...');// 1
    
    setTimeout(() => {
        console.log('підготовка даних для відправки сервера ...');// 3
        const product = {  // створиться обєкт
            name: 'Laptop',
            price: 10000
        }
        resolve(product); // 4

    }, 10000) // 2 (timeout)
})

req3.then ((product) => { // result 
    //console.log('дані отримано');
    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)
})


//====================================================

const req4 = new Promise ((resolve, reject) => {
    console.log('Запит даних з серверу ...');// 1
    
    setTimeout(() => {
        console.log('підготовка даних для відправки сервера ...');// 3
        const product = {  // створиться обєкт
            name: 'Laptop',
            price: 10000
        }
        resolve(product); // 4

    }, 10000) // 2 (timeout)
})

req4.then ((product) => { // 5 
    const req5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000) //6 
    })

    req5.then(product => {
        console.log(product);
    })
})
//====================================================
const req8 = new Promise ((resolve, reject) => {
    console.log('Запит даних з серверу ...');// 1
    
    setTimeout(() => {
        console.log('підготовка даних для відправки сервера ...');// 3
        const product = {  // створиться обєкт
            name: 'Laptop',
            price: 10000
        }
        resolve(product); // 4

    }, 10000) // 2 (timeout)
})

req8.then ((product) => { // 5 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000) //6 
    })
}).then(product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product);
})

//====================================================
let error = true;
const req9 = new Promise ((resolve, reject) => {
    console.log('Запит даних з серверу ...');// 1
    
    setTimeout(() => {
        console.log('підготовка даних для відправки сервера ...');// 3
        
        const product = {  // створиться обєкт
            name: 'Laptop',
            price: 10000
        }
        if(error){
            reject(product);
        }
        resolve(product);

    }, 10000) 
})

req9.then ((product) => {  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'inStock';
            resolve(product);
        }, 2000) 
    })
}).then(product => {
    product.isModified = true;
    return product;
}).then( product => {
    console.log(product);
}). catch(product => {
    console.log('Error happened');
    console.log(product);
}).finally(() => {
    console.log('Finally')
})
