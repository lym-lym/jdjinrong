function bufferMove(obj, target, fn, ratio = 8) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var bBtn = true;

		for(var sAttr in target) {
			if(sAttr ==='opacity') {
				var iCur = getStyle(obj, 'opacity') * 100;
			} else {
				var iCur = parseInt(getStyle(obj, sAttr));
			}

			var iSpeed = (target[sAttr] - iCur) / ratio;

			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

			var iNext = iCur + iSpeed;

			if(sAttr === 'opacity') {
				obj.style.opacity = iNext / 100;
				obj.style.filter  = 'alpha(opacity:' + iNext + ')';
			} else {
				obj.style[sAttr] = iNext + 'px';
			}

			if(target[sAttr] !== iNext) {
				bBtn = false;
			}
 		}

 		if(bBtn === true) {
 			clearInterval(obj.timer);
 			if(fn) {
 				fn();
 			}
 		}
	}, 50);
}


function getStyle(obj, sAttr) {
	if(obj.currentStyle) {
		return obj.currentStyle[sAttr];
	} else {
		return getComputedStyle(obj, false)[sAttr];
	}
}