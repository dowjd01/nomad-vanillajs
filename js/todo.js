const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const li = event.target.closest("li");
  if (!li) return;

  toDoList.removeChild(li);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text, id = Date.now()) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = id;
  toDoList.appendChild(li);

  if (!toDos.some((toDo) => toDo.id === id)) {
    const toDoObj = {
      text,
      id
    };
    toDos.push(toDoObj);
    saveToDos();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value.trim();
  if (currentValue === "") return;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => paintToDo(toDo.text, toDo.id));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
