import books from './books.json' assert {type: "json"};
let myLibrary = books;
console.log(myLibrary);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title.concat("by ", author, ", ", pages, " pages, ", read);
    }
}

// function addBookToLibrary(title, author, pages, read) {
//     Book(title, author, pages, read);
// }


// display book details in HTML
document.getElementById("item1").innerHTML = myLibrary[0].title;
document.getElementById("item2").innerHTML = myLibrary[1].title;
document.getElementById("item3").innerHTML = myLibrary[2].title;
document.getElementById("item4").innerHTML = myLibrary[3].title;