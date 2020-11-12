let myLibrary = [];


//title, author, the number of pages, read Status

function Book(title, author, nbPages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.nbPages = nbPages
  this.read = read
}

let addbtn = document.getElementById("addBook")
addbtn.addEventListener("click", addBookToLibrary)


function addBookToLibrary() {
  // do stuff here
  alert('coucou')
}

