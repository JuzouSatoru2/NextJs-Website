window.dataLayer = window.dataLayer || [];
function gtag() {
	dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-124672572-1");

function changebgimg(num) {
	let check = Math.floor((Math.random() * 100) + 1);
	let rd = 0;
	if (check >= 70) {
		rd = Math.floor((Math.random() * 2) + 1);
	}
	if (rd === 1 || num === 1) {
		$("#imgsrc").css("background-image", "url(/static/images/login.jpg)");
		$("#srcimg").css("background-image", "url(/static/images/login.jpg)");
	} else if (rd === 2 || num === 2) {
		$("#imgsrc").css("background-image", "url(/static/images/parallax3.jpg)");
		$("#srcimg").css("background-image", "url(/static/images/parallax3.jpg)");
	}
}

$(document).ready(() => {
	changebgimg(0);
    if ('serviceWorker' in navigator) {
    	window.addEventListener('load', () => {
    		navigator.serviceWorker.register('/service-worker.js');
    	})
    }
	console.log("%c I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "color:#bf1a40");
});

$(document).ready(() => {
	$(".padX0").on("click", function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: $("#scroll").offset().top}, 700);
	});
});