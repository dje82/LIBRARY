let myLibrary = [];
//title, author, the number of pages, read Status

function Book(title, author, nbPages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.nbPages = nbPages
  this.read = read
}

const addForm = document.getElementById("addBookForm")

let addBookBtn = document.getElementById("addBookFormBtn")
addBookBtn.addEventListener("click", showPopup)

function showPopup() {
 addForm.style.display = "block";
}

let cancelBtn = document.getElementById("btnCancel")
cancelBtn.addEventListener("click", cancelPopup)

function cancelPopup(){
  //clearinput
  addForm.style.display = "none";
}

let addBtn = document.getElementById("btnAdd")
addBtn.addEventListener("click", addBookToLibrary)


function addBookToLibrary() {
  // do stuff here
  let inputTitle = document.getElementById("titleinput").value;
  let inputAuthor = document.getElementById("authorinput").value;
  let nbPages = document.getElementById("nbpageinput").value;
  let read =  document.getElementById("readinput").value;

  myLibrary.push(inputTitle, inputAuthor,nbPages, read)
  alert(myLibrary)
}
