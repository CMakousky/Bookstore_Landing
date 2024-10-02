const searchItems = [
    { name: "robin hood"},
    { name: "harry potter"},
    { name: "narnia"},
    { name: "bluey"},
    { name: "percy jackson"},
    { name: "the hunger games"},
];

const searchInput = document.querySelector('.input');

searchInput.addEventListener("input", (e) => {
    e.preventDefault();
    let value = e.target.value;

    if ( value.trim() ) {

        renderList(searchItems.filter(book => {return book.name.includes(value)}
        ))
    } else {
        //clearList();
    }
})

const clearButton = document.getElementById('clear');

clearButton.addEventListener("click", function (e) {
    e.preventDefault();
    //clearList();
})

//exercise 15 in webAPIs
function renderList(results){
    for(const book of results){
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-list');

        const text = document.createTextNode(book.name);
        resultItem.append(text);
        list.append(resultItem);
    }
    //if (results.length === 0) {
    //    noResults();
    //}
}

//function clearList() {
    //list.innerHTML = " ";
//}

/*
function noResults () {
    const error = document.createElement(li);
    error.classList.add('error-message');

    const text = document.createTextNode('No results found.');
    error.append(text);
    list.append(error);
}
*/