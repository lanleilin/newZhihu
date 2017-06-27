(function() {
	var html = document.documentElement;
	var hWidth = html.getBoundingClientRect().width;
	//				console.log(hWidth);
	html.style.fontSize = hWidth / 15 + "px"; //设置默认字符大小 25
	var a = html.style.fontSize;
	//				console.log(a);
})();