let labels = Array.prototype.slice.call(document.querySelectorAll(`[for^=color]`));
let colors = Array.prototype.slice.call(document.querySelectorAll(`[class=color]`));
const direction = document.getElementById(`js-direction`);

const createColorString = () => colors.map(color => color.value).join(`, `);

const randomHex = () => {
	let color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
	while(color.length-7<0)
		color += `0`;
	return color;
}

const setGradient = (event) => {
	if(event && event.target.className===`color`) event.target.parentElement.style.background = event.target.value;
	const body = document.getElementById(`js-gradient`);
	const css = document.getElementById(`js-background`);
	let generatedSyntax = `linear-gradient(to ${direction.value}, ${createColorString()})${(direction.value==='top'||direction.value==='bottom')? ' no-repeat fixed' : ''}`;
	body.style.background = generatedSyntax;
	css.textContent = `background: ${generatedSyntax};`;
	return generatedSyntax;
}


const createNewColorInput = (event) => {
	let ci = colors.length + 1; //this is the number of color inputs
	event.target.insertAdjacentHTML(`beforebegin`, `<label for="color${ci}"><input id="color${ci}" type="color" class="color" name="color${ci}" value="#ff0034"></label>`);
	labels.push(document.querySelector(`[for=color${ci}`));
	colors.push(document.getElementById(`color${ci}`));
	colors[ci-1].addEventListener(`input`, setGradient);
	colors[ci-1].addEventListener(`contextmenu`, deleteColor);
	labels[ci-1].style.background = colors[ci-1].value = randomHex();
	return setGradient();
}

const deleteColor = (event) => {
	event.preventDefault();
	let colorIndex = colors.findIndex((el)=>el===event.target);
	colors.splice(colorIndex, 1);
	labels.splice(colorIndex, 1);
	event.target.parentElement.remove();
	colors.forEach((color, i)=>{
		color.setAttribute(`id`, `color${i+1}`);
		color.setAttribute(`name`, `color${i+1}`);
		labels[i].setAttribute(`for`, `color${i+1}`);
	});
	setGradient(null);
	return false;
}

const randomGradient = () => {
	colors.forEach((color, i)=>{labels[i].style.background = color.value = randomHex();});
	setGradient(null);
}

const gradientInit = () =>{
	const randomButton = document.getElementById(`js-random-button`);
	const newColor = document.querySelector(`[class=new-color]`);
	newColor.addEventListener(`click`, createNewColorInput);
	randomButton.addEventListener(`click`, randomGradient);
	randomButton.addEventListener(`mouseover`, ()=>{
		randomButton.textContent = `Randomize!`;
	});
	randomButton.addEventListener(`mouseout`, ()=>{
		randomButton.textContent = `Awesomeness!`;
	});
	direction.addEventListener(`input`, setGradient);
	colors.forEach((color, i) => {
		color.addEventListener(`input`, setGradient);
		color.addEventListener('contextmenu', deleteColor);
		labels[i].style.background = color.value = randomHex();
	});
	setGradient(null);
};

gradientInit();