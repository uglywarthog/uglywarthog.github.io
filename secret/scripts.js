function test() {
	var element = document.getElementById("pass1");
	if(element.value.toLowerCase() === 'koton') {
		document.getElementById("sudoku").style.display = "block";
		document.getElementById("code").style.display = "none";
	} else {
		document.getElementById("wrongPassword").style.display = "block";
		setTimeout(() => document.getElementById("wrongPassword").style.display = "none", 2000);
	}
}