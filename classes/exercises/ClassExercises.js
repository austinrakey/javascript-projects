// Define your Book class here:

class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedout, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedout = timesCheckedout;
        this.discarded = discarded;
    }
    checkout(uses=1) {
        this.timesCheckedout += uses;
     }
}



// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    discard(currentYear){
       if (currentYear-this.copyright > 5) {
          this.discarded = 'Yes';
       }
    }
 }
 
 class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
 
    discard(){
       if (this.timesCheckedout > 100) {
          this.discarded = 'Yes';
       }
    }
 }

// Declare the objects for exercises 2 and 3 here:

let prideAndPrej = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No')

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');



// Code exercises 4 & 5 here:

console.log(prideAndPrej)

prideAndPrej.checkout(100)

prideAndPrej.discard()

console.log(prideAndPrej)


console.log(makingTheShip)

makingTheShip.discarded = 'Yes'
 
console.log(makingTheShip)
