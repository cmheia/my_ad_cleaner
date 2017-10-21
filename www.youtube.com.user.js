// ==UserScript==
// @name         youtube 清理
// @namespace    https://blog.dabria.net/
// @version      0.1
// @icon         https://www.youtube.com/favicon.ico
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	var target_list = [
		".iv-branding.annotation-type-custom.annotation",
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