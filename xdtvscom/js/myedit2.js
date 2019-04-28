var fk_old_onload = window.onload;
			$(window).load(function() {

				Site.cacheModuleFunc.runSiteInit();

				if(typeof fk_old_onload == "function") {
					fk_old_onload.apply(this, arguments);
				}

				Site.pageOnload();

				//样板网站要自动把标识是不是使用导航2.0的位设为true　旧样板有部分要保留旧导航

			});

			//错误上报
			(function() {
				var _jsErrCahche = [];
				var cacheOnError = window.onerror;
				window.onerror = function(sMsg, sUrl, sLine) {
					if(typeof Site == 'undefined') {
						alert('您的网页未加载完成，请尝试按“CTRL+功能键F5”重新加载。');
					}
					if(sLine < 1 || typeof sMsg != 'string' || sMsg.length < 1) {
						return;
					}

					var log = "Error:" + sMsg + ";Line:" + sLine + ";Url:" + sUrl;
					var alertLog = "Error:" + sMsg + "\n" + "Line:" + sLine + "\n" + "Url:" + sUrl + "\n";
					var encodeUrl = function(url) {
						return typeof url === "undefined" ? "" : encodeURIComponent(url);
					};

					var ajax = true;
					var obj = {
						'm': sMsg,
						'u': sUrl,
						'l': sLine
					};
					for(var i = 0; i < _jsErrCahche.length; i++) {
						if(_jsErrCahche[i].m == obj.m && _jsErrCahche[i].u == obj.u && _jsErrCahche[i].l == obj.l) {
							ajax = false;
							break;
						}
					}

					if(ajax) {
						_jsErrCahche.push(obj);
						_faiAjax.ajax({
							type: "post",
							url: "ajax/logJsErr_h.jsp?cmd=jsErr",
							data: 'msg=' + encodeUrl(log)
						});
					}
					if(Fai.top._devMode) {
						alert(alertLog);
					}
					if(typeof cacheOnError == "function") {
						cacheOnError(sMsg, sUrl, sLine);
					}
				};
			})();

			Site.beforeUnloadFunc();

			// 在线视频模块

			Site.loadCss("//g-2.ss.faisys.com/css/comm/video.js/video-js.min.css?v=201801161729");
			Site.loadCss("//g-2.ss.faisys.com/css/video.min.css?v=201810221139");
			// $LAB.script("//g-0.ss.faisys.com/error_js_video_ie8_js");
			$LAB.script("//g-1.ss.faisys.com/js/comm/video.js/video.min.js?v=201807312128");

			//日历控件新样式，by jser 2017-10-7
			Site.loadCss("//g-2.ss.faisys.com/css/datepicker.min.css?v=201810101507");

			$LAB.script("//g-1.ss.faisys.com/js/bookingSubmitPanel.min.js?v=201807021153");
			$LAB.script("//g-1.ss.faisys.com/js/photoSlide.min.js?v=201806191702");
			$LAB.script("//g-1.ss.faisys.com/js/imageEffect.min.js?v=201810221139")
				.wait(function() {
					jzUtils.trigger({
						"name": "ImageEffect.FUNC.BASIC.Init",
						"base": Site
					});
				});

			$LAB.script("//g-1.ss.faisys.com/js/faiFloatPanel.min.js?v=201806041139")
				.script("//g-1.ss.faisys.com/js/faiFloatPanel_bindEvent.min.js?v=201803121303")

				.wait(function() {
					Site.loadCss("//g-2.ss.faisys.com/css/faiFloatPanel.min.css?v=201807301313", function() {

					});
				});

			$LAB.script("//g-1.ss.faisys.com/js/moduleAnimation.min.js?v=201807021153")
				.wait(function() {

					jzUtils.trigger({
						"name": "moduleAnimation.subscribe",
						"base": Site
					});

					jzUtils.run({
						"name": "moduleAnimation.scroll",
						"base": Site
					});

					jzUtils.run({
						"name": "moduleAnimation.publish",
						"base": Site
					});

				});