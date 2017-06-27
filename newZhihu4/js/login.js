//登录注册切换效果

$(function() {
	$('#btLogin').hide();
	$('#l-myUsername').hide();
	$('#l-myPassword').hide();
	$('#login-login-btn').click(function() {
			$('#login-protocal').hide();
			$('#verifiCode').show();
			$('#myUsername').hide();
			$('#l-myUsername').show();
			$('#myPassword').hide();
			$('#l-myPassword').show();
			$(this).css({
				"color": "#0f88eb",
				"border-bottom": "2px solid #0f88eb"
			});

			//底边框
			$('#login-signup-btn').css({
				"color": "#878889",
				"border-bottom": "2px solid transparent"

			})
			$('#myTel').hide();
			//			$('#btLogin').text("登录");
			$('#btSignup').hide();
			$('#btLogin').show();
		})
		//点击注册按钮
	$('#login-signup-btn').click(function() {
		$('#login-protocal').show();
		$('#verifiCode').hide();
		$('#myUsername').show();
		$('#l-myUsername').hide();
		$('#myPassword').show();
		$('#l-myPassword').hide();
		$(this).css({
			"color": "#0f88eb",
			"border-bottom": "2px solid #0f88eb"
		});

		//底边框
		$('#login-login-btn').css({
			"color": "#878889",
			"border-bottom": "2px solid transparent"

		})
		$('#myTel').show();
		//		$('#btLogin').text("注册");
		$('#btSignup').show();
		$('#btLogin').hide();
	});

	//localStorage注册
	var signUp = document.getElementById('btSignup');
	var usn = document.getElementById('myUsername');
	var psw = document.getElementById('myPassword');
	var clr = document.getElementById('clr');
	var verify = document.getElementById('verify');
	var getUsn = window.localStorage.getItem('usn');
	var getPsw = window.localStorage.getItem('psw');
	var tel = document.getElementById('myTel');

	signUp.addEventListener('click', function() {

			//拼接用户名
			if(getUsn) {
				//	若用户名未注册则拼接
				var u = getUsn.split('/');
				var check = 1;
				for(var i = 0; i < u.length; i++) {
					if(u[i] == usn.value) {
						check = 0;
						alert('用户名已注册');
						break;
					}
				}
				//check通过，名未注册，拼接字符
				if(check) {
					getUsn += '/' + usn.value;
					//检测密码
					if(psw.value) {
						if(getPsw) {
							getPsw += '/' + psw.value;
							window.localStorage.setItem('psw', getPsw);
							alert('密码注册成功');
							window.localStorage.setItem('usn', getUsn);
							alert('用户名注册成功')
						} else {
							window.localStorage.setItem('psw', psw.value);
							alert('密码注册成功');
							window.localStorage.setItem('usn', getUsn);
							alert('用户名注册成功')
						}
					} else {
						alert('密码不能为空');
					}

				}

			} else {
				
				window.localStorage.setItem('usn', usn.value);
				alert('用户名注册成功');
				window.localStorage.setItem('psw',123);
			}

		})
		//onkeyup验证
		//用户名
	var info = document.getElementById('info');
	var nameInf = document.getElementById('nameInf');
	var mobileInf = document.getElementById('mobileInf');
	var pwInf = document.getElementById('pwInf');
	usn.onkeyup = function() {
			$('#nameInf').show();
			document.body.addEventListener('click', function() {
				$('#nameInf').hide();
			})
			if(getUsn) {
				var u = getUsn.split('/');
				console.log(u);
				for(var i = 0; i < u.length; i++) {
					if(u[i] == usn.value) {
						//								console.log('用户名已注册');
						//								console.log(i);
						nameInf.innerHTML = '用户名已注册';
						nameInf.style.color = 'red';
						break;
						//								continue;
					} else {
						//								console.log(i);
						nameInf.innerHTML = '用户名可注册';
						nameInf.style.color = 'green';
						//								break;
					}
				}
			} else {
				nameInf.innerHTML = '用户名可注册';
				nameInf.style.color = 'green';
			}
		}
		//密码
	psw.onkeyup = function() {
			$('#pwInf').show();
			document.body.addEventListener('click', function() {
				$('#pwInf').hide();
			})
			if(getPsw) {
				var p = getPsw.split('/');
				console.log(p);
				for(var i = 0; i < p.length; i++) {
					if(p[i] == psw.value) {
						//								console.log('用户名已注册');
						//								console.log(i);
						pwInf.innerHTML = '密码已注册';
						pwInf.style.color = 'red';
						break;
						//								continue;
					} else {
						//								console.log(i);
						pwInf.innerHTML = '密码可注册';
						pwInf.style.color = 'green';
						//								break;
					}
				}
			} else {
				pwInf.innerHTML = '密码可注册';
				pwInf.style.color = 'green';
			}
		}
		//手机号
	tel.onkeyup = function() {
		$('#mobileInf').show();
		document.body.addEventListener('click', function() {
				$('#mobileInf').hide();
			})
			//		console.log(tel.value);
			//		console.log(typeof(tel.value));
	}

	//清除数据
	clr.addEventListener('click', function() {
		window.localStorage.clear();
	})

	//验证用户名登录
		var signIn = document.getElementById('btLogin');
		var lusn = document.getElementById('l-myUsername');
		var lpsw = document.getElementById('l-myPassword');
//		var getUsn = window.localStorage.getItem('usn');
//		var getPsw = window.localStorage.getItem('psw');
		
		signIn.addEventListener('click',function(){
//			console.log(getUsn);
//			console.log(getPsw);
			var u=getUsn.split('/');
			var p=getPsw.split('/');
			console.log(u);
//			console.log(u[0]);
			//验证是否注册
			var name=lusn.value;
			var pw=lpsw.value;
			var checkName=1;
			var index=0;
			console.log(name);
			for(var i=0;i<u.length;i++){
				if(u[i]==name){
					checkName=0;
					index=i;
				}
				
			}
//			console.log(index);
			
			if(checkName){
				alert('用户未注册');
			}else{
				//匹配用户名和密码
				if(pw==p[index]){
					alert('登录成功');
					//记录当前用户
					var currentUser=u[index];
					console.log(currentUser);
					window.localStorage.setItem('currentUser',currentUser);

					window.location.href="homePage.html";
				}else{
					alert('密码不正确');
				}
			}
			//
		})

})