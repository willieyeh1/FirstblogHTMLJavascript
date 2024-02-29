const userName = document.getElementById('#userName');
const userTitle = document.getElementById('#userTitle');
const userComment = document.getElementById('#userComment');
const savedBlog = document.querySelector('#buttonclick')



function blogForm(event) {
    event.preventDefault();

    let userName = document.getElementById('#userName').value;
    let userTitle = document.getElementById('#userTitle').value;
    let userComment = document.getElementById('#userComment').value;


  
if (userName ==="") {
alert("Please fill in blank spaces")
}else if (userTitle ==="") {
    alert("Please fill in blank spaces")

}else if (userComment ==="") {
    alert("Please fill in blank spaces")
}else {

const savedBlog = {
    userName: userName,
    userTitle: userTitle,
    userComment: userComment

}
console.log(savedBlog);
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('savedBlog', JSON.stringify(savedBlog));
  
}
}
const click = document.querySelector('#buttonclick')
click.addEventListener('click', blogForm());


  
