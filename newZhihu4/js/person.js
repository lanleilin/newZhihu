$(function() {
	//	alert('success');
	var load = document.getElementById('person-msg-load');
	var index = 0;

	function loadPerson() {
		var arr1 = [];
		var s = '';
		var xhr = new XMLHttpRequest();
		var url = 'readme.txt';
		xhr.open('GET', url);
		xhr.send();
		//返回string: src,name,title
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				//			console.log(xhr.responseText);
				s = xhr.responseText;
				//拿到每个人数据
				arr1 = s.split('#');
				//			for(var i = 0; i < arr1.length; i++) {
				//				var arr2 = arr1[i].split(',');
				//				for(var j = 0; j < arr2.length; j++) {
				//					console.log(arr2[j]);
				//				}
				//			}
				if(index == arr1.length - 1) {
					index = 0;
				}
				var arr2 = arr1[index].split(',');

				var span = "<span>" + arr2[1] + "</span>";
				var p = "<p>" + arr2[2] + "<p>";
				var img = "<img src='" + arr2[0] + "' />";
				var btn = "<button>取消关注</button>";

				var div = "<div class='person-res-div' id='person-response" + index + "'></div>";
				$('#person-hook').append(div);

				$('#person-response' + index).append(img);
				$('#person-response' + index).append(span);
				$('#person-response' + index).append(btn);
				$('#person-response' + index).append(p);
					var check=1;
				$('.person-res-div > button').click(function() {
					//		alert('success');
//					console.log(23)

					if(check) {
						$(this).css({
							"color": "white",
							"background": "#225599"
						});
						$(this).text('关注');
						check=0;
					}else{
						$(this).css({
							"color": "#888888",
							"background": "#eeeeee"
						});
						$(this).text('取消关注');
						check=1;
					}

				})
			}
		}
	}
	load.addEventListener('click', function() {
		//		alert('success');
		loadPerson();
		index++;
	});

})