//1
let san = prompt("1 сан енгізіңіз");
if(san>10){
    console.log("Бұл сан 10-нан үлкен");
}else{
    console.log("Бұл сан 10-нан кіші");
}

//2
let confirmDelete = confirm("Файлды өшіргіңіз келе ме?");
if(confirmDelete){
    console.log("Файл жойылды");
}else{
    console.log("Файл өшірілмеді");
};

//3
let age = prompt("Сіз неше жастасыз?");
if(age>18){
    console.log("Сіз жасөспірімсіз");
}else if(age=18 && age<=30){
    console.log("Сіз жас адамсыз");
}else{
    console.log("Сіз ересек адамсыз");
};

//4
let num = prompt("Бір сан жазыңыз:");
let number = (san % 2 == 0)? "Жұп сан": "Тақ сан";
console.log(number);

//5
let sandar = prompt("Апта күндерін жазыңыз(1-7):");
let kun;
switch(sandar){
    case "1":
        kun="1-Дүйсенбі";
        break;
    case "2":
        kun="2-Сейсенбі";  
        break;
    case "3":
        kun="3-Сәрсенбі";
        break;
    case "4":
        kun="4-Бейсенбі";
        break;
    case "5":
        kun="5-Жұма";
        break;
    case "6":
        kun="6-Сенбі";
        break;
    case "7":
        kun="Жексенбі";
        break;
    default:
        kun="Ондай апта күні жоқ";    
}
console.log(kun);

6
let num1=prompt("Бірінші санды жазыңыз:");
let num2 = prompt("Екінші санды жазыңыз:");
let ten =(num1==num2)?"Сандар тең": "Сандар тең емес";
console.log(ten);
if(num1>num2){
    console.log("Бірінші сан үлкен");
}else{
    console.log("Екінші сан үлкен");
}


//7
let month = prompt("1-12 айдын біреуін енгізіңіз:");
let season;
switch(month){
    case "12":
    case "1":
    case "2":
        season = "Қыс";
        break;
    case "3":
    case "4":
    case "5":
        season="Көктем";
        break;
    case "6":
    case "7":
    case "8":
        season="Жаз";
        break;
    case "9":
    case "10":
    case "11":
        season="Күз";
        break;
}
console.log(season);