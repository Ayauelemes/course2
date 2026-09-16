//1
let fruits=["Яблоко","Банан","Апельсин"];
console.log(fruits);

//2
console.log(fruits[0]);
console.log(fruits[2]);
let lastFruit=fruits.push("Груша");
console.log(fruits);

//3
fruits.pop();
console.log(fruits);

//4
fruits.forEach((fruit)=>console.log(fruit));
console.log(fruits);

//5
let lenghts = fruits.map(fruit => fruit.length);
console.log(fruits);

//6
let numbers =[1,2,3,4,5,6,7,8,9,10];
let zhup=numbers.filter(num => num % 2 === 0);
console.log(numbers);
console.log(zhup);


//7
let sum =numbers.reduce((acc,num)=>acc + num,0);
console.log(sum);

//8
let san =numbers.find((num)=> num>5);
console.log(san);

//9
arr1=[1,2,3];
arr2=[4,5,6];
let array = arr1.concat(arr2);
console.log(array);


//10
let hasBanana=fruits.includes("Банан");
console.log(hasBanana);

//11
fruits.reverse();
console.log(fruits);
