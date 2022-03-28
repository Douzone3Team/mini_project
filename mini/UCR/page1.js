// main.js
var toTopEl = document.querySelector('.to-top');
toTopEl.addEventListener('click', function () {
	// 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
	gsap.to(window, .7, {
		scrollTo: 0
	})
})



