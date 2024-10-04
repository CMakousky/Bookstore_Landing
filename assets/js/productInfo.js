//Query Selectors for the "Learn More" buttons
const learnMoreBook=[
    document.querySelector('#learnMoreBook1'),
    document.querySelector('#learnMoreBook2'),
    document.querySelector('#learnMoreBook3'),
    document.querySelector('#learnMoreBook4')
];

//Query Selectors for the product information
const infoBook=[
    document.querySelector('#infoBook1'),
    document.querySelector('#infoBook2'),
    document.querySelector('#infoBook3'),
    document.querySelector('#infoBook4')
];

//Show Book Info Function
const showInfoBook=function(infoBook, j){
    //Loop through the infoBook array while "i" is less than the length value
    for(i=0; i<infoBook.length; i++){
        //Set the style of infoBook[i] to be visible only when the value of "i" equals that of "j"
        if(i===j){infoBook[i].hidden = false}
        else{infoBook[i].hidden = true};
    }
};

//Event Listeners
learnMoreBook[0].addEventListener('click', function(){
    showInfoBook(infoBook, 0);
});

learnMoreBook[1].addEventListener('click', function(){
    showInfoBook(infoBook, 1);
});

learnMoreBook[2].addEventListener('click', function(){
    showInfoBook(infoBook, 2);
});

learnMoreBook[3].addEventListener('click', function(){
    showInfoBook(infoBook, 3);
});