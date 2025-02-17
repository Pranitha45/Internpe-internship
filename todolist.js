document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Function to add a new to-do item
    const addTodo = () => {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const todoContent = document.createElement('span');
        todoContent.textContent = todoText;
        todoItem.appendChild(todoContent);

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.innerHTML = '✓';
        completeBtn.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });
        todoItem.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '✗';
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);
        todoInput.value = '';
        todoInput.focus();
    };

    // Add a new to-do item when the Add button is clicked
    addBtn.addEventListener('click', addTodo);

    // Add a new to-do item when Enter key is pressed
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
