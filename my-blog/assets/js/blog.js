let blogger = JSON.parse (localStorage.getItem('savedBlog'))
console.log (blogger)
let post = document.getElementById('blogs')
let title = document.createElement('h1')
title.textContent = `${blogger["userTitle"]}`

document.getElementById('blogs').append(title)



let user = document.getElementById('blogs')
let usersTitle = document.createElement('h2')

title.textContent = `${blogger["userName"]}`

document.getElementById('blogs').append(title)

let  = JSON.parse (localStorage.getItem('savedBlog'))
console.log (blogger)

let post = document.getElementById('blogs')
let title = document.createElement('h3')

title.textContent = `${blogger["userComment"]}`

document.getElementById('blogs').append(title)