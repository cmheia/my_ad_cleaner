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

	let target_list = [
		".iv-branding.annotation-type-custom.annotation",
	];

	let purge = function () {
		let elem;

		target_list.forEach((value, index, array1) => {
			elem = document.querySelector(value);
			if (elem) {
				console.log("remove [" + index + "]:", value);
				elem.parentNode.removeChild(elem);
			}
		});
	};

	let log = function () {
		let player = document.querySelector('#player-container');
		if (player) {
			console.log("purge go");
			body_mo.disconnect();
			let player_mo = new MutationObserver(purge);
			player_mo.observe(player, {
				childList : true,
				subtree   : true,
			});
		}
	};

	let body_mo = new MutationObserver(log);

	body_mo.observe(document.body, {
		childList : true,
		subtree   : true,
	});
})();