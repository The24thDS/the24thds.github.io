const css = document.getElementById("js-background");
let labels = document.querySelectorAll("[for]");
let colors = document.querySelectorAll("[class=color]");
const newColor = document.querySelector("[class=new-color]");
const body = document.getElementById("gradient");
const direction = document.getElementById("d");
let ci = 2;
const createColorString = () =>
{
	let gradientColors = "";
	colors.forEach(function(color, i){
		gradientColors += color.value + (i<colors.length-1?", ":"");
		labels[i].style.background = color.value;
	});
	return gradientColors;
}

const setGradient = () => {
	colors.forEach(function(color){
		color.addEventListener("input", setGradient);
	});
	let generatedSyntax = `linear-gradient(to ${direction.value}, ${createColorString()})`;
	body.style.backgroundImage = generatedSyntax;
	css.textContent = `${generatedSyntax};`;
}

const createNewColorInput = (event) => {
	ci++;
	event.target.insertAdjacentHTML('beforebegin', `<label for="color${ci}"><input id="color${ci}" type="color" class="color" name="color${ci}" value="#ff0034"></label>`);
	labels = document.querySelectorAll("[for]");
	colors = document.querySelectorAll("[class=color]");
	return setGradient();
}

newColor.addEventListener("click", createNewColorInput);
direction.addEventListener("input", setGradient);
setGradient();