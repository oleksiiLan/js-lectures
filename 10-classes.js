class Parent {
  constructor(name, age) {
    this.firstname = name;
    this.lastName = "Lan";
    this.age = age;
  }

  greeting() {
    console.log("Hey");
  }

  tellName() {
    console.log(`My name is ${this.firstname} ${this.lastName}`);
  }

  tellAge() {
    console.log(`My age is ${this.age}`);
  }

  tellJobTitle() {
    if (this instanceof Child) {
      console.log("I do not work yet"); //якщо Child, якщо ні то не виводить
    } else {
      this.job = "QA";
      console.log(`My job title is ${this.job}`);
    }
  }
}

class Child extends Parent {
  greeting() {
    console.log("Hey It is a child greeting"); //перепризначемо метод батьківського класу
  }
  //не доступні для батьківського класу
  goToSchool() {
    console.log("I like to go to school");
  }
}

const user = new Parent("Olexiy", 32); //екземпляр класу
const sofia = new Child("Sofia", 6); //екземпляр класу

console.log("Parent");
user.greeting();
user.tellName();
user.tellAge();
user.tellJobTitle();
console.log(user);

console.log("-----------------------");

console.log("Child");
sofia.greeting();
sofia.tellName();
sofia.tellAge();
sofia.tellJobTitle();
sofia.goToSchool();
console.log(sofia);
