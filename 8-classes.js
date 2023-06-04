class Comment{

    //конструктор - заготовлена функція. 
    //задаємо властивості класу (статитчна властивість)
    constructor(text){
        this.text = text
        this.likesQuantity = 0//кількість likes
    }

// let comment = {
//     text: "qweqwe",
//     likesQuantity: 0
// }

    // method - динамічна властивість
    addLike(){
        //якась функція у нашого обєкту - додажм лайки
        this.likesQuantity += 1
        //this.likesQuantity = this.likesQuantity + 1
    }

}//обєкт коментаря

const firstComment = new Comment('This is comment text');//екземпляр класу

//виводимо властивості класу
console.log(firstComment);//весь обєкт
console.log(firstComment.text);//текст
console.log(firstComment.likesQuantity);//квонтіті


//виклик методу
firstComment.addLike();

console.log(firstComment);
console.log(firstComment.text);
console.log(firstComment.likesQuantity);







const secondComment = new Comment("secondComment");
const thirdComment = new Comment("thirdComment")

secondComment.addLike();
thirdComment.addLike();
console.log(`secondComment: ${secondComment.likesQuantity}`);//1
console.log(`third Comment: ${thirdComment.likesQuantity}`);//1

secondComment.addLike();
thirdComment.addLike();
console.log(`secondComment: ${secondComment.likesQuantity}`);//2
console.log(`secondComment: ${secondComment.likesQuantity}`);//2

