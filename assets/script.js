const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
let counter = 0;
const slidesLength = slides.length;
const textSlide = document.querySelector(".tagLine");
let dots;
const blocDots = document.querySelector(".dots");



function main() {
	createDots();
	prevSlide();
	nextSlide();
	clickDots();
}

main();
//ajoutez des bullet points au slider
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		//Créez un élément div
		const dot = document.createElement("div");
		//Ajoutez la classe "dot" à l'élèment div
		dot.className = "dot";
		// Sélectionnez un élément avec la classe "dots" et ajoutez l'élèment div comme enfant
		blocDots.appendChild(dot);
		console.log(i)

	}


	dots = document.querySelectorAll(".dot");
	dots[counter].classList.add("dot_selected");
}

function prevSlide() {
	arrowLeft.addEventListener("click", () => {
		counter = counter === 0 ? slidesLength - 1 : counter - 1;

		updateSlide()
	});
}

function nextSlide() {
	arrowRight.addEventListener("click", () => {
		counter = counter === slidesLength - 1 ? 0 : counter + 1;
		updateSlide();
	});
}

function clickDots() {
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			counter = index;
			updateSlide();
		});
	});
}


function updateSlide() {
	image.src = `./assets/images/slideshow/${slides[counter].image}`;
	textSlide.innerHTML = slides[counter].tagLine;
	dots.forEach((dot, key) => {
		//console.log(key + ',' + counter);
		if (key === counter) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}









