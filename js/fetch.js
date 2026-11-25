//1
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log(data.title);
        console.log(data.body);
    });

//2
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Новый пост",
        body: "Содержимое поста",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

//3
fetch("https://jsonplaceholder.typicode.com/nonexistent")
    .then(response => {
        if (!response.ok) {
            throw new Error("Ошибка загрузки!");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message));

//4 PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: 1,
        title: "Обновленный заголовок",
        body: "Содержимое поста",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log(data));

//4 DELETE
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then(response => {
        console.log("Статус удаления:", response.status);
    });

//5
async function getData() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error("Ошибка загрузки!");
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

getData();

//6
fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
    headers: {
        "Authorization": "Bearer example-token"
    }
})
    .then(response => response.json())
    .then(data => console.log(data.slice(0, 5)));