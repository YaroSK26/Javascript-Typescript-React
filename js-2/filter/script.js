const result = document.querySelector(".user-list")
const input = document.querySelector(".input-filter")
const userList = []

getData()

input.addEventListener("input", function (e) {
    dataFilter(e.target.value)
});


async function getData() {
    const allUsers = await fetch("https://randomuser.me/api?results=50")

    const data = await allUsers.json()
    console.log(data)

    result.innerHTML = ""

    data.results.forEach(user => {
            const li = document.createElement("li")
            li.innerHTML = `<img src="${user.picture.large}" alt="${user.first}">
            <div class="user-information">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${user.location.country} </p>
            </div>`

            result.appendChild(li)
            userList.push(li) 
    })
}
function dataFilter(inputText) {
    userList.forEach(oneUser => {
        if (oneUser.innerText.toLowerCase().includes(inputText.toLowerCase())) {
            oneUser.classList.remove("hide")
        } else {
            oneUser.classList.add("hide")
        }
    })
}
