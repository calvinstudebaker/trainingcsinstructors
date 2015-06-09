
function setProgressBar(value){
	var widthString = "width: " + value + "%;";
	$("#progressBar").html(value + "%").attr("style", widthString).attr("aria-valuenow", String(value));
}

$(function () {
    $('a').click(function (e) {
        e.preventDefault();
        $('a[href="' + $(this).attr('href') + '"]').tab('show');
        window.scrollTo(0, 0);
    })
});
