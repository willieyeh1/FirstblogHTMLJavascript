let blogger = JSON.parse (localStorage.getItem('savedBlog'))
console.log (blogger)

let user = document.getElementById('blogs')
let usersName = document.createElement('h1')

usersName.textContent = `${blogger["userName"]}`

document.getElementById('blogs').append(usersName)


let post = document.getElementById('blogs')
let title = document.createElement('h1')
title.textContent = `${blogger["userTitle"]}`

document.getElementById('blogs').append(title)


console.log (blogger)

let comment = document.getElementById('blogs')
let userComments = document.createElement('h1')

userComments.textContent = `${blogger["userComment"]}`

document.getElementById('blogs').append(userComments)

const blog1 = document.getElementById('backButton')
blog1.addEventListener('click' , function(){
window.location.href = "./index.html" 
})