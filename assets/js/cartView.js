//Catalogue of books
const bookCatalogue = ['Book 1','Book 2', 'Book 3', 'Book 4'];

//Set cartContents array based on the presence of items in local storage
if (localStorage.length === 0){cartContents=[]}
else{cartContents = JSON.parse(localStorage.getItem('cartContents'))};

//Set cartContents index counter "n" initial value
if (localStorage.length === 0){n=0}
else{n=cartContents.length};

console.log(localStorage);
console.log(cartContents);

//Query Selectors for the "Learn More" buttons
const learnMoreBook=[
    document.querySelector('#learnMoreBook1'),
    document.querySelector('#learnMoreBook2'),
    document.querySelector('#learnMoreBook3'),
    document.querySelector('#learnMoreBook4')
];

//Query Selectors for the "Remove from Cart" buttons
const cartRemove=[
    document.querySelector('#cartRemove1'),
    document.querySelector('#cartRemove2'),
    document.querySelector('#cartRemove3'),
    document.querySelector('#cartRemove4')
];

//Query Selectors for the cart items
const cartBook=[
    document.querySelector('#cartBook1'),
    document.querySelector('#cartBook2'),
    document.querySelector('#cartBook3'),
    document.querySelector('#cartBook4')
];
