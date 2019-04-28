Fai.top = window;
			var _Global = {},
				bgmCloseToOpen = false,
				statId = -1,
				_debug = false,
				_isPre = false,
				_newsGuideJumpToTemplateUrl = 'sf16590494.faisco.cn',
				// 满足新手指引的标志位 
				_showNewUsersGuide = false,
				_newsGuideClickHelp = false,
				_newsGuideTitle = false,
				_newsGuideCopyDemo = false,
				_newsGuideReplaceImg = false,
				_newsGuideAddModule = false,
				_newsGuideClickPanel = false,
				_devMode = false,
				_guideNewUserStep = -1,
				_colOtherStyleData = {
					"independentList": [],
					"hh": false,
					"fh": false,
					"y": 0,
					"h": 0,
					"layout4Width": 0,
					"layout5Width": 0
				}, // 当前页面的数据    
				_templateOtherStyleData = {
					"independentList": [],
					"h": 967,
					"hh": false,
					"fh": false,
					"y": 0,
					"layout4Width": 0,
					"layout5Width": 0
				}, // 全局的数据
				_allowedHtmlUrl = true,
				_openHtmlUrl = true,
				_advertType = 1,
				_isBUser = true,
				manageClose = false,
				_proSiteQueryStr = ''; //by jser
			httpStr = 'https://';
			_Global.visitorAdData = {};
			vipExpireTime = '2021-03-06 14:28:44';
			siteVipBeforeExpireDays = 864;

			// _isPre : dep3环境
			// debug: 本地和独立环境

			var _homeHost = "www.fkw.com";

			var _templateDefLayout = {
				BANNER_NAV: 0,
				NAV_FLOAT: 1,
				LEFT_NAV_BANNER_RIGHT_HIDE: 3,
				LEFT_NAV_CENTER_BANNER_RIGHT_HIDE: 4,
				LEFT_BANNER_NAV_RIGHT_HIDE: 5,
				LEFT_NAV_EXPEND_CENTER_BANNER: 6,
				CENTER_TOP_BANNER_RIGHT_HIDE: 7,
				LEFT_HIDE_CENTER_TOP_BANNER: 8,
				NAV_FLOAT_ON_BANNER: 9,
				NAV_BANNER: 10
			};

			$(function() {

				Site.ajaxLoadModuleDom(2, 0, {
					"_ajaxLoadModuleList": [],
					"_partDomInfoList": [],
					"fullUrl": "/"
				});

				Site.showOrHideMailBox();

				Site.loginSiteInit('lz12240209', 'faisco.cn', false, "");

				//topBarMember 

				if(Fai.top._manageMode) {
					//by jser 2018-9-11
					Fai.top._bigAdOptions = {
						"sevenCelebration": false,
						"sevenKnowMoreUrl": "http://jz.fkw.com/alliance.html",
						"sevenQQUrl": "http://i.fkw.com/count/agentCount.jsp?s=1",
						"dailyImgUrl": "http://i.fkw.com/jump.jsp?t=40&purchaseFrom=jzFirstPurchasePop#appId=shop&tab=0?fromPageId=3",
						_timer: null,
						delayClickLog: function() {
							clearTimeout(Fai.top._bigAdOptions._timer);
							Fai.top._bigAdOptions._timer = setTimeout(function() {
								Site.logDog(200623, 8);
							}, 50);
						},
						onShow: function() {
							Site.logDog(200623, 7);
						},
						"onConfirm": function() {
							Fai.top._bigAdOptions.delayClickLog();
						},
						onPanelClick: function() {
							Fai.top._bigAdOptions.delayClickLog();
						}
					}
				}

				if(false) {
					if(Fai.top.$(".drawLottery").length == 0) {
						Site.popBigAdWindow(); // 弹出免费版引导付费广告
					}
				}

				// 绑定退出事件
				Site.bindBeforeUnloadEvent(false, false, false);

				Site.initTemplateLayout(_templateDefLayout.NAV_FLOAT, true, false);
				// spider统计

				// ajax统计
				Site.total({
					colId: 2,
					pdId: -1,
					ndId: -1,
					sc: 0,
					rf: "/",
					statId: statId
				});
				//保留旧用户的初始化版式区域4 和区域5 中，区域4的padding-right空间
				Site.colLayout45Width();
				//各个模块inc吐出脚本

				Site.initCorpTitle();

				Site.initSimpleTextContent(364, 0);

				Site.initBanner({
					"_open": true,
					"data": [{
						"title": "",
						"desc": "",
						"imgWidth": 1580,
						"imgHeight": 670,
						"ot": 0,
						"src": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
						"edgeLeft": "",
						"edgeRight": ""
					}, {
						"title": "",
						"desc": "",
						"imgWidth": 1366,
						"imgHeight": 721,
						"ot": 1,
						"src": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
						"edgeLeft": "",
						"edgeRight": ""
					}],
					"width": 1580,
					"height": 721,
					"playTime": 4000,
					"animateTime": 1500,
					"from": "banner",
					"btnType": 0,
					"wideScreen": false
				}, {
					"_open": false
				}, 4);
				Site.initSimpleTextContent(317, 0);
				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 317,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				Site.cacheModuleFunc.init('initFlBtnStyle', {
					"moduleId": 318,
					"btnNumSystem": 101,
					"btnStyle": {
						"s": {
							"t": 1,
							"w": 107,
							"h": 40
						},
						"bg": {
							"t": 1,
							"c": "transparent",
							"r": 3
						},
						"r": {
							"t": 2,
							"lt": 0,
							"rt": 0,
							"lb": 0,
							"rb": 0
						},
						"sh": {
							"t": 0,
							"dx": 0,
							"dy": 0,
							"f": 0,
							"c": "#000000"
						},
						"b": {
							"t": 2,
							"c": "#ffffff",
							"w": 1
						}
					},
					"otherStr": {
						"cc": "#c40000",
						"utc": 0,
						"gcc": "#fff",
						"bcc": "#000",
						"imc": 0
					}
				});
				Site.adjustFlBtnPos(318);
				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 318,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				Site.setFullMeasureBgHightInIe6(315);;
				$(function() {
					Site.inFullmeasueAnimation.animateFm(315, 0, 1, {
						"c": 0,
						"d": 4.0,
						"s": 1.0,
						"u": 0
					});
				});
				Site.loadNewsList(421, {
					"y": 0,
					"s": 0,
					"w": 1
				}, false);
				Site.loadNewsNewStyle(421, false, false, false, true, false, false, false, false, true, false, false);
				Site.initMixNews({
					moduleId: 421,
					leader: '0'
				});

				Site.setFullMeasureBgHightInIe6(422);;
				$(function() {
					Site.inFullmeasueAnimation.animateFm(422, 0, 1, {
						"c": 0,
						"d": 4.0,
						"s": 1.0
					});
				});
				Site.initSimpleTextContent(327, 0);
				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 327,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				Site.setFullMeasureBgHightInIe6(324);;
				$(function() {
					Site.inFullmeasueAnimation.animateFm(324, 0, 1, {
						"c": 0,
						"d": 4.0,
						"s": 1.0
					});
				});
				Site.initSimpleTextContent(344, 0);
				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 344,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 349,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				Site.setFullMeasureBgHightInIe6(342);;
				$(function() {
					Site.inFullmeasueAnimation.animateFm(342, 0, 1, {
						"c": 0,
						"d": 4.0,
						"s": 1.0,
						"u": 0
					});
				});
				Site.initSimpleTextContent(355, 0);
				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 355,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				Site.loadPhotoGallery({
					id: 'module453',
					scale: 2,
					cus: true,
					effType: 1,
					flag: 'listPhotos'
				});
				jzUtils.run({
					"name": "ImageEffect.FUNC.BASIC.Init",
					"callMethod": true
				}, {
					"moduleId": 453,
					"imgEffOption": {
						"effType": 1,
						"borderType": false,
						"borderColor": "#000",
						"borderWidth": 1,
						"borderStyle": 1,
						"style": 89,
						"fullMaskCusBg": false,
						"fullMaskCusDisc": false,
						"halfMaskCusBg": false,
						"halfMaskCusDisc": false,
						"fullMaskOpenDisc": false
					},
					"tagetOption": {
						"nameHidden": false,
						"nameWordWrap": false,
						"moduleStyle": 89,
						"targetParent": "photo-container",
						"target": "img-container",
						"picScale": 2
					},
					"callback": Site.createImageEffectContent_photo,
					"callbackArgs": []
				});

				Site.setFullMeasureBgHightInIe6(353);;
				$(function() {
					Site.inFullmeasueAnimation.animateFm(353, 0, 1, {
						"c": 0,
						"d": 4.0,
						"s": 1.0,
						"u": 0
					});
				});
				Site.initSimpleTextContent(362, 0);
				jzUtils.run({
					'name': 'moduleAnimation.subscribe',
					'callMethod': true
				}, {
					"id": 362,
					"contentAnimationList": [],
					"list": [{
						"t": 2,
						"r": 3,
						"s": 0.6,
						"d": 0.0
					}]
				});

				Site.ajaxLogDog();

				//收集浏览器信息，统计dog
				Site.sendBrowerInfo(false);

				//如果有首页弹窗的话，需要先打开首页弹窗

				Site.initPage(); // 这个要放在最后，因为模块组初始化时会把一些模块隐藏，导致没有高度，所以要放最后执行

				setTimeout(afterModuleLoaded, 0);

				Site.loadCss("//g-2.ss.faisys.com/css/bannerAnimation.min.css?v=201708301449");

				Site.triggerGobalEvent("siteReadyLoad");

			});

			function afterModuleLoaded() {

				Site.initPage2();
				Site.initBackToTopTool(false, false, true, '回到顶部', 'special_02');

			} // afterModuleLoaded end

			var _lcid = 2052,
				_siteDomain = '//www.xiaoxiaoyanshuojia.cn',
				_resRoot = '//g-0.ss.faisys.com',
				_colId = 2,
				_fromColId = -1,
				_designAuth = false,
				_manageMode = false,
				_oem = false,
				_siteVer = 40,
				_manageStatus = false;

			var _jzProUrl = '';
			var _flyerManageDomain = '';
			var _siteAdmDomain = '',
				_jzHomeUrl = '';

			//多网站聚合页地址
			Fai.top._jzAllSiteDomain = _oem ? 'i.vip.webportal.top' : 'i.jz.fkw.com';

			_jzProUrl = 'jz.fkw.com';
			_flyerManageDomain = 'cdm.faisco.cn';
			_siteAdmDomain = 'faisco.cn';
			_jzHomeUrl = 'jz.fkw.com';

			_Global._webRightBar = false;
			var _isMemberLogin = false; // 会员是否登陆了
			var _noCover = 0; // 隐藏弹窗遮罩层
			_Global._footerHidden = false; // 底部是否隐藏 原因：需要判断有些底部js方法是否运行 true:隐藏；false: 显示
			_Global._footerHiddenAllowed = true;

			var _navPositionFixTop = false; // 导航栏固定到顶部

			var nav2SubMenu = [];
			var nav106SubMenu = [];
			var nav105SubMenu = [];
			var nav107SubMenu = [];
			var nav108SubMenu = [];
			var nav109SubMenu = [];
			var nav101SubMenu = [];
			var nav102SubMenu = [];

			var _useBannerVersionTwo = false; //使用横幅2.0的标志
			var _customBackgroundData = {
				"styleDefault": true,
				"s": true,
				"h": false,
				"r": 3,
				"ps": 0,
				"o": "",
				"sw": -1,
				"swt": 0,
				"e": 0,
				"wbh": -1,
				"wbw": -1,
				"clw": -1,
				"crw": -1,
				"wbws": -1,
				"wbs": 0,
				"id": "",
				"p": "",
				"bBg": {
					"y": 0,
					"r": 3,
					"ps": 0,
					"f": "",
					"p": "",
					"c": ""
				},
				"cBg": {
					"y": 0,
					"r": 3,
					"ps": 0,
					"f": "",
					"p": "",
					"c": ""
				},
				"cmBg": {
					"y": 0,
					"r": 3,
					"ps": 0,
					"f": "",
					"p": "",
					"c": ""
				},
				"bm": {},
				"cm": {},
				"cp": {
					"y": 0
				}
			}; //自定义的数据
			var _templateBackgroundData = {
				"styleDefault": true,
				"s": true,
				"h": false,
				"r": 3,
				"ps": 0,
				"o": "",
				"sw": -1,
				"swt": 0,
				"e": 0,
				"wbh": -1,
				"wbw": -1,
				"clw": -1,
				"crw": -1,
				"wbws": -1,
				"wbs": 0,
				"id": "",
				"p": "",
				"bBg": {
					"y": 0,
					"r": 3,
					"ps": 0,
					"f": "",
					"p": "",
					"c": ""
				},
				"cBg": {
					"y": 0,
					"r": 3,
					"ps": 0,
					"f": "",
					"p": "",
					"c": ""
				},
				"cmBg": {
					"y": 0,
					"r": 3,
					"ps": 0,
					"f": "",
					"p": "",
					"c": ""
				},
				"bm": {},
				"cm": {},
				"cp": {
					"y": 0
				}
			}; // 模版的数据
			var _resImageRoot = '//g-2.ss.faisys.com';

			var _templateBannerData = {
				"l": [{
					"i": "ABUIABACGAAg7L342wUokI6J1wUw1go40QU",
					"p": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
					"w": 1366,
					"h": 721,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg7L342wUokI6J1wUw1go40QU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg7L342wUokI6J1wUw1go40QU?f=ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg&v="
				}, {
					"i": "ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU",
					"p": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
					"w": 1580,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU?f=ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg&v="
				}, {
					"i": "ABUIABAEGAAggo33xwUo9MmbsgcwuAo47gU",
					"p": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAggo33xwUo9MmbsgcwuAo47gU.png",
					"w": 1336,
					"h": 750,
					"tp": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAggo33xwUo9MmbsgcwuAo47gU!100x100.png",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABAEGAAggo33xwUo9MmbsgcwuAo47gU?f=ABUIABAEGAAggo33xwUo9MmbsgcwuAo47gU.png&v="
				}, {
					"i": "ABUIABACGAAgqeqrxwUooPHOhgYwsAk4qAU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgqeqrxwUooPHOhgYwsAk4qAU.jpg",
					"w": 1200,
					"h": 680,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgqeqrxwUooPHOhgYwsAk4qAU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAgqeqrxwUooPHOhgYwsAk4qAU?f=ABUIABACGAAgqeqrxwUooPHOhgYwsAk4qAU.jpg&v="
				}, {
					"i": "ABUIABACGAAg2OWDxgUo2LOS9gQwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg2OWDxgUo2LOS9gQwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg2OWDxgUo2LOS9gQwgA84ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg2OWDxgUo2LOS9gQwgA84ngU?f=ABUIABACGAAg2OWDxgUo2LOS9gQwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABACGAAg3OWDxgUo5rWLrAUwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg3OWDxgUo5rWLrAUwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg3OWDxgUo5rWLrAUwgA84ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg3OWDxgUo5rWLrAUwgA84ngU?f=ABUIABACGAAg3OWDxgUo5rWLrAUwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABADGAAgmOSDxgUonI_v6wEwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/3/ABUIABADGAAgmOSDxgUonI_v6wEwgA84ngU.gif",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/3/ABUIABADGAAgmOSDxgUonI_v6wEwgA84ngU!100x100.gif",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABADGAAgmOSDxgUonI_v6wEwgA84ngU?f=ABUIABADGAAgmOSDxgUonI_v6wEwgA84ngU.gif&v="
				}, {
					"i": "ABUIABAEGAAg3N_DxgUoiKL6zAIwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAg3N_DxgUoiKL6zAIwgA84ngU.png",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAg3N_DxgUoiKL6zAIwgA84ngU!100x100.png",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABAEGAAg3N_DxgUoiKL6zAIwgA84ngU?f=ABUIABAEGAAg3N_DxgUoiKL6zAIwgA84ngU.png&v="
				}, {
					"i": "ABUIABAEGAAgkt_DxgUo6IzNigIwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAgkt_DxgUo6IzNigIwgA84ngU.png",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAgkt_DxgUo6IzNigIwgA84ngU!100x100.png",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABAEGAAgkt_DxgUo6IzNigIwgA84ngU?f=ABUIABAEGAAgkt_DxgUo6IzNigIwgA84ngU.png&v="
				}, {
					"i": "AD0IjODMBRACGAAgptzfwAUo6NTXWzCADzieBQ",
					"p": "//11743244.s61i.faiusr.com/2/AD0IjODMBRACGAAgptzfwAUo6NTXWzCADzieBQ.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//11743244.s61i.faiusr.com/2/AD0IjODMBRACGAAgptzfwAUo6NTXWzCADzieBQ!100x100.jpg",
					"du": "//11743244.s61i.faiusr.com/0/AD0IjODMBRACGAAgptzfwAUo6NTXWzCADzieBQ?f=AD0IjODMBRACGAAgptzfwAUo6NTXWzCADzieBQ.jpg&v="
				}, {
					"i": "AD0IjODMBRACGAAgttvfwAUom9GvhQQwgA84ngU",
					"p": "//11743244.s61i.faiusr.com/2/AD0IjODMBRACGAAgttvfwAUom9GvhQQwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//11743244.s61i.faiusr.com/2/AD0IjODMBRACGAAgttvfwAUom9GvhQQwgA84ngU!100x100.jpg",
					"du": "//11743244.s61i.faiusr.com/0/AD0IjODMBRACGAAgttvfwAUom9GvhQQwgA84ngU?f=AD0IjODMBRACGAAgttvfwAUom9GvhQQwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABAEGAAgr_CDxgUop9u7rQQwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAgr_CDxgUop9u7rQQwgA84ngU.png",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/4/ABUIABAEGAAgr_CDxgUop9u7rQQwgA84ngU!100x100.png",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABAEGAAgr_CDxgUop9u7rQQwgA84ngU?f=ABUIABAEGAAgr_CDxgUop9u7rQQwgA84ngU.png&v="
				}, {
					"i": "ABUIABADGAAggOWDxgUo3PWMoAIwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/3/ABUIABADGAAggOWDxgUo3PWMoAIwgA84ngU.gif",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/3/ABUIABADGAAggOWDxgUo3PWMoAIwgA84ngU!100x100.gif",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABADGAAggOWDxgUo3PWMoAIwgA84ngU?f=ABUIABADGAAggOWDxgUo3PWMoAIwgA84ngU.gif&v="
				}, {
					"i": "ABUIABACGAAg1ueDxgUo9qeF1QUwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg1ueDxgUo9qeF1QUwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg1ueDxgUo9qeF1QUwgA84ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg1ueDxgUo9qeF1QUwgA84ngU?f=ABUIABACGAAg1ueDxgUo9qeF1QUwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABACGAAg6ueDxgUomtnzLTCADzieBQ",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg6ueDxgUomtnzLTCADzieBQ.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg6ueDxgUomtnzLTCADzieBQ!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg6ueDxgUomtnzLTCADzieBQ?f=ABUIABACGAAg6ueDxgUomtnzLTCADzieBQ.jpg&v="
				}, {
					"i": "ABUIABACGAAgle_DxgUogJbewwIwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgle_DxgUogJbewwIwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgle_DxgUogJbewwIwgA84ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAgle_DxgUogJbewwIwgA84ngU?f=ABUIABACGAAgle_DxgUogJbewwIwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABACGAAgku_DxgUoyPGJiQYwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgku_DxgUoyPGJiQYwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgku_DxgUoyPGJiQYwgA84ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAgku_DxgUoyPGJiQYwgA84ngU?f=ABUIABACGAAgku_DxgUoyPGJiQYwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABACGAAgju_DxgUowIa_jQcwgA84ngU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgju_DxgUowIa_jQcwgA84ngU.jpg",
					"w": 1920,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAgju_DxgUowIa_jQcwgA84ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAgju_DxgUowIa_jQcwgA84ngU?f=ABUIABACGAAgju_DxgUowIa_jQcwgA84ngU.jpg&v="
				}, {
					"i": "ABUIABACGAAg8fPRxwUo6PqtxgUwsAk4qAU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg8fPRxwUo6PqtxgUwsAk4qAU.jpg",
					"w": 1200,
					"h": 680,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg8fPRxwUo6PqtxgUwsAk4qAU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg8fPRxwUo6PqtxgUwsAk4qAU?f=ABUIABACGAAg8fPRxwUo6PqtxgUwsAk4qAU.jpg&v="
				}, {
					"i": "ABUIABACGAAg54-n1gUosMvPzgEwrAw4nAU",
					"p": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg54-n1gUosMvPzgEwrAw4nAU.jpg",
					"w": 1580,
					"h": 668,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg54-n1gUosMvPzgEwrAw4nAU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg54-n1gUosMvPzgEwrAw4nAU?f=ABUIABACGAAg54-n1gUosMvPzgEwrAw4nAU.jpg&v="
				}],
				"n": [{
					"t": 1,
					"i": "ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU",
					"ot": 0,
					"e": 0,
					"u": "",
					"p": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
					"w": 1580,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU?f=ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg&v=",
					"el": "",
					"er": ""
				}, {
					"t": 1,
					"i": "ABUIABACGAAg7L342wUokI6J1wUw1go40QU",
					"ot": 1,
					"e": 0,
					"u": "",
					"p": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
					"w": 1366,
					"h": 721,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg7L342wUokI6J1wUw1go40QU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg7L342wUokI6J1wUw1go40QU?f=ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg&v=",
					"el": "",
					"er": ""
				}],
				"ce": {
					"sz1": "50",
					"sz2": "30",
					"c1": "#000",
					"c2": "#FFFFFF"
				},
				"s": 4,
				"pl": 0,
				"bt": 0,
				"at": 10,
				"c": 2,
				"t": 62,
				"i": 4000,
				"a": 1500,
				"h": false,
				"o": false,
				"p": 0,
				"pt": 0,
				"ws2": false,
				"f": {},
				"tt": false,
				"ws": false
			}; // 模版的数据

			var _pageBannerData = {
				"s": 0,
				"i": 4000,
				"a": 1500,
				"h": false,
				"o": false,
				"t": 1,
				"p": 0,
				"pt": 0,
				"pl": 0,
				"bt": 1,
				"ws2": false,
				"l": [],
				"f": {},
				"ce": {},
				"n": [],
				"c": 3,
				"at": 0,
				"tt": false,
				"ws": false
			}; // 当前页面的自定义数据（页面独立样式设置）
			var _bannerData = _templateBannerData;

			var _templateBannerV2Data = {
				"s": 1,
				"bl": [{
					"t": 1,
					"i": "ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU",
					"ot": 0,
					"e": 0,
					"u": "",
					"p": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
					"w": 1580,
					"h": 670,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU?f=ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg&v=",
					"el": "",
					"er": ""
				}, {
					"t": 1,
					"i": "ABUIABACGAAg7L342wUokI6J1wUw1go40QU",
					"ot": 1,
					"e": 0,
					"u": "",
					"p": "../2/ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg",
					"w": 1366,
					"h": 721,
					"tp": "//12746603.s21i.faiusr.com/2/ABUIABACGAAg7L342wUokI6J1wUw1go40QU!100x100.jpg",
					"du": "http://12746603.s21d-12.faiusrd.com/0/ABUIABACGAAg7L342wUokI6J1wUw1go40QU?f=ABUIABACGAAg3IPn1gUogOXC3AUwrAw4ngU.jpg&v=",
					"el": "",
					"er": ""
				}],
				"bt": 0,
				"at": 0,
				"i": 4000,
				"a": 1500,
				"blh": {
					"t": 0
				},
				"blw": {
					"t": 0
				},
				"bzb": {
					"t": 0
				},
				"bla": 0,
				"ble": {
					"t": 0,
					"at": 0
				},
				"blpe": 0
			}; // 横幅2.0模版的数据
			var _pageBannerV2Data = {
				"s": 0,
				"bl": [],
				"bt": 1,
				"at": 0,
				"i": 4000,
				"a": 1500,
				"blh": {
					"t": 0
				},
				"blw": {
					"t": 0
				},
				"bzb": {
					"t": 0
				},
				"bla": 0,
				"ble": {
					"t": 0,
					"at": 0
				},
				"blpe": 0
			}; // 横幅2.0当前页面的自定义数据（页面独立样式设置）
			var _bannerV2Data = _templateBannerV2Data;

			var _closePhotoDetailEditSettings = false; // 针对全站搜索，判断是否要剔除三个搜索图片的功能
			var _siteSeachRangeLength = 12; // 全站搜索的搜索范围总数

			var _useTemplateHeaderZone = true; // 是否使用全局模版
			var _useTemplateFooterZone = true; // 是否使用全局模版
			var _useTemplateBottomFloatLayer = true; // 是否使用全局模版

			var _mallOpen = false;
			var _couponOpen = false

			var toolBoxShowView = false;
			var toolBoxShowSet = false;
			var toolBoxShowABTool = false;
			var _wideBanner = true;

			var _navStyleData = {
				"no": true,
				"s": 0,
				"ns": {
					"w": 984,
					"h": 56
				},
				"cs": {
					"w": 984,
					"h": 56,
					"wy": 0
				},
				"np": {},
				"ncp": {
					"y": 1,
					"t": 81,
					"r": -1,
					"b": -1,
					"l": 287,
					"hl": 0,
					"ht": 150
				},
				"cp": {
					"y": 0,
					"t": -1,
					"l": -1
				},
				"nis": {
					"h": 56,
					"w": -1
				},
				"gt": {
					"f": "宋体",
					"s": 12,
					"w": 0,
					"c": "#000",
					"y": 0
				},
				"ht": {
					"c": "#000",
					"y": 0
				},
				"nb": {
					"c": "#ffffff",
					"f": "",
					"r": 0,
					"p": "",
					"y": 0
				},
				"cb": {
					"c": "#ffffff",
					"f": "",
					"r": 0,
					"p": "",
					"y": 0
				},
				"nib": {
					"c": "#000",
					"r": 0,
					"f": "",
					"p": "",
					"y": 0
				},
				"nihb": {
					"c": "#000",
					"r": 0,
					"f": "",
					"p": "",
					"y": 0
				},
				"niss": {
					"w": 1,
					"h": 56
				},
				"nisb": {
					"c": "#000",
					"r": 0,
					"f": "",
					"p": "",
					"y": 0
				},
				"nsigt": {
					"f": "宋体",
					"s": 12,
					"w": 0,
					"c": "#000",
					"y": 0
				},
				"nsiht": {
					"c": "#000",
					"y": 0
				},
				"nsis": {
					"w": -1,
					"h": -1
				},
				"nsib": {
					"c": "#000",
					"r": 0,
					"f": "",
					"p": "",
					"y": 0
				},
				"nsihb": {
					"c": "#000",
					"r": 0,
					"f": "",
					"p": "",
					"y": 0
				},
				"nsiho": 0,
				"nmove": 1,
				"v": 2,
				"ntf": {
					"t": 0,
					"ht": 0
				},
				"nsmt": {},
				"nsmb": {},
				"nrs": {
					"n": {
						"t": 0
					},
					"c": {
						"t": 0
					},
					"i": {
						"t": 0
					},
					"smt": {
						"t": 0
					},
					"smb": {
						"t": 0
					},
					"si": {
						"t": 0
					},
					"is": {
						"t": 0
					},
					"sis": {
						"t": 0
					},
					"tmt": {
						"t": 0
					},
					"tmb": {
						"t": 0
					},
					"ti": {
						"t": 0
					},
					"tis": {
						"t": 0
					}
				},
				"nsw": {
					"n": {
						"t": 0
					},
					"c": {
						"t": 0
					},
					"i": {
						"t": 0
					},
					"sm": {
						"t": 0
					},
					"si": {
						"t": 0
					},
					"is": {
						"t": 0
					},
					"sis": {
						"t": 0
					}
				},
				"nbr": {
					"n": {
						"t": 0
					},
					"i": {
						"t": 0
					},
					"sm": {
						"t": 0
					},
					"si": {
						"t": 0
					},
					"is": {
						"t": 0
					},
					"sis": {
						"t": 0
					},
					"tm": {
						"t": 0
					},
					"ti": {
						"t": 0
					},
					"tis": {
						"t": 0
					}
				},
				"ntmt": {},
				"ntmb": {}
			}; // 栏目导航样式
			var _navStyleV2Data = {
				"no": true,
				"s": 0,
				"snt": 0,
				"ncb": false,
				"onft": false,
				"oinc": false,
				"nmove": 0,
				"ns": {
					"y": 0,
					"w": -1,
					"h": -1
				},
				"np": {
					"y": 0
				},
				"nct": {
					"y": 0
				},
				"nal": {
					"y": 0
				},
				"nifc": {
					"y": 0
				},
				"nif": {
					"y": 0
				},
				"nis": {
					"y": 0,
					"w": -1,
					"h": -1
				},
				"nisp": {
					"y": 0
				},
				"nir": {
					"y": 0
				},
				"nib": {
					"y": 0,
					"t": true,
					"b": true,
					"l": true,
					"r": true
				},
				"snfc": {
					"y": 0
				},
				"snf": {
					"y": 0
				},
				"snr": {
					"y": 0
				},
				"snb": {
					"y": 0,
					"t": true,
					"b": true,
					"l": true,
					"r": true
				},
				"nbg": {
					"y": 0
				}
			}; // 栏目导航2.0样式
			var _useNavVersionTwo = false; // 使用导航2.0	
			var _memberTopBar = false; // 开启顶部会员条
			var _memberTopBar_versionTwo = false; // 使用顶部会员条2.0
			_Global._navHidden = false; //true:隐藏；flase：显示
			_Global._topBarV2 = false; //true:隐藏；flase：显示
			_Global._stylePanelV1 = false; //true:隐藏；flase：显示
			_Global._stylePanelV2 = false; //true:隐藏；flase：显示

			var _useFooterVersionTwo = true;

			_Global._oemHiddenSupport = false;
			_Global._hideSupportAllowed = true;
			_Global._hiddenSupport = false;
			_Global._hiddenLogin = false;
			_Global._hiddenMobile = false;
			_Global._ipcList = 0;
			_Global._hiddenICP = false;
			_Global._hiddenFooterInfo = false;
			_Global._footerInfoV2 = "©2018 - 版权所有";
			_Global.isFreeVer = false;
			_defaultFooterInfo = "©2018 - 版权所有";

			var _cityJsLink = "//g-1.ss.faisys.com/js/city2.min.js?v=201806191600";
			var _majorColorData = "#ffc001";
			//浮动按钮样式链接缓存
			var _floatBtnCssLink = "//g-2.ss.faisys.com/css/floatBtn1.min.css?v=201712061746";
			var _themeColorType = 16;
			var _templateFrame = 668;
			var _siteDemo = false;

			var _isRealDemo = false;
			_Global._backToTop = true;
			var _aid = 12746603;
			var _siteType = 1;
			var _usePrem = true;
			var _acctCreateTime = 1486451445000;
			var _siteId = 0;
			var _templateLayout = _templateDefLayout.NAV_FLOAT;
			var _webBannerHeight = -1;
			var _isTemplateVersion2 = true;
			var _uiMode = false;
			var _isNewUserForLayoutToNewVersion = false;
			var _undo = {
				allow: {
					undo: 0,
					redo: 0
				}
			};
			var _choiceCurrencyVal = "￥";
			var _moduleAnimationPercent = -1;
			var file_size_limit = parseInt("500");
			_Global.styleChangeNum = 0;
			_Global.showSaveGuide = false; // 大保存是否出现新手指引
			_Global.saveBtnState = 0; // 记录大保存按钮状态 已使用的状态： 0:未点击，1:已点击，2：保存成功 3：保存失败
			_Global.previewBtnState = 0; // 记录预览按钮状态 已使用的状态： 0:未点击，1:已点击，2：保存成功并预览 3：保存失败
			_Global.saveClickConut = 0; // 记录触发大保存的次数
			_Global._useTemplateBackground = true; // 是否使用模版

			var _newUserGuide = false; //是否需要新手指引，false代表不需要
			if(false) { //本地环境，到时候测试完可以去掉
				if(_aid > 9855603 && !false) {
					_newUserGuide = true;
				}
			} else {
				if(_aid > 15971536 && !false) { // undefined and false	
					_newUserGuide = true; //传到全局，当前
				}
			}
			var _executedCountForUserGuide = 1; //用于新手指引

			_Global._siteAdvancedSetting = true;