// catching our attributes
let main = document.querySelector(".main");
let sidebar = document.querySelector(".sidebar");
let user = document.querySelector(".user");
let titl = document.querySelector(".titl");
let email = document.querySelector(".email");
let data = document.querySelector(".data");
let postat = document.querySelector(".postat");
// getting all api items
function getData(userId){
// fetching the posts
fetch("https://jsonplaceholder.typicode.com/posts?userId ="+userId)
.then((response) => {
        if(response.ok){   
        return response.json()} }
        )
.then((posts) => {
        data.innerHTML = "";
        for (post of posts){
            postat = `
            <div class="postat">
                <h4 class="title">${post.title}</h4>
                <p>${post.body}</p>
            </div>`
            data.innerHTML += postat;
            console.log("success");}
    }
);

}
// get all users
function getUsers(){
// fetching the usesrs
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
        if(response.ok){   
        return response.json()} }
        )
.then((json) => {
        let users = json;
        sidebar.innerHTML = "";
        for (use of users){
            user = `
                <div class="user" onclick = "userClick(${use.id})">
                    <h4 class="titl">${use.name}</h4>
                    <p class="email">${use.email}</p>
                </div>
`
            sidebar.innerHTML += user;
            console.log(use.id);
        }
});

}
function userClick(id){
    getData(id);
    console.log(id);
}

getUsers();
