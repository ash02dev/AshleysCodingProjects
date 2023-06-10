// Data structure to store tasks and categories
const data = {
    categories: [],
    tasks: [],
  };
  
  const categoryList = document.getElementById('categoryList');
  const categoryForm = document.getElementById('categoryForm');
  const categoryInput = document.getElementById('categoryInput');
  
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const categorySelect = document.getElementById('categorySelect');
  const taskList = document.getElementById('taskList');
  
  // Function to render categories
  function renderCategories() {
    categoryList.innerHTML = '';
    categorySelect.innerHTML = '';
  
    data.categories.forEach((category) => {
      const categoryItem = document.createElement('li');
      categoryItem.textContent = category;
      categoryItem.classList.add('category');
      categoryItem.addEventListener('click', function () {
        filterTasksByCategory(category);
      });
      categoryList.appendChild(categoryItem);
  
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  }
  
  // Function to render tasks
  function renderTasks() {
    taskList.innerHTML = '';
  
    data.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.textContent = task.text;
      if (task.completed) {
        taskItem.classList.add('completed');
      }
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        deleteTask(task);
      });
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function () {
        editTask(task);
      });
  
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(editButton);
  
      taskItem.addEventListener('click', function () {
        toggleTaskCompletion(task);
      });
  
      taskList.appendChild(taskItem);
    });
  }
  
  // Function to add a category
  function addCategory(category) {
    data.categories.push(category);
    renderCategories();
  }
  
  // Function to add a task
  function addTask(task) {
    data.tasks.push(task);
    renderTasks();
  }
  
  // Function to delete a task
  function deleteTask(task) {
    const taskIndex = data.tasks.indexOf(task);
    data.tasks.splice(taskIndex, 1);
    renderTasks();
  }
  
  // Function to edit a task
  function editTask(task) {
    const newTaskText = prompt('Enter the new task text:', task.text);
    if (newTaskText !== null) {
      task.text = newTaskText;
      renderTasks();
    }
  }
  
  // Function to toggle task completion
  function toggleTaskCompletion(task) {
    task.completed = !task.completed;
    renderTasks();
  }
  
  // Function to filter tasks by category
  function filterTasksByCategory(category) {
    const filteredTasks = data.tasks.filter((task) => task.category === category);
    taskList.innerHTML = '';
    filteredTasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.textContent = task.text;
      if (task.completed) {
        taskItem.classList.add('completed');
      }
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        deleteTask(task);
      });
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function () {
        editTask(task);
      });
  
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(editButton);
  
      taskItem.addEventListener('click', function () {
        toggleTaskCompletion(task);
      });
  
      taskList.appendChild(taskItem);
    });
  }
  
 // Event listener for category form submission
categoryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const categoryText = categoryInput.value.trim();
    if (categoryText !== '') {
      addCategory(categoryText);
      categoryInput.value = '';
    }
  });
  
  // Event listener for task form submission
  taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const taskCategory = categorySelect.value;
    if (taskText !== '') {
      const newTask = {
        text: taskText,
        completed: false,
        category: taskCategory,
      };
      addTask(newTask);
      taskInput.value = '';
    }
  });
  
  // Initial rendering of categories and tasks
  renderCategories();
  renderTasks();
  