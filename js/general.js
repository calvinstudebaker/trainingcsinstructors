function switchToPage(page){
	$(".content").hide("fast");
	setTimeout(function() {
		$(location).attr('href', page);
	}, 300);
};

$(document).ready(function(){
	$("ul.menuBar li").onclick(function(){

	});
});