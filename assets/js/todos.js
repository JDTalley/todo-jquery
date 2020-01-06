// Complete Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complete");
})

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		// grab todo text
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i></span>" + todoText + "</li>");
	}
});

$("#edit").on("click", function(e){
	$("input[type='text']").fadeToggle();
})