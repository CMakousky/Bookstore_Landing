const searchItems = [
    { name: 'robin hood' },
    { name: 'harry potter' },
    { name: 'narnia' },
    { name: 'bluey' },
    { name: 'percy jackson' },
    { name: 'the hunger games' },
  ];
  
  const list = document.getElementById('list');
  const searchInput = document.querySelector('.input');
  const searchButton = document.getElementById('searchButton');
  const clearButton = document.getElementById('clear');
  
  
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
    let value = searchInput.value;
  
    if (value.trim()) {
      renderList(searchItems.filter(book => {
        return book.name.toLowerCase().includes(value.toLowerCase());
      }));
    } else {
      clearList();
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