// const userName = document.getElementById('userNames');
// const userTitle = document.getElementById('userTitles');
// const userComment = document.getElementById('userComments');
// const savedBlog = document.querySelector('#buttonclick');



function savedBlogs(event) {
    event.preventDefault();

    let userName = document.getElementById('userNames').value;
    let userTitle = document.getElementById('userTitles').value;
    let userComment = document.getElementById('userComments').value;

  
  
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
click.addEventListener('click', savedBlogs);

const blog1 = document.getElementById('buttonclick')
blog1.addEventListener('click' , function(){
window.location.href = "./blog.html" 
})