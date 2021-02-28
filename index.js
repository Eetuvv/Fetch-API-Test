document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("click", addPost);

function getText() {
  // Fetch returns a promise
  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>User</h2>";
      data.forEach((user) => {
        output += `
        <ul class ="list-group">
            <li class = "list-group-item">ID: ${user.id}</li>
            <li class = "list-group-item">Name: ${user.name}</li>
            <li class = "list-group-item">Email: ${user.email}</li>
        </ul>
        `;
      });
      document.getElementById("output2").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>Posts</h2>";
      data.forEach((user) => {
        output += `
        <div class="card card-body mb-3>
            <h2>User ID: ${user.userId}</h2>
            <h3>Title: ${user.title}</h3>
            <p>${user.body}</p>
        </div>
        `;
        document.getElementById("output3").innerHTML = output;
      });
    });
}

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
