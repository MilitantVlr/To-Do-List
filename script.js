document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('new-item-input');
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add');

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value = '';
        }
    });

    addButton.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            addTodoItem(input.value.trim());
            input.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
