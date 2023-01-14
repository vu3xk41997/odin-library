import books from './books.json';
let myLibrary = books;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title.concat("by ", author, ", ", pages, " pages, ", read);
    }
}

function addBookToLibrary(title, author, pages, read) {
    Book(title, author, pages, read);
}