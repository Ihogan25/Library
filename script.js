let form = {
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    pages: document.getElementById('pages'),
    read: document.getElementById('read'),
    submit: document.getElementById('submit')
}
let content = document.getElementById('content')
// let domBooks = []
const book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

const bookCard = (title, author, pages, read) => {
    let card = document.createElement('div');
    card.classList.add('book')
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.textContent = 'X'
    let bookTitle = document.createElement('p')
    bookTitle.classList.add('title')
    bookTitle.textContent = title
    let bookAuthor = document.createElement('p')
    bookAuthor.classList.add('author')
    bookAuthor.textContent = author
    let bookPages = document.createElement('p')
    bookPages.classList.add('pages')
    bookPages.textContent = pages
    let bookStatus = document.createElement('button')
    bookStatus.classList.add('status')
    bookStatus.textContent = read == true ? 'Finished' : 'Not Finished'
    card.appendChild(removeBtn)
    card.appendChild(bookTitle)
    card.appendChild(bookAuthor)
    card.appendChild(bookPages)
    card.appendChild(bookStatus)
    return card;
}

const clearForm = () => {
    form.title.value = ''
    form.author.value = ''
    form.pages.value = ''
    form.read.checked = false
}


form.submit.addEventListener('click', ev => {
        ev.preventDefault()
        let newBoook = new book(form.title.value, form.author.value, form.pages.value, form.read.checked)
        let card = bookCard(newBoook.title, newBoook.author, newBoook.pages, newBoook.read)
        content.appendChild(card);
        removeBook()
        clearForm()
        libraryInfo()
        chngBookStatus()
    }
)


const removeBook = () => {
    let domBooks = document.querySelectorAll('.book')
    domBooks.forEach(book => {
        book.firstChild.addEventListener('click', ()=> {
            content.removeChild(book)
            chngBookStatus()
            libraryInfo()
        })
    })
}

const libraryInfo = () => {
    let numBooks = document.getElementById('num-books')
    numBooks.textContent = 'Books: ' + content.childElementCount
}



const chngBookStatus = () => {
    let dombooks = document.querySelectorAll('.book')
    dombooks.forEach(book => {
        book.lastChild.addEventListener('click', () => {
            console.log()
            if(book.lastChild.textContent == 'Finished') {
                book.lastChild.textContent = 'Not Finished'
            } 
            else if(book.lastChild.textContent == 'Not Finished'){
                book.lastChild.textContent = 'Finished'
            }
        })
    })
}
