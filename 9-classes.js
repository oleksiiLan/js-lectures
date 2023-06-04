//cтатичні методи доступні тільки в середині класів. потрібно для реалізації якоїсь логіки 
class Comment{
    //конструктор 
    constructor(text){
        this.text = text
        this.likesQuantity = 0

    }
    //dynamic
    addLike(){
        this.likesQuantity += 1
        
    }
    //static
    static mergeComments(first, second){
        return `${first} ${second}`
    }
}

let merged = Comment.mergeComments('First comment', 'Second comment')
console.log(merged);

const newComment = new Comment('Some new comment')

console.log(newComment);

newComment.addLike()
console.log(newComment);

newComment.mergeComments('qweqwe', '123123123123')//error
console.log(newComment);