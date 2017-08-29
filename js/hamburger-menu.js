var screenWidth = window.innerWidth;
var mainMenu = document.getElementById('mainMenu')
var bgHeader = document.getElementById('bgHeader')
var menuItems = document.getElementById('menuItems')


if (screenWidth <= 992) {
	console.log(screenWidth);	
	bgHeader.classList.add('bg-pattern-turquoise');
	bgHeader.style.height="initial";
	var home = document.createElement('li');
	home.setAttribute('class','main-menu__item');
	menuItems.appendChild(home);
	var homeLink = document.createElement('a');
	homeLink.setAttribute('class','main-menu__action', 'href','index.html');
	homeLink.textContent = 'home';
	home.appendChild(homeLink);
};

