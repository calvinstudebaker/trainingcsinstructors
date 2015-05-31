
function setProgressBar(value){
	var widthString = "width: " + value + "%;";
	$("#progressBar").html(value + "%").attr("style", widthString).attr("aria-valuenow", String(value));
}