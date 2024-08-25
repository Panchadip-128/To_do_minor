document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Add Task Function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <div>
                    <input type="checkbox" onclick="toggleComplete(this)">
                    <span>${taskText}</span>
                </div>
                <div>
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="deleteTask(this)">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            // Animate the new task
            setTimeout(() => {
                taskItem.style.opacity = '1';
                taskItem.style.transform = 'translateY(0)';
            }, 10);
        }
    };

    // Edit Task Function
    window.editTask = (button) => {
        const taskItem = button.parentElement.parentElement;
        const taskText = taskItem.querySelector('span').innerText;
        const newTaskText = prompt('Edit your task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskItem.querySelector('span').innerText = newTaskText.trim();
        }
    };

    // Delete Task Function
    window.deleteTask = (button) => {
        const taskItem = button.parentElement.parentElement;

        // Animate before removing
        taskItem.style.opacity = '0';
        taskItem.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            taskList.removeChild(taskItem);
        }, 300);
    };

    // Toggle Complete Function
    window.toggleComplete = (checkbox) => {
        const taskItem = checkbox.parentElement.parentElement;
        taskItem.classList.toggle('completed');
    };

    // Add Task on Button Click
    addTaskButton.addEventListener('click', addTask);

    // Add Task on Enter Key Press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
