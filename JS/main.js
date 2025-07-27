//This task made by Mohamed Sayed Omar and he have all copyrigth for it and it owner to act with it 

/*
  TODO: Steps to build this To-Do List App

  - [1] Select and prepare elements:
        Get all needed elements from the DOM (input fields, buttons, task container, etc.) using query selectors.

  - [2] Load tasks from Local Storage:
        On page load, read saved tasks from localStorage and parse them from JSON to a JavaScript array.

  - [3] Add a new task:
        When the user clicks the "Add Todo" button, create a new task object with title, description, and status, then save it in the tasks array and localStorage.

  - [4] Render/display tasks:
        Dynamically create HTML for each task and insert it into the tasks container.

  - [5] Update task status (complete or pending):
        When the checkbox is clicked, update the `status` property of the task and save the updated list to localStorage.

  - [6] Delete a task:
        When the delete button is clicked, remove the task from the array and update the UI and localStorage.

  - [7] Update statistics:
        Count total tasks, completed ones, and update the progress bar and top stats dynamically.

  - [8] Use of Local Storage:
        Store and retrieve the task list using `localStorage.setItem` and `localStorage.getItem` to keep data even after the page reloads.

  - [9] Handle user data:
        Save and display the user's name from localStorage on the page header or greeting section.

  - [10] Handle streak feature:
        Track how many days the user completes at least one task in a row and display the streak with a 🔥 icon.

  - [?] Future enhancements:
        Add support for editing tasks, filtering tasks by status, and adding due dates or categories.

  - [!] Styling with Bootstrap:
        Use Bootstrap classes for layout, responsive design, and beautiful UI components (cards, buttons, grid, etc.).
*/


// ==== 1. Varaibles ====
let userData = JSON.parse(localStorage.getItem("userData"));
let userName = document.querySelector("#user-name");

if (userData && userName) {
  userName.innerHTML += userData.userName.split(" ").at(0);
}

let addTaskBtn = document.getElementById("add-task-btn");
let tasksContainter = document.querySelector("#tasks-containter");
let taskTitle = document.getElementById("task-title");
let taskDescrition = document.getElementById("task-description");

// ==== 2. load tasks form localstorage when we open the page ====
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// ==== 3. Add New Task ====
addTaskBtn.addEventListener("click", function () {
  let title = taskTitle.value.trim();
  let description = taskDescrition.value.trim();

  if (title === "" || description === "") {
    alert("Please fill in both fields!");
    return;
  }

  let task = {
    id: Date.now(), // Unique id
    title,
    description,
    status: "pending",
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();

  taskTitle.value = "";
  taskDescrition.value = "";
});

// ==== 4. Display Tasks ====
function renderTasks() {
  tasksContainter.innerHTML = ""; // reset the task container
  tasks.forEach((task) => {
    tasksContainter.innerHTML += `
  <div class="border-start border-4 border-primary mb-3 p-3 task-content-box">
    <div class="d-flex justify-content-between align-items-center">
      <h5>${task.title}</h5>
      <span class="bg-secondary ps-1 pe-1 pb-1 text-light fw-bold rounded-2 small">${
        task.status
      }</span>
    </div>

    <div>
      <p>${task.description}</p>
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div class="form-check form-switch">
        <input 
          type="checkbox" 
          class="form-check-input mark-status" 
          data-id="${task.id}" 
          id="mark-${task.id}"
          ${task.status === "complete" ? "checked" : ""}
        />
        <label class="form-check-label" for="mark-${
          task.id
        }">Mark complete</label>
      </div>

      <button class="btn btn-danger btn-sm delete-btn" data-id="${
        task.id
      }">Delete</button>
    </div>
  </div>
`;
  });

  // calc the nums
  let total = tasks.length;
  let completed = tasks.filter((task) => task.status === "complete").length;
  let progress = total ? (completed / total) * 100 : 0;

  // varaibles
  let progressBar = document.getElementById("progress-bar");
  let totalCount = document.getElementById("total-count");
  let completedCount = document.getElementById("completed-count");

  // updata nums of boxes
  totalCount.textContent = total;
  completedCount.textContent = completed;

  // updata progress-bar
  progressBar.style.width = `${progress}%`;
  progressBar.textContent = `${Math.round(progress)}%`;

  // Remove all color to reset
  progressBar.classList.remove(
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-success"
  );

  // add color for all case 
  if (progress <= 30) {
    progressBar.classList.add("bg-danger");
  } else if (progress <= 60) {
    progressBar.classList.add("bg-warning");
  } else if (progress <= 90) {
    progressBar.classList.add("bg-info");
  } else {
    progressBar.classList.add("bg-success");
  }
}

// ==== 5. Deletion of Task ====
tasksContainter.addEventListener("click", function (e) {
  // Deletion
  if (e.target.classList.contains("delete-btn")) {
    let id = e.target.getAttribute("data-id");
    tasks = tasks.filter((task) => task.id != id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  // Chanage Status
  if (e.target.classList.contains("mark-status")) {
    let id = e.target.getAttribute("data-id");
    tasks = tasks.map((task) => {
      if (task.id == id) {
        task.status = e.target.checked ? "complete" : "pending";
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
});


// والحمدلله