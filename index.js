var toggleStatus = false;
		function navToggler() {
			if (toggleStatus == true) {
				document.getElementById("navigator").style.transform = "translateY(-100vh)";
				document.getElementById("plus-icon").style.rotate="none";
				toggleStatus = false;
			} else if (toggleStatus == false) {
				document.getElementById("navigator").style.transform = "none";
				document.getElementById("plus-icon").style.rotate="45deg";
				toggleStatus = true;
			}
		}
