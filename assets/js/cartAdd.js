const cartAddBook1 = document.querySelector('#cartAddBook1');
const cartAddBook2 = document.querySelector('#cartAddBook2');
const cartAddBook3 = document.querySelector('#cartAddBook3');
const cartAddBook4 = document.querySelector('#cartAddBook4');

//localStorage.clear();
const cartContents = [];
let n = 0;

cartAddBook1.addEventListener('click', function() {
    cartContents[n]="Book 1";
    console.log(cartContents);
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    console.log(localStorage);
    n++;
});

cartAddBook2.addEventListener('click', function() {
    cartContents[n]="Book 2";
    console.log(cartContents);
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    console.log(localStorage);
    n++;
});

cartAddBook3.addEventListener('click', function() {
    cartContents[n]="Book 3";
    console.log(cartContents);
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    console.log(localStorage);
    n++;
});

cartAddBook4.addEventListener('click', function() {
    cartContents[n]="Book 4";
    console.log(cartContents);
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    console.log(localStorage);
    n++;
});