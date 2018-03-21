var modal = document.getElementById("myModal");
var btn = document.getElementById("info");
var span = document.getElementById("close");

btn.addEventListener("click", function() {
	modal.style.display = "block";
});

span.addEventListener("click", function() {
	modal.style.display = "none";
});

window.addEventListener("click", function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
});