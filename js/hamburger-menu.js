var screenWidth = window.innerWidth;
var mainMenu = document.getElementById('mainMenu')
var bgHeader = document.getElementById('bgHeader')


if (screenWidth <= 992) {
	console.log(screenWidth);	
	bgHeader.classList.add('bg-pattern-turquoise');
};

