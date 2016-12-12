window.onload = function() {
	var curIndex = 0;
	var timeLine = document.getElementById("timeline");
	var clickArea = timeLine.getElementsByTagName("s");
	var timePoint = timeLine.getElementsByTagName("li");

	for (var i = 0, len = clickArea.length; i < len; i++) {
		(function(i) {
			clickArea[i].onclick = function() {
				timePoint[i].className = "active";
				timePoint[curIndex].className = "";
				curIndex = i;
			};
		})(i);
	}
};