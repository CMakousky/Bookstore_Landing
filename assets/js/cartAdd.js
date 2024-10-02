//Catalogue of books
const bookCatalogue = ['Book 1','Book 2', 'Book 3', 'Book 4'];

//Index selector for the catalogue of books
let m = 0;

//Set cartContents array based on the presence of items in local storage
if (localStorage.length === 0) {cartContents=[]}
else{cartContents = JSON.parse(localStorage.getItem('cartContents'))};

//Set cartContents index counter
if (localStorage.length === 0){n=0}
else{n=cartContents.length};

console.log(localStorage);
console.log(cartContents);

//Function to add a book to the cart
const addBook = function(){
    cartContents[n]=bookCatalogue[m];
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    n++;
    console.log(cartContents);
};

//Query Selectors to locate the "Add to Cart" buttons
const cartAddBook1 = document.querySelector('#cartAddBook1');
const cartAddBook2 = document.querySelector('#cartAddBook2');
const cartAddBook3 = document.querySelector('#cartAddBook3');
const cartAddBook4 = document.querySelector('#cartAddBook4');

//Event Listeners
cartAddBook1.addEventListener('click', function(){
    m=0;
    addBook();
});

cartAddBook2.addEventListener('click', function(){
    m=1;
    addBook();
});

cartAddBook3.addEventListener('click', function(){
    m=2;
    addBook();
});

cartAddBook4.addEventListener('click', function(){
    m=3;
    addBook();
});