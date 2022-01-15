var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

color1.value = "#86FEB4";
color2.value = "#802DD2";

function setGradient() {
	 var setColor= 
	"linear-gradient(to right, " +
	 color1.value +
	 ", " +
	 color2.value +
	 ")";

	 body.style.background = setColor;
	 css.textContent = body.style.background + ";";
}

window.onload = setGradient();

function randomColor() {
	var random1 = "#"+Math.floor((Math.random()*(1<<24)|0)).toString(16);
	var random2 = "#"+Math.floor((Math.random()*(1<<24)|0)).toString(16);

	color1.value = random1;
	color2.value = random2;

	setGradient();
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor);


