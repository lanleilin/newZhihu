$(function() {
	//隐藏对话框
	$('.mask').hide();
	$('#msg-dialog-hide').hide();
	$('#msg-send').click(function() {
		$('#msg-dialog-hide').show();
		$('.mask').show();

	});
	$('#msg-dialog-close').click(function() {
		$('#msg-dialog-hide').hide();
		$('.mask').hide();
	});
	$('.mask').click(function(){
	$('#msg-dialog-hide').hide();
		$(this).hide();
	})
	

	//重设storage
	//		window.localStorage.setItem('to', 1);
	//		window.localStorage.setItem("info", 1);
	//		window.localStorage.setItem('currentUser',1);
	//		window.localStorage.setItem('from',1);
	var getTo = window.localStorage.getItem("to");
	var getInfo = window.localStorage.getItem("info");
	var getFrom = window.localStorage.getItem('currentUser');
	var getcForm = window.localStorage.getItem('from');

	if(!getFrom) {
		window.localStorage.setItem('currentUser', "匿名用户");
	}

	//检测是否有私信
	if(!getTo || !getInfo || !getcForm) {
		window.localStorage.setItem('to', 1);
		window.localStorage.setItem("info", 1);
		//		window.localStorage.setItem('currentUser', 1);
		window.localStorage.setItem('from', getFrom);

	}

	//	console.log(getTo+':'+getInfo);

	var rTo = document.getElementById('msg-to-name');
	var rInfo = document.getElementById('msg-to-info');
	var rForm = window.localStorage.getItem('currentUser');

	//	console.log(rForm);

	var p = document.getElementById('msg-to-info-container');
	var liF = document.getElementById('msg-from-container');
	var liT = document.getElementById('msg-to-name-container');

	var send = document.getElementById('msg-dialog-send');
	var tArr;
	var iArr;

	var hook = document.getElementById('insertHook');
	var bhook = document.getElementById('bottom-hook');
	var tpl = new String;
	var idx = 0;
	var fromIdx = 0;
	var toIdx = 0;
	tpl = '<div class="msg-content" id="insertHook"><div class="msg-wrap"><img src="img/slicedImg/v2-178d2d967f20ca74f021c9a117770e0a_m.jpg" /><div class="msg-letter"><ul class="msg-header"><li id="msg-to-name-container">lanleilin</li><li> ：亲爱的 </li><li id="msg-from-container' + fromIdx + '"></li></ul><div id="prContainer' + idx + '"></div><ul class="msg-bottom"><li>2016年1月5日</li><li>查看对话</li><li>回复</li><li>删除</li></ul></div></div></div>';

	//send拼接字符串
	send.addEventListener('click', function() {
			//		alert('success');
			var name = rTo.value;
			var message = rInfo.value;
			//		var fromName=
			//		console.log(message);
			//		window.localStorage.setItem('to',name);
			//		window.localStorage.setItem('info',message);
			if(name && message) {
				getcForm += '/' + getFrom;
				//			console.log(getFrom);
				window.localStorage.setItem('from', getcForm);
				getTo += '/' + name;
				window.localStorage.setItem('to', getTo);
				//			console.log(getTo);
				getInfo += '/' + message;
				window.localStorage.setItem('info', getInfo);
				alert('发送成功');
			} else {
				alert('请填写完整信息');
			}

		})
		//字符串分割为数组

	tArr = getTo.split('/');
	fArr = getcForm.split('/');
	iArr = getInfo.split('/');
	console.log(iArr);
	console.log(fArr);
	console.log(getFrom);
	var load = document.getElementById('msg-load');
	load.addEventListener('click', function() {
		alert('success');
		//		p.innerHTML = getInfo;

		//生成p放置信息
		for(var i = 0; i < iArr.length; i++) {
			//			console.log(iArr[i]);
			idx++;
			fromIdx++;
			toIdx++;
			//			console.log(idx);

			tpl = '<div class="msg-content" id="insertHook"><div class="msg-wrap"><img src="img/slicedImg/v2-178d2d967f20ca74f021c9a117770e0a_m.jpg" /><div class="msg-letter"><ul class="msg-header"><li id="msg-to-name-container' + toIdx + '"></li><li> ：亲爱的 </li><li id="msg-from-container' + fromIdx + '"></li></ul><div id="prContainer' + idx + '"></div><ul class="msg-bottom"><li>2016年1月5日</li><li>查看对话</li><li>回复</li><li>删除</li></ul></div></div></div>';

			//所发信息
			var pr = document.createElement('p');
			pr.innerHTML = iArr[i];
			//所发用户
			//生成p相对的用户来源
			var tr = document.createElement('a');
			tr.innerHTML = tArr[i];
			//发送用户
			var fr = document.createElement('a');
			fr.innerHTML = fArr[i];
			//			console.log(fr);
			//			hook.appendChild('pr');
			//			$('#insertHook').append()
			//			$('pr').appendTo('hook');
			$('#bottom-hook').append(tpl);

			$('#prContainer' + idx).append(pr);
			$('#msg-from-container' + fromIdx).append(tr);
			$('#msg-to-name-container' + fromIdx).append(fr);
		}

	})
//退出登录
	function signout(){
	var signout=document.getElementById('signout');
	signout.addEventListener('click',function(){
		window.location.href="login.html";
	})
}
signout();
})