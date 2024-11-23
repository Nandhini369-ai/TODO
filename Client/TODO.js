// Function to create a new to-do item
function createtodo() {
    // Get the values from the input fields
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();

    // Check if both title and description are entered
    if (title && description) {
        // Create a new div to hold the to-do item
        const listItem = document.createElement('div');
        listItem.classList.add('listitem'); // Add CSS class for styling
        
        // Add title and description to the new list item
        listItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
        `;

        // Append the new list item to the 'todoList' container
        document.getElementById('todoList').appendChild(listItem);

        // Optionally, clear the input fields after adding the task
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please enter both a title and a description.');
    }
}
