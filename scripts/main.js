function listenOnHamburgerMenu() {
	const hamburger = document.querySelector('#menu-button');
	const toggleMenu = (e) => {
		const headerContent = document.querySelector('.header-content');
		headerContent.classList.toggle('no-content')
	}
	hamburger.addEventListener('change', toggleMenu)
};

listenOnHamburgerMenu()

