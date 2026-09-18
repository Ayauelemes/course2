//1
let num=1;
while(num<=10){
    console.log(num);
    num++;
}

//2
let count =0;
while(count<=10){
    count++;
    if(count===5){
        continue;
    }
    else if(count ===8){
        break;
    }
    console.log(count);
}

//3
let number =1;
do{
    console.log(number);
    number++;
}while(number<=5);

//отличие в том что while выполняет когда условие только true,а do-while выполняет хотя бы один раз потом уже смотрит на условие

//4
let san=1;
while(true){
    san++;
    if(san===10){
        break;
    }
    console.log(san);
}

//5
for(let i=1;i<=10;i++){
    console.log(i);
}

//6
let b=1;
for(;;){
    console.log(b);
    if(b>100){
        break;
    }
    b++;
}

//7
let numbers=[1,2,3,4,5];
for(let s =0;s<numbers.length;s++){
    console.log(numbers[s]);
}

//8
/*While — когда заранее неизвестно, сколько раз нужно повторить действие. Цикл работает, пока выполняется условие.
For — когда заранее известно, сколько раз нужно повторить действие.
Пример while: спрашивать пароль, пока пользователь не введёт правильный.
Пример for: вывести числа от 1 до 10 */

//9
for(let n =10; n>=1; n-- ){
    console.log(n);
}

//10
for(let t =1; t<=10; t++){
    if(t % 2 === 0){
        continue;
    }
    console.log(t);
}