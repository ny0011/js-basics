const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function sortToDo(toDos) {
	return;
}

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);

	const cleanToDos = toDos.filter(function(toDo) {
		//  console.log(toDo.id, li.id);
		return toDo.id !== parseInt(li.id);
	});
	//	console.log(cleanToDos);

	/// --- sync with li's number
	const syncToDos = cleanToDos.filter(function(toDo) {
		const removedId = parseInt(li.id);

		if (toDo.id > removedId) {
			const changeLi = document.getElementById(toDo.id);
			toDo.id = toDo.id - 1;
			changeLi.id = toDo.id;
			console.log(changeLi);
		}
		return toDo;
	});
	/// ---

	toDos = syncToDos;
	// toDos = cleanToDos;
	console.log(toDos);
	saveToDo(toDos);
}

function saveToDo(toDos) {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	delBtn.innerHTML = "✅";
	delBtn.addEventListener("click", deleteToDo);
	span.innerText = text;

	li.appendChild(span);
	li.appendChild(delBtn);
	li.id = newId;

	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);

	saveToDo(toDos);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);

	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo) {
			paintToDo(toDo.text);
		});
	}
}

function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();
