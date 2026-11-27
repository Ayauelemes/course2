//2
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function () {
    if (xhr.status === 200) {
        let posts = JSON.parse(xhr.responseText);

        posts.forEach(post => {
            console.log(post.title);
        });
    }
};

xhr.send();


//3
let button = document.getElementById("load");
let list = document.getElementById("posts");
let loading = document.getElementById("loading");
let error = document.getElementById("error");

button.addEventListener("click", function () {

    //6
    loading.textContent = "Загрузка данных...";
    error.textContent = "";
    list.innerHTML = "";

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.onload = function () {
        loading.textContent = "";

        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);

            posts.forEach(post => {

                //3
                let li = document.createElement("li");

                //4
                li.innerHTML = `
                    <h3>${post.title}</h3>
                    <ul>
                        <li>Текст: ${post.body}</li>
                        <li>ID пользователя: ${post.userId}</li>
                    </ul>
                `;

                list.appendChild(li);
            });

        } else {

            //5
            error.textContent = "Ошибка загрузки данных!";
        }
    };

    //5
    xhr.onerror = function () {
        loading.textContent = "";
        error.textContent = "Ошибка соединения с сервером!";
    };

    xhr.send();
});