//1
let number = 10; 
console.log(number); 

const name = "Ayau";
console.log(name);
//const не меняется так как она константа, а let можно менять

//2
//var уже не используется, так как она устарела и имеет много проблем, он не надежный и не безопасный так как можно менять переменные


//3
let int = 7;
console.log(int);

let float = 7.5;
console.log(float);

let string = "Data types";
console.log(string);

let boolean = true;
console.log(boolean);

let null1 = null;
console.log(null1);

let undefined1;
console.log(undefined1);

let Nan = NaN;
console.log(Nan);

//4
let num = 19;
let str = String(num);
//тут с помощью функции String мы преобразовали число в строку,это используется в некоторых случаях, например когда нужно объединить число со строкой

let null2 = null;
let str2 = String(null2);
//мы тут преобразовали null в строку, это используется когда нужно объединить null со строкой
console.log(str2);

let undefined2 = undefined;
let str3 = String(undefined2);
//а здесь мы преобразовали undefined в строку, это используется когда нужно объединить undefined со строкой
console.log(str3);

let null3 = null;
let str4=Number(null3);
//а тут мы преобразовали null в число, это используется когда нужно сделать математические уравнения с null
console.log(str4);

let undefined3 = undefined;
let str5=Number(undefined3);
//а тут мы преобразовали undefined в число, это используется когда нужно сделать математические уравнения с undefined
console.log(str5);


//5
let num2=Number("123");
console.log(num2);
//тут мы преобразовали строку в число

//динамическая типизация - это когда переменная может менять свой тип данных в зависимости от того, что в нее записано. 
// Например, если мы записали в переменную число, то она будет числом, а если мы запишем в нее строку, то она станет строкой. 

//6
let name2 = prompt("Как вас зовут: ");
console.log(name2);
