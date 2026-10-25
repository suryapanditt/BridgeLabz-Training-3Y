
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued === false) {
            this.isIssued = true;
            console.log("Book Issued:", this.title);
        } else {
            console.log("Already Issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log("Book Returned:", this.title);
    }
}

let books = [
    new Book("Java", "Amit", "101"),
    new Book("Python", "Rahul", "102"),
    new Book("C++", "Ravi", "103")
];

let a = "102";

for (let i = 0; i < books.length; i++) {
    if (books[i].ISBN === a) {
        books[i].issueBook();
    }
}

console.log("Available Books:");

for (let i = 0; i < books.length; i++) {
    if (books[i].isIssued === false) {
        console.log(books[i].title);
    }
}

books[1].returnBook();
