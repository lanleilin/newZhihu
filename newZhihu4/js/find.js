$(function() {

	//对话框居于屏幕中间
//	var beCenter = document.getElementById('find-book1');
//	beCenter.addEventListener('click', function() {
//		alert('success');
//		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//		console.log(scrollTop);
//		var cl = document.documentElement.clientHeight;
//		console.log(cl);
//		var be = document.getElementById('find-dialog-hook');
//		be.style.top = scrollTop + 'px';
//
//	})
	//	$('#find-dialog-hook').css({
	//		"position":"absolute",
	//		"color":"blue",
	//		"top":"10px"
	//	});

	//	window.onscroll = function() {
	//		var oDiv = document.getElementById("find-dialog-hook");
	//		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	//
	//		oDiv.style.top = startMove(document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop);
	//	}
	//
	//	var timer = null;
	//
	//	function startMove(iTarget) {
	//		clearInterval(timer);
	//
	//		timer = setInterval(function() {
	//			var oDiv = document.getElementById("div1");
	//			var speed = (iTarget - oDiv.offsetTop) / 4;
	//			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	//
	//			if(oDiv.offsetTop == iTarget) {
	//				clearInterval(timer);
	//			} else {
	//				oDiv.style.top = oDiv.offsetTop + speed + "px";
	//			}
	//
	//		}, 30);
	//
	//	}

	//	var ev=window.scrollTop();

	var index = 1220561;
	//每按一次加载一次
	$('#find-load').click(function() {
		//		alert('success');
		index++;
		$.ajax({
			dataType: "jsonp",
			type: "get",
			url: 'https://api.douban.com/v2/book/' + index,
			success: function(data) {
				console.log(data);
				var author = data.author[0];
				console.log(author)
				var bookName = data.title;
				console.log(bookName);
				var publisher = data.publisher;
				console.log(publisher);
				var imgSrc = data.images.large;
				console.log(imgSrc);
				var price = data.price;
				var page = data.pages;
				var summary = data.summary;
				var catalog = data.catalog;

				//var findBook='<div class="find-book-wrap" id="find-book1"><img id="find-book-img1220561" src=""/><span id="find-title-1220561">烘焙的美好时光</span><span id="find-author">SansanL 等</span><span id="find-publisher">知乎周刊</span></div>';
				var findBook = '<div class="find-book-wrap" id="find-book' + index + '"></div>';

				var spanTitle = '<span id="">' + bookName + '</span>';
				var spanAuthor = '<span id="">' + author + '</span>';
				var spanPublisher = '<span id="">' + publisher + '</span>';
				var img = '<img src="' + imgSrc + '"/>';

				$('#find-hook').append(findBook);
				$('#find-book' + index).append(img);

				$('#find-book' + index).append(spanTitle);
				$('#find-book' + index).append(spanAuthor);
				$('#find-book' + index).append(spanPublisher);
				//加载成功后跳转到页面底部
				document.body.scrollTop = document.body.scrollHeight;

				//生成隐藏对话框
				//				var findDialog = '<div class="find-book-wrap" id="find-dialog' + index + '"></div>';
				//				var findUl = '<ul id="find-ul' + index + '"></ul>';
				//
				//				var spanPrice = '<li><span id="find-dialog-close'+index+'">关闭   价格</span><span id="">' + price + '</span></li>';
				//				var spanPage = '<li><span id="">页数</span><span id="">' + page + '</span></li>';
				//				var pSummary = '<li><span id="">导读</span><p id="">' + summary + '</p></li>';
				//				var pCatalog = '<li><span id="">目录</span><p id="">' + catalog + '</p></li>';
				//
				//				$('#find-dialog-hook').append(findDialog);
				//				$('#find-dialog' + index).append(findUl);
				//				$('#find-ul' + index).append(spanPrice);
				//				$('#find-ul' + index).append(spanPage);
				//				$('#find-ul' + index).append(pSummary);
				//				$('#find-ul' + index).append(pCatalog);

				console.log(index);
				//隐藏描述
				//默认hide
				//				$('#find-dialog'+index).hide();

				$('#find-book' + index).click(function() {
					alert('success');
					//将生成的对话框定位到窗口位置
					var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
					console.log(scrollTop);
					var cl = document.documentElement.clientHeight;
					console.log(cl);
					var be = document.getElementById('find-dialog-hook');
					be.style.top = scrollTop + 'px';

					//展现
					//					$('#find-dialog'+index).show();

					var findDialog = '<div class="find-book-wrap" id="find-dialog' + index + '"></div>';
					var findUl = '<ul id="find-ul' + index + '"></ul>';

					var spanPrice = '<li><span id="find-dialog-close' + index + '">关闭   价格</span><span id="">' + price + '</span></li>';
					var spanPage = '<li><span id="">页数</span><span id="">' + page + '</span></li>';
					var pSummary = '<li><span id="">导读</span><p id="">' + summary + '</p></li>';
					var pCatalog = '<li><span id="">目录</span><p id="">' + catalog + '</p></li>';

					$('#find-dialog-hook').append(findDialog);
					$('#find-dialog' + index).append(findUl);
					$('#find-ul' + index).append(spanPrice);
					$('#find-ul' + index).append(spanPage);
					$('#find-ul' + index).append(pSummary);
					$('#find-ul' + index).append(pCatalog);
					
					
					$('#find-dialog-close' + index).click(function() {
					alert('success');
					$('#find-dialog' + index).hide();
				})

				});
				//				关闭对话框

//				$('#find-dialog-close' + index).click(function() {
//					alert('success');
//					$('#find-dialog' + index).hide();
//				})

				//	$('#find-book-img1220561').append();
			}
		});

	})

	//	$.ajax({
	//		dataType: "jsonp",
	//		type: "get",
	//		url: 'https://api.douban.com/v2/book/' + index,
	//		success: function(data) {
	//			console.log(data);
	//			var author = data.author[0];
	//			console.log(author)
	//			var bookName = data.title;
	//			console.log(bookName);
	//			var publisher = data.publisher;
	//			console.log(publisher);
	//			var imgSrc = data.images.large;
	//			console.log(imgSrc);
	//			//			var img=data.
	//
	//			//var findBook='<div class="find-book-wrap" id="find-book1"><img id="find-book-img1220561" src=""/><span id="find-title-1220561">烘焙的美好时光</span><span id="find-author">SansanL 等</span><span id="find-publisher">知乎周刊</span></div>';
	//			var findBook = '<div class="find-book-wrap" id="find-book1220561"></div>';
	//
	//			var spanTitle = '<span id="">' + bookName + '</span>';
	//			var spanAuthor = '<span id="">' + author + '</span>';
	//			var spanPublisher = '<span id="">' + publisher + '</span>';
	//			var img = '<img src="' + imgSrc + '"/>';
	//
	//			$('#find-hook').append(findBook);
	//			$('#find-book1220561').append(img);
	//
	//			$('#find-book1220561').append(spanTitle);
	//			$('#find-book1220561').append(spanAuthor);
	//			$('#find-book1220561').append(spanPublisher);
	//
	//			//	$('#find-book-img1220561').append();
	//		}
	//	});

	//生成界面
	//var findBook='<div class="find-book-wrap" id="find-book1"><img src=""/><span id="find-title">烘焙的美好时光</span><span id="find-author">SansanL 等</span><span id="find-publisher">知乎周刊</span></div>';
	//	$('#find-hook').append(findBook);

})