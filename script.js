let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}





const scriptURL = "https://script.google.com/macros/s/AKfycbzIAzmC0ogISXSPbZLZ6j1KxA2ii0jGiE9ud7tOfWJbgY2aEB-cJDKdzRtznW9HGBEd/exec"

const form = document.forms['submit_gs']

form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(scriptURL , {
      method : "POST",
      body: new FormData(form)
  }).then(
      response => alert('Thank you for contacting US ! Have a Great Day : )')
  ).catch(
      error => console.error("Error!", error.message)
  )
  form.reset();
})
