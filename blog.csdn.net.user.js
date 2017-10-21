// ==UserScript==
// @name         csdn 博客 清理
// @namespace    https://blog.dabria.net/
// @version      0.1
// @icon         http://c.csdnimg.cn/public/favicon.ico
// @description  try to take over the world!
// @author       You
// @match        http://blog.csdn.net/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	var target_list = [
		"#layerd",
		".ad_class",
		".bdsharebuttonbox",
		"#com-d-top-a",
		"#com-quick-QRcode",
		"#com-quick-reply",
		"#com-quick-collect",
	];

	var purge = function () {
		let elem;

		console.log("do purge");
		target_list.forEach((value, index, array1) => {
			elem = document.querySelector(value);
			if (elem) {
				console.log("remove [" + index + "]:", value);
				elem.parentNode.removeChild(elem);
			}
		});

		// document.querySelectorAll(".csdn-tracking-statistics")[1].parentNode.removeChild(document.querySelectorAll(".csdn-tracking-statistics")[1]);
	};

	(function () {
		var DOMObserverConfig = {
			attributes : true,
			childList  : true,
		};
		var DOMObserver = new MutationObserver(function () {
				purge();
			});
		DOMObserver.observe(document.body, DOMObserverConfig);
	})();
})();