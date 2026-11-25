//1
setTimeout(() => {
    console.log("Привет, мир!");
}, 2000);

//2
setInterval(() => {
    let time = new Date().toLocaleTimeString("ru-RU");
    console.log(time);
}, 1000);

//3
let count = 0;

let interval = setInterval(() => {
    console.log(new Date().toLocaleTimeString("ru-RU"));
    count++;

    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);

//4
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены!");
        }, 3000);
    });
}

fetchData().then((result) => {
    console.log(result);
});

//5
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Ошибка загрузки!");
        }, 2000);
    });
}

fetchDataWithError().catch((error) => {
    console.log(error);
});

//6
async function fetchDataAsync() {
    let result = await fetchData();
    console.log(result);
}

fetchDataAsync();

//7
async function fetchDataWithErrorAsync() {
    try {
        let result = await fetchDataWithError();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchDataWithErrorAsync();

//8
async function task1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Задача 1 выполнена"), 1000);
    });
}

async function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Задача 2 выполнена"), 2000);
    });
}

async function runTasks() {
    console.log(await task1());
    console.log(await task2());
}

runTasks();

//9
async function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Задача A выполнена"), 2000);
    });
}

async function taskB() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Задача B выполнена"), 3000);
    });
}

async function runParallel() {
    let results = await Promise.all([taskA(), taskB()]);
    console.log(results);
}

runParallel();

//10
async function delayedMessage(message, delay) {
    await new Promise((resolve) => {
        setTimeout(resolve, delay);
    });

    console.log(message);
}

delayedMessage("Привет, JavaScript!", 2000);