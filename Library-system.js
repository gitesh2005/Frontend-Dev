class Book {
    constructor(title, author, isbn, isIssued) {
        this.title = title;
       	this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const b1 = new Book("HP", "JK", 111, false);
const b2 = new Book("Habits", "JC", 112, false);
const b3 = new Book("Alch", "PC", 113, true);

const books = [b1, b2, b3];

const available = books.filter(book => !book.isIssued);
console.log(available);

function issue(isbn) {
    const found = books.find(book => book.isbn === isbn);
    if (found && !found.isIssued) {
        found.issueBook();
        console.log("issued", found);
    } else {
        console.log("not possible");
    }
}

issue(112);
