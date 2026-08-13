//1
function greet(){
    console.log("Привет,мир!");
}
greet();

//2
function sayHello(name){
    console.log("Привет,"+ name+"!");
}
sayHello("Аяу");
sayHello("Амина");

//3
function sum(num1,num2){
    return num1+num2;
}
let natizhe = sum(4,8);
console.log("Нәтиже:"+ natizhe);

//4

function isEven(san){
    if(san%2==0){
        return true;
    }else{
        return false;
    }
}
let san = isEven(7);
let san1 = isEven(6);
let san2 = isEven(4);
console.log("Бұл сан:"+san);
console.log("Бұл сан:"+san1);
console.log("Бұл сан:"+san2);

//5
function max(a1,b1){
    if(a1>b1){
        return a1 +" ulken";
    }else if(a1<b1){
        return b1+ " ulken";
    }else{
        return "ten";
    }
}
let salystyru=max(7,7);
console.log("Жауабы:"+salystyru);

//6
function getInitials(name,surname){
    return name[0]+"."+surname[0]+".";
}
let initials=getInitials("Ayau","Turysbek");
console.log(initials);

//7
function square(number){
    return number * number;
}
function cube(number){
    return square(number)* number;
}
let zhauaby=cube(7);
console.log("Zhauaby:"+zhauaby);

//8
const qosyndy=(num1,num2)=>{
    return num1+num2;
}

let plus=qosyndy(7,8)
console.log(plus);

//9
function getFactorial(sandar){
    if(sandar===0){
        return 1;
    }else{
        return sandar*getFactorial(sandar-1);
    }
}
let ab=getFactorial(7);
console.log(ab);