// ---------------------------
// Counter (a number that goes up)
// ---------------------------

let count = 0;

const countValueEl = document.getElementById("countValue");
const countButtonEl = document.getElementById("countButton");

countButtonEl.addEventListener("click", () => {
  count = count + 1;
  countValueEl.textContent = String(count);
});

// ---------------------------
// Todo list (add items)
// ---------------------------

const todoInputEl = document.getElementById("todoInput");
const addTodoButtonEl = document.getElementById("addTodoButton");
const todoListEl = document.getElementById("todoList");

function addTodo() {
  const text = todoInputEl.value.trim();

  // If the user typed nothing, do nothing.
  if (text === "") {
    alert("Type something first!");
    return;
  }

  // Create a new <li> element
  const li = document.createElement("li");
  li.textContent = text;

  // Add it to the <ul>
  todoListEl.appendChild(li);

  // Clear the input
  todoInputEl.value = "";
  todoInputEl.focus();
}

addTodoButtonEl.addEventListener("click", addTodo);

// Bonus: press Enter to add
todoInputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
