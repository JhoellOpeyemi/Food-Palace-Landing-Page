const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	hamburger.classList.toggle('close');
});

function person(name, age) {
	this.name = name;
	this.age = age;
}

const jhoell = new person('Jhoell', 18);
console.log(jhoell.age);
