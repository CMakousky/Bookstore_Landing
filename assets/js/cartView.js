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

//Object to keep track the quantity of each book in the cart
const bookQuantity={};

//Function to quantify the number of each type of book in the cart
const quantifyCartContents=function(x){
    bookQuantity[x]=(bookQuantity[x] || 0)+1;
};

//Perform "quantifyCartContents" for each element of the "cartContents" array
cartContents.forEach(quantifyCartContents);
console.log(bookQuantity);

//Make an array of the keys from the object "bookQuantity"
const bookQuantityKeys=Object.keys(bookQuantity);
//Make an array of the values from the object "bookQuantity"
const bookQuantityValues=Object.values(bookQuantity);

for(c=0; c<bookQuantityKeys.length; c++){

    let a=bookQuantityKeys[c];
    let b=bookQuantityValues[c];

    //Query Selector to locate the #cartColumn
    const cartDisplay=document.querySelector('#cartColumn');
    //Query Selector to locate the template element
    const oldElement=document.querySelector('#cartBook0');
    //Clone the template element
    let newElement=oldElement.cloneNode(true);
    //Change the id of the clone element
    newElement.id=`#cart${a}`;
    //Change the hidden value of newElement to false
    newElement.hidden=false;
    //Change nth child text "Book0"
    newElement.firstChild.nextSibling.firstChild.nextSibling.textContent=`${a}`;
    //Change nth child text "Item Quantity: Quantity"
    newElement.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent=`Item Quantity: ${b}`;
    //Change nth child button id
    newElement.firstChild.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.id=`#cartRemove${a}`;
    //Append the newElement as a child of cartDisplay
    cartDisplay.appendChild(newElement);
};