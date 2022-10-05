import {
  addBook, title, author, form, bookList,
} from './modules/variables.js';
import dateAndTimeNow from './modules/Functions.js';
import Book from './modules/constructor.js';

dateAndTimeNow();

// local storage. every time you press any key.
let localForm = { title: '', author: '' };
if (localStorage.localForm) {
  localForm = JSON.parse(localStorage.localForm);
  title.value = localForm.title;
  author.value = localForm.author;
}
form.addEventListener('input', () => {
  localStorage.localForm = JSON.stringify(localForm);
  localForm.title = title.value;
  localForm.author = author.value;
});

// add book
addBook.addEventListener('click', (e) => {
  if (title.value === '' || author.value === '') {
    e.preventDefault();
  } else {
    const newBook = new Book(title.value, author.value);
    newBook.storeTag();
    title.value = '';
    author.value = '';
  }
});

/** display books */
let aumento = 0;
document.querySelector('.nav_list_link').addEventListener('click', () => {
  document.getElementById('contact').style.display = 'none';
  document.getElementById('list-book').style.display = 'block';
  document.getElementById('add-book').style.display = 'none';
  aumento += 1;
  const nodata = document.querySelector('.nodata');

  if (aumento === 1) {
    if (Book.completeData.length > 0) {
      nodata.style.display = 'none';
    } else {
      nodata.style.display = 'block';
    }

    Book.completeData.forEach((actual, position, datosB) => {
      bookList.innerHTML += datosB[position];
    });
  }
});

/* remove  book */
bookList.addEventListener('click', (x) => {
  Book.removeEvent(x);
});

// show and remove the section

document.querySelector('.nav_list_addnew').addEventListener('click', () => {
  const datosP = [];
  for (let i = 0; i < bookList.childElementCount; i += 1) {
    datosP.push(bookList[i]);
  }

  Book.completeData = [];
  if (!Book.completeData.length <= 0) {
    Book.completeData.push(datosP);
  }

  aumento = 0;
});

const showAddBook = () => {
  document.getElementById('add-book').style.display = 'flex';
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
};

const showContact = () => {
  document.getElementById('contact').style.display = 'flex';
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('add-book').style.display = 'none';
};

document.querySelector('.nav_list_contact').addEventListener('click', showContact);
document.querySelector('.nav_list_addnew').addEventListener('click', showAddBook);
