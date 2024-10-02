//Query Selectors for the "Learn More" buttons
const learnMoreBook1 = document.querySelector('#learnMoreBook1');
const learnMoreBook2 = document.querySelector('#learnMoreBook2');
const learnMoreBook3 = document.querySelector('#learnMoreBook3');
const learnMoreBook4 = document.querySelector('#learnMoreBook4');

//Query Selectors for the product information
const infoBook1 = document.querySelector('#infoBook1');
const infoBook2 = document.querySelector('#infoBook2');
const infoBook3 = document.querySelector('#infoBook3');
const infoBook4 = document.querySelector('#infoBook4');

//Event Listeners
learnMoreBook1.addEventListener('click', function() {
    infoBook1.hidden = false;
    infoBook2.hidden = true;
    infoBook3.hidden = true;
    infoBook4.hidden = true;
});

learnMoreBook2.addEventListener('click', function() {
    infoBook1.hidden = true;
    infoBook2.hidden = false;
    infoBook3.hidden = true;
    infoBook4.hidden = true;
});

learnMoreBook3.addEventListener('click', function() {
    infoBook1.hidden = true;
    infoBook2.hidden = true;
    infoBook3.hidden = false;
    infoBook4.hidden = true;
});

learnMoreBook4.addEventListener('click', function() {
    infoBook1.hidden = true;
    infoBook2.hidden = true;
    infoBook3.hidden = true;
    infoBook4.hidden = false;
});