
	function showButton() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
			document.getElementById("topBtn").style.display = "flex";
		}else{
			document.getElementById("topBtn").style.display = "none";
		}
	}

	window.onscroll = function() {showButton()};

	function returnToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	
	function removeLoadingSplash() {
		$("#loadingSplash").hide();
	}