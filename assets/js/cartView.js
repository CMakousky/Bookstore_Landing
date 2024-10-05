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

//Array to house the "Remove from Cart" button event listeners
const cartRemoveBook=[];

//Array to house `#itemQuantity${bookTitle}` element IDs
const itemQuantityID = [];

//Function to remove book from cart
const removeBook=function(bookTitle){
    //Find the first occurance of "bookTitle" in the "cartContents" array
    let bookLocation=cartContents.findIndex((element) => element === `${bookTitle}`);
    //console.log(`The index location of the book in cartContents is [${bookLocation}]`);
    if(bookLocation !== -1){
        //Copy the contents of the "cartContents" array prior to "bookLocation" into the array "preContents"
        let preContents=cartContents.slice(0, bookLocation);
        //Copy the contents of the "cartContents" array after "bookLocation" into the array "preContents"
        let postContents=cartContents.slice(bookLocation+1);
        //Assign the concatinated "preContents" and "postContents" arrays into the "cartContents" array
        cartContents=preContents.concat(postContents);
        console.log(cartContents);
    }
    else{console.log(`${bookTitle} is no longer in the cart!`)};
    //Save the new "cartContents" to localStorage
    localStorage.setItem('cartContents', JSON.stringify(cartContents));
    //Update the "bookQuantity" array with the new cart values
    bookQuantity[`${bookTitle}`]--;
    console.log(bookQuantity);
};

for(c=0; c<bookQuantityKeys.length; c++){

    let bookTitle=bookQuantityKeys[c];
    let itemQuantity=bookQuantityValues[c];

    //Query Selector to locate the #cartColumn
    const cartDisplay=document.querySelector('#cartColumn');
    //Query Selector to locate the template element
    const oldElement=document.querySelector('#cartBookTemplate');
    //Clone the template element
    let newElement=oldElement.cloneNode(true);
    //Change the ID of the clone element
    newElement.id=`#cart${bookTitle}`;
    //Change the hidden value of newElement to false
    newElement.hidden=false;

    let newUpdatedElement = newElement.firstChild.nextSibling.firstChild.nextSibling;

    //Change nth child text "bookTitle"
    newUpdatedElement.textContent=`${bookTitle}`;
    //Add an element ID to "Item Quantity: Quantity"
    newUpdatedElement.nextSibling.nextSibling.id=`#itemQuantity${bookTitle}`;
    //Change nth child text "Item Quantity: Quantity"
    newUpdatedElement.nextSibling.nextSibling.innerText=`Item Quantity: ${itemQuantity}`;
    //Change nth child button ID
    newUpdatedElement.nextSibling.nextSibling.nextSibling.nextSibling.id=`#cartRemove${bookTitle}`;
    //Append the newElement as a child of cartDisplay
    cartDisplay.appendChild(newElement);

    //Add query selector for `#itemQuantity${bookTitle}`
    itemQuantityID[c]=document.getElementById(`#itemQuantity${bookTitle}`);
    
    //Add querySelector for the cartRemove button
    cartRemoveBook[c]=document.getElementById(`#cartRemove${bookTitle}`);

    //Add Event Listeners
    cartRemoveBook[c].addEventListener('click', function(){
        console.log(`Remove ${bookTitle} from the cart.`);
        removeBook(bookTitle);
        window.location.reload();
        //itemQuantityID[c].innerText=`Item Quantity: ${itemQuantity}`;
    });
};