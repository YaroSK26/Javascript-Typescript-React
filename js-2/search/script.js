const input = document.querySelector(".input")
const search = document.querySelector(".search")
const btn = document.querySelector(".btn")

btn.addEventListener("click" , function (serus){
    search.classList.toggle("active")
    input.focus()
})