$(function() {
	//	alert('success');
	//百度功能

	var input = document.getElementById("theme-baidu-search");
	input.onkeyup = function() {
		var newScript = document.createElement("script");
		newScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + input.value + '&cb=fn';
		document.body.appendChild(newScript);

	}

	$('#theme-dialog-hide').hide();
	$('#theme-baidu').click(function() {
		$('#theme-dialog-hide').show();

	})
	$('#theme-dialog-close').click(function() {
		$('#theme-dialog-hide').hide();

	});
	//查询天气功能
	var $texts = $("#theme-weather-text");
	var $btn = $("#theme-weather-btn");
	var str = "";

	$texts.on("focus", function() {
		$texts.val("").css("color", "#aaa");
	});
	$btn.on("click", function() {
		str = $texts.val();
		if(str.length > 0) {
			str = encodeURIComponent(str);
			$.ajax({
				dataType: "jsonp",
				type: "get",
				url: "http://v.juhe.cn/weather/index?format=2&cityname=" + str + "&key=2dd40af1612a35d675c71188c6d54732",

				success: function(data) {
					var data = data.result.future;
					console.log(data);
					for(var i = 0; i < data.length; i++) {
						var time = "<span>" + data[i].date + "</span>";
						var temperature = "<span>" + data[i].temperature + "</span>";
						var weather = "<span>" + data[i].weather + "</span>";
						var liS = "<li>" + time + temperature + weather + "</li>";
						$("#theme-weather-ul").append(liS);
					}
				}
			});
		} else {
			$texts.val("WRONG！").css("color", "red");
		}
	});

	$('#theme-weather-box').hide();
	$('#theme-weather').click(function() {
		$('#theme-weather-box').show();

	})
	$('#theme-weather-close').click(function() {
		$('#theme-weather-box').hide();

	})

	//时钟功能
	var num = 3;
	var numm = 3;
	var numh = 3;

	var s;
	var m;
	var h;
	//				设置时间
	setInterval(function() {
		var myDate = new Date();
		s = myDate.getSeconds();
		m = myDate.getMinutes();
		h = myDate.getHours();

	}, 1000);
	//生成页面
	clearInterval();
	var timer = setInterval(function() {
		var newDiv = '<div class="page" id="page' + num + '">' + s + '</div>';
		$('#pagegroup').append(newDiv);

		//					分
		var newDivm = '<div class="page" id="pagem' + numm + '">' + m + '</div>';
		$('#pagegroup-m').append(newDivm);
		//					时
		var newDivh = '<div class="page" id="pageh' + numh + '">' + h + '</div>';
		$('#pagegroup-h').append(newDivh);
		numh++;
		numm++;
		num++;
	}, 1000);
	//翻页
	clearInterval();
	setInterval(function() {
		next();
		nextm()
		nexth();

	}, 1000);
	
	$('#wrapbox').hide();
	$('#wrapbox').click(function(){
		$(this).hide();
	})
	$('#theme-time').click(function(){
		$('#wrapbox').show();
	})
	
	if(1){
		alert('success');
	}

})