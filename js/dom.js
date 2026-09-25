//1
let msg=document.getElementById("message");
msg.textContent="Добро пожаловать в JS!";

//2
let boxes=document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
   boxes[i].style.color='green';
}

//3
let firstText = document.querySelector(".text");
firstText.textContent='Term';
const boxHigh=document.querySelectorAll(".box1");
boxHigh.forEach(box => {
   box.style.color = 'blue';
});


//4
let highlights = document.querySelectorAll(".highlight");
highlights.forEach(highlight => {
   highlight.style.color = 'red';
});




