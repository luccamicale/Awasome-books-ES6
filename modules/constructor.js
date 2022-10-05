import { bookList } from './variables.js';

export default class Book {
    static completeData =[]; // variable to save on  local store

    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    storeTag() {
      const bookStore = `<div class = "book">
      <div class="dates">
      <h2 class="title"> ${this.title}</h2> 
      <p class="by">by</p>
      <h2 class ="author"> ${this.author}</h2> </div>
      <button class="remove" type="button">Remove</button>
      </div>`;

      Book.completeData.push(bookStore);
    }

    /* set data on local storage */
    bookAutor() {
      this.data = {};
      this.data.title = this.title;
      this.data.author = this.author;
      Book.completeData.push(this.title, this.author);
      localStorage.setItem('Books-list', JSON.stringify(Book.completeData));
    }

    /* function add book on html */
    addBooks() {
      const bookStore = `<div class = "book">
    <div class="dates">
    <h2> ${this.title}</h2> 
    <p class="by">by</p>
    <h2> ${this.author}</h2> </div>
    <button class="remove" type="button">Remove</button>
    </div>`;
      bookList.innerHTML += bookStore;
      this.bookAutor();
      return bookList.innerHTML;
    }

    /* remove book from list html */
    static removeEvent(parameter) {
      const nodata = document.querySelector('.nodata');
      if (bookList.childElementCount === 1) {
        nodata.style.display = 'block';
      }
      if (parameter.target.classList.contains('remove')) {
        document.querySelector('.booklist').removeChild(parameter.target.parentElement);
      }
    }
}