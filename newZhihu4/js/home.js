$(function() {
	//	点击搜索宽扩大功能
	$('#searchInput').click(function() {
		$(this).attr("disabled", "disabled"); //点击一次有效
		$('#ask').hide();
		//		console.log($('#ask').width());
		var w = $('#ask').width();
		$('#search').width(function(n, c) {
			return c + w;
		});
		$('#searchInput').css("background", "white");
		$('#search').css("background", "white");
		//恢复
		$('#logo').click(function() {
			var w = $('#ask').width();
			$('#search').width(function(n, c) {
				return c - w;
			});
			$('#searchInput').css("background", "#e1eaf2");
			$('#search').css("background", "#e1eaf2");
			$('#ask').show();
		})
	});
	//展现设置列表
	$('#showSet').click(function() {
		$('#me').css("z-index", "100");
		$('#me').css("display", "block");

		$('#me > li:nth-child(5)').click(function() {
			$('#me').css({
				"z-index": "-100",
				"display": "none"
			});

		});
	});
	//退出
	function signout() {
		var signout = document.getElementById('signout');
		signout.addEventListener('click', function() {
			window.location.href = "login.html";
		})
	}
	signout();

	$('#home-show-btn').click(function() {
		$('#home-show-part').hide();
		$('#home-show-all').show();

	})
	$('#home-close-contents').click(function() {
		$('#home-show-part').show();
		$('#home-show-all').hide();
	})

})