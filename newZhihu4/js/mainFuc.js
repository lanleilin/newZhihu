//百度回调函数
//function fn(data) {
//	console.log(data);
//	
//}

function fn(data) {
	console.log(data);
	var d = data.s[4];
	var arr = data.s;
	var len = arr.length;
//	console.log(len);
	var html = '';
	//取三条数据
	for(var i = 0; i < 3; i++) {
		html += '<li><a href="https://www.baidu.com/s?wd=' + arr[i] + '" target="_blank">' + arr[i] + '</a></li>';

	}
	var infoContainer = document.getElementById("theme-info-container");
	infoContainer.innerHTML = html;
	console.log(d);
}

//时钟函数
var curIndex = 1;
			//向后翻页
			function next() {

				var curPage = document.getElementById('page' + curIndex);
				curPage.style.webkitTransform = "rotateX(-90deg)";

				curIndex++;
				var nextPage = document.getElementById('page' + curIndex);
				nextPage.style.webkitTransform = "rotateX(0deg)";
			}
			//翻页分
			var curIndexm = 1;

			function nextm() {
				var curPagem = document.getElementById('pagem' + curIndexm);
				//				console.log(curPagem)
				curPagem.style.webkitTransform = "rotateX(-90deg)";

				curIndexm++;
				var nextPagem = document.getElementById('pagem' + curIndexm);
				nextPagem.style.webkitTransform = "rotateX(0deg)";
			}
			//翻页小时
			var curIndexh = 1;

			function nexth() {
				var curPageh = document.getElementById('pageh' + curIndexh);

				curPageh.style.webkitTransform = "rotateX(-90deg)";

				curIndexh++;
				var nextPageh = document.getElementById('pageh' + curIndexh);
				nextPageh.style.webkitTransform = "rotateX(0deg)";
			}