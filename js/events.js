//2
const button=document.getElementById('jsButton');

button.addEventListener('click', () => {
    console.log('Событие обработано через JS');
});

//3
const div=document.getElementById('myDiv');

div.addEventListener('click',()=>{
    div.style.backgroundColor='blue';
});

div.addEventListener('click',()=>{
    console.log('Элемент нажат');
});

//4
const input = document.getElementById("textInput");

input.addEventListener("keydown", (event) => {
 console.log(event.code);
});

//5
const link = document.getElementById('myLink');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Переход по ссылке отменен');
});

//6
const list = document.getElementById('list');

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

//7
const keyb = document.getElementById('keyboardInput');

keyb.addEventListener('keydown', (event) => {
    console.log(event.code);
});