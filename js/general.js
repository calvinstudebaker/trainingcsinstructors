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

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab a:first').tab('show') // Select first tab
$('#myTab a:last').tab('show') // Select last tab
$('#myTab li:eq(2) a').tab('show') // Select third tab (0-indexed)