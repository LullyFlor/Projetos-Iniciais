function createTodo() {
  const userInput = document.getElementById('note').value;
  const listItem = document.createElement("li");
  const todosContainerElement = document.getElementById('todos-container');
  listItem.innerHTML = userInput;
  todosContainerElement.appendChild(listItem);
  listItem.setAttribute("onclick", "todoCheck(event, this)");
  document.getElementById('note').value = '';
}

function deleteTodos() {}

function todoCheck(e, todo) {
  if (todo.style.textDecoration === '') {
    todo.style.textDecoration = 'line-through';
  } else {
    todo.style.textDecoration = '';
  }
}