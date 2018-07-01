const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const initialLIs = document.querySelectorAll("ul li");
function inputLength() {
	return input.value.length;
}

function deleteItem(event) {
	clickedButton = event.target;
	containingListItem = clickedButton.parentNode;
	containingListItem.parentNode.removeChild(containingListItem);
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	let del = document.createElement("button");		// 3. BONUS:
	del.appendChild(document.createTextNode("X"));	// When adding a new list item,
	del.addEventListener("click", deleteItem);		// it automatically adds the delete
	li.appendChild(del);							// button next to it.
	li.addEventListener("click", toggleDone);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function initialListLenght() {
	return initialLIs.length;
}
function toggleDone(event){				// 1. If you click on the list item, it toggles the .done class on and off.
	let clickedLI = event.target;
	clickedLI.classList.toggle("done");
}
for(let i = 0; i < initialListLenght(); i++){
	let del = document.createElement("button");			// 2. Add buttons next to each list item
	del.appendChild(document.createTextNode("X"));		// to delete the item when
	del.addEventListener("click", deleteItem);			// clicked on its corresponding
	initialLIs[i].appendChild(del);						// delete button
	initialLIs[i].addEventListener("click", toggleDone); // 1. If you click on the list item, it toggles the .done class on and off.
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);