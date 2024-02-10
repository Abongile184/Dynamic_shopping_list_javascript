# Dynamic_shopping_list_javascript
This is just a small project i did while doing the javascript foundations on The Odin Project
check it out: https://abongile184.github.io/Dynamic_shopping_list_javascript/

Active learning: A dynamic shopping list

In this challenge we want to make a simple shopping list example that allows you to dynamically add items 
to the list using a form input and button. When you add an item to the input and press the button:

The item should appear in the list.
Each item should be given a button that can be pressed to delete that item off the list.
The input should be emptied and focused ready for you to enter another item.

Create three variables that hold references to the list (<ul>), <input>, and <button> elements.

Create a function that will run in response to the button being clicked.

Inside the function body, start off by storing the current value of the input element in a variable.

Next, empty the input element by setting its value to an empty string — ''.

Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.

Append the span and the button as children of the list item.

Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
Append the list item as a child of the list.

Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).n,b
Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
