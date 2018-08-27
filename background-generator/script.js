var css = document.querySelector("h3");
var labels = document.querySelectorAll("[for]");
var colors = document.querySelectorAll("[class=color]");
var newColor = document.querySelector("[class=new-color]");
var body = document.getElementById("gradient");
var direction = document.getElementById("d");
var ci = 2;
function createColorString()
{
	 var gradientColors = "";
	colors.forEach(function(color, i){
		gradientColors += color.value + (i<colors.length-1?", ":"");
		labels[i].style.background = color.value;
	});
	return gradientColors;
}

function setGradient() {
	colors.forEach(function(color){
		color.addEventListener("input", setGradient);
	});
	body.style.background = "linear-gradient(to " + direction.value + ", " + createColorString() + ")";
	css.textContent = body.style.background + ";";
}

function createNewColorInput(event){
	ci++;
	event.target.insertAdjacentHTML('beforebegin', '<label for=color"'+ci+'"><input id="color'+ci+'" type="color" class="color" name="color'+ci+'" value="#ff0034"></label>');
	labels = document.querySelectorAll("[for]");
	colors = document.querySelectorAll("[class=color]");
	setGradient();
}

newColor.addEventListener("click", createNewColorInput);
direction.addEventListener("input", setGradient);
setGradient();