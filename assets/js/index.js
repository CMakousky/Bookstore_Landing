const searchItems = [
    { name: 'Book1' },
    { name: 'Book2' },
    { name: 'Book3' },
    { name: 'Book4' },
  ];
  
  const list = document.getElementById('list');
  const searchInput = document.querySelector('.input');
  const searchButton = document.getElementById('searchButton');
  const clearButton = document.getElementById('clear');
  const resultsContainer = document.querySelector('.results-container');
  
  
  searchInput.addEventListener("input", (event) => {
      event.preventDefault();
      let value = event.target.value;
  
  
    if (value.trim()) {
      renderList(searchItems.filter(book => {
        return book.name.toLowerCase().includes(value.toLowerCase());
      }));
    } else {
      clearList();
    }
  });
  
  // Handle search button click
  searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    let results =[];
    let value = searchInput.value;
  
    if (value.trim()) {
      results = renderList(searchItems.filter(book => {
        return book.name.toLowerCase().includes(value.toLowerCase());
      }));
    } else {
      clearList();
    }
    renderList(results);
    if(!results.length) {
      resultsContainer.innerHTML = '';
    }
  });
  
  // Handle clear button click
  clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    searchInput.value = ''; // Clear input field
    clearList();
  });
  
  // Render the list of results
  function renderList(results) {
    list.innerHTML = ''; // Clear previous results
    for (const book of results) {
      const resultItem = document.createElement('li');
      resultItem.classList.add('result-item');
  
      const text = document.createTextNode(book.name);
      resultItem.appendChild(text);
      list.appendChild(resultItem); // Append to list
    }
    if (results.length === 0) {
      noResults();
    }
  }

//search results are highlighted for now, but in the future will need to be selectable
  
  // Clear the list
  function clearList() {
    list.innerHTML = ""; // Clear the list
  }
  
  // Handle no results found
  function noResults() {
    const error = document.createElement('li'); // 'li' as string
    error.classList.add('error-message');
  
    const text = document.createTextNode('No results found.');
    error.appendChild(text);
    list.appendChild(error); // Append the error message to list
  }