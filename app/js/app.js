
document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('#menu').addEventListener('click', () => openNav())
	document.querySelector('#closebtn').addEventListener('click', () => closeNav())

	function openNav() {
		document.getElementById("mySidenav").style.width = "530px";
		document.getElementById("main").style.marginLeft = "250px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}
  
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("main").style.marginLeft = "0";
		document.body.style.backgroundColor = "white";
	}

	// Swiper
	const hotToures = new Swiper('.s1', {
		direction: 'horizontal',
		slidesPerView: 2,
		slidesPerColumn: 2,
		spaceBetween: 16,
		navigation: {
			nextEl: '.next-1',
			prevEl: '.prev-1',
		  },
	  });
	const popularToures = new Swiper('.s2', {
		direction: 'horizontal',
		slidesPerView: 2,
		slidesPerColumn: 1,
		spaceBetween: 16,
		navigation: {
			nextEl: '.next-2',
			prevEl: '.prev-2',
		  },
	  });

});
