//1
let person ={
    name:"Ayaulym",
    age:18,
    city:"Astana"
};
console.log(person);

//2
console.log(person.name);
console.log(person.age);
person.city="Almaty";
console.log(person);


//3
let adam={
    name:"Adeliya",
    age:17,

    greet(){
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
    }
};
adam.greet();


//4
let obj1={a:10,b:20};
let obj2={a:10,b:20};
console.log(obj1==obj2);
console.log(obj1===obj2);
//false так как два разных объектов,сравнивают ссылки а не содержимое


//5
let book={
    title:"Гордость и предубеждение",
    author:"Джейн Остен",
    details:{
        year:1813,
        pages:410
    }
};

let copyBook=Object.assign({},book);
copyBook.details.year=1814;
console.log(book);
console.log(copyBook);
//біз вложенный объекті бөлек көшіре алмаймыз сондықтан екеуінің мәні бір болып тур копиясы бар бірақ details обьекты общий


//6
let calculator={
    a:15,
    b:3,

    sum(){
        console.log(this.a + this.b);
    },

    multiply(){
        console.log(this.a * this.b);
    }
};
calculator.sum();
calculator.multiply();


//7
const car={
    brand:"BMW",
    model:"M4"
};

car.model="M3";
console.log(car);

//const не предотвращает изменение содержимого объектов. const только гарантирует, что переменная не может быть переназначена на другой объект , но свойства и элементы внутри него могут быть изменены.
