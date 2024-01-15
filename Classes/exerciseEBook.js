/*
1. Create a class named Book with a constructor that initializes
a title, author, and year properties. The title and author
should be strings and the year should be a number

2. Create a subclass named Ebook that extends Book.

3. The Ebook class should have an additional property fileSize
which is a number and a method download() that returns a string
with the title of the ebook and its fileSize.
*/

class Book {
  constructor (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor (title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }

  download () {
    return `Downloaded ${this.title} of size ${this.fileSize}`;
  }
}