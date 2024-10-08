//Modal Settings
const modal = new bootstrap.Modal(document.getElementById('cartAddModal'));
const closeModal = document.getElementsByClassName('close');
//const btn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn");

//Close the Modal when the user clicks outside of the Modal Window
window.onclick = function (event) {
    if (event.target === closeModal) {
        modal.hide();
    }
};

//Close the Modal when the user clicks the "X" button
// btn.onclick = function () {
//     // modal.style.display = "close";
//     //console.log("click");
//     modal.hide();
// };

//Close the Modal Window when the user clicks the "Close" button
closeBtn.onclick = function () {
    // modal.style.display = "close";
    //console.log("click");
    modal.hide();
};

//Catalogue of books
const bookCatalogue = ['Book1','Book2', 'Book3', 'Book4'];

//Set cartContents array based on the presence of items in local storage
if (localStorage.length === 0){cartContents=[]}
else{cartContents = JSON.parse(localStorage.getItem('cartContents'))};

//Set cartContents index counter "n" initial value
if (localStorage.length === 0){n=0}
else{n=cartContents.length};

console.log(localStorage);
console.log(cartContents);

//Function to add a book to the cart
const addBook = function(cartContents, bookCatalogue, n, m){
    cartContents[n]=bookCatalogue[m];
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    console.log(cartContents);
    $('#cartAddModal').modal('show');
    $('#cartAddModal').find('.modal-body').text(`${bookCatalogue[m]} added to cart!`);
    return cartContents;
};

//Query Selectors to locate the "Add to Cart" buttons
const cartAddBook=[
    document.querySelector('#cartAddBook1'),
    document.querySelector('#cartAddBook2'),
    document.querySelector('#cartAddBook3'),
    document.querySelector('#cartAddBook4')
];

//Event Listeners
cartAddBook[0].addEventListener('click', function(){
    addBook(cartContents, bookCatalogue, n, 0);
    n++;
});

cartAddBook[1].addEventListener('click', function(){
    addBook(cartContents, bookCatalogue, n, 1);
    n++;
});

cartAddBook[2].addEventListener('click', function(){
    addBook(cartContents, bookCatalogue, n, 2);
    n++;
});

cartAddBook[3].addEventListener('click', function(){
    addBook(cartContents, bookCatalogue, n, 3);
    n++;
});