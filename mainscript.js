        const pressButton = document.querySelector("#pressButton");
        const textBox = document.querySelector("#textBox");
        const output = document.querySelector("#output");

        pressButton.addEventListener("click", () => {
            // Get the value from the text box
            const inputValue = textBox.value;

            // Check if the input value is empty
            if (inputValue === "") {
                // Display a message
                alert("Please input something");
            } else {
                // Create a new list item
                const listItem = document.createElement('li');
                listItem.textContent = inputValue;

                // Create a delete button
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';

                // Add a click event listener to the delete button
                deleteButton.addEventListener('click', () => {
                    // Remove the corresponding list item when the delete button is clicked
                    listItem.remove();
                });

                // Append the delete button to the list item
                listItem.appendChild(deleteButton);

                // Create a new unordered list
                const list = document.createElement('ul');

                // Append the list item to the list
                list.appendChild(listItem);

                // Append the list to the output div
                output.appendChild(list);

                // Clear the text box after adding the item
                textBox.value = '';
                textBox.focus();
                
            }
        });