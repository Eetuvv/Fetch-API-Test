document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("click", addPost);
document.getElementById("getPhotos").addEventListener("click", getPhotos);
document.getElementById("getTodos").addEventListener("click", getTodos);

// Fetch text file
function getText() {
  // Fetch returns a promise
  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// Fetch JSON-file
function getUsers() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>User</h2>";
      data.forEach((user) => {
        output += `
        <div class='card card-body mb-3'>
          <ul class ="list-group">
              <li class = "list-group-item">ID: ${user.id}</li>
              <li class = "list-group-item">Name: ${user.name}</li>
              <li class = "list-group-item">Email: ${user.email}</li>
          </ul>
        </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

// Fetch posts from API
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>Posts</h2>";
      data.forEach((user) => {
        output += `
        <div class='card card-body mb-3'>
            <h2>User ID: ${user.userId}</h2>
            <h3>Title: ${user.title}</h3>
            <p>${user.body}</p>
        </div>
        `;
        document.getElementById("output").innerHTML = output;
      });
    });
}

//Add a post to API with a POST-request
function addPost(e) {
  // Prevent submit
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      //Accepts JSON and text files
      Accept: "application/json, text/plain",
      "Content-Type": "application/json",
    },
    //Convert body to a string if it's in JSON format
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Fetch photos from API
function getPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>Photos</h2>";
      data.forEach((photo) => {
        output += `
      <div class='card card-body mb-3'>
        <img class='img-thumbnail' src=${photo.thumbnailUrl}</img>
      </div>
      `;
      });
      document.getElementById("output").innerHTML = output;
    });
}

//Fetch todo's from API
function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>Todos</h2>";
      data.forEach((todo) => {
        let complete;
        let status = todo.completed;
        if (status === true) {
          complete = "<h4 style='color:green'>Completed</h4>";
        } else if (status === false) {
          complete = "<h4 style='color:red'>Not completed</h4>";
        }
        output += `
      <div class='card card-body-mb3'>
        <h3>Todo name: ${todo.title}</h3>
        <h4>Todo status: ${complete}</h4>
      </div>
      `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
