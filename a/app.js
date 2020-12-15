let boldbtn = document.querySelector('.boldbtn')
let italicbtn = document.querySelector('.italicbtn')
let underlinebtn = document.querySelector('.underlinebtn')
let changetxt = document.querySelector('.changetxt')

setTimeout(() => {
  alert("This is Web Design Assignment-2\nSubmitted By Fazeel Ahmad\nThis is Answer 6")
}, 500)


function validateForm() {
  var x = document.forms["form2"]["uname"].value;
  var y = document.forms["form2"]["mail"].value;
  var z = document.forms["form2"]["pass"].value;
  if (x == "" || y == "" || z == "") {
    alert("All fields must be filled out");
    return false;
  }
}

setTimeout(() => {
  document.querySelector('body').style.backgroundColor = '#fff3b2'
}, 5000)

setTimeout(() => {
  alert("This change in color of background is Answer 7")
}, 5500)


boldbtn.addEventListener('click', () => {
  changetxt.style.fontWeight = 'bold'
})

underlinebtn.addEventListener('click', () => {
  changetxt.style.textDecoration = 'underline'
})
italicbtn.addEventListener('click', () => {
  changetxt.style.fontStyle = 'italic'
})
