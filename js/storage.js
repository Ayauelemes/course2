//1
localStorage.setItem('greeting','Привет,мир!');
const greeting=localStorage.getItem('greeting');
console.log({greeting});

//2
localStorage.setItem('greeting','Привет,мир!');
localStorage.removeItem('greeting');
console.log(localStorage.getItem('greeting'));

//3
const user = {
    name: 'Ayaulym',
    age: 18,
    email: 'ayaulym@example.com'
};
localStorage.setItem('user', JSON.stringify(user));
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser);

//4
const userData = JSON.parse(localStorage.getItem('user'));
userData.country = 'Kazakhstan';
localStorage.setItem('user', JSON.stringify(userData));
console.log(JSON.parse(localStorage.getItem('user')));

//5
const savedData = localStorage.getItem('user');
if (savedData !== null) {
    console.log(JSON.parse(savedData));
} else {
    const newUser = {
        name: 'Ayau',
        age: 18
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    console.log(newUser);
}

//6
localStorage.clear();
console.log(localStorage.getItem('user')); 
console.log(localStorage.getItem('greeting')); 

//7
const tasks = [
    {
        title: 'Изучить JavaScript',
        completed: false
    },
    {
        title: 'Выполнить домашнее задание',
        completed: false
    },
    {
        title: 'Повторить LocalStorage',
        completed: true
    }
];

localStorage.setItem('tasks', JSON.stringify(tasks));
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(savedTasks);


//8
const tasksList = JSON.parse(localStorage.getItem('tasks'));
if (tasksList !== null && tasksList.length > 0) {
    tasksList[0].completed = true;

    localStorage.setItem('tasks', JSON.stringify(tasksList));

    console.log(JSON.parse(localStorage.getItem('tasks')));
}