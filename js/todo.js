//To Make Check-Ofs
$('#todo').on("click",'li',function(){										//Effect lis inside ul dynamic
	$(this).toggleClass("selected");										
});
//To Remove Element
$('#todo').on('click','span',function(event){									//effect span inside ul dynamic		
	$(this).parent().fadeOut(1000,function(){								//To Remove Parent li not span
		$(this).remove();													//Here this refer to parent not span
	});
	event.stopPropagation();							 					//To Prevent Bubbling Effect(that make parent event to run) basically not 
});

$("input[type='text'").keypress(function(event){
	if(event.which===13){         //Enter keypress
		var todoText=$(this).val();
		$(this).val("");
		$('#todo').append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>")			//To append li elements inside ul
	}
});

$(".fa-minus").click(function(){
	var className = $(this).attr("class").substring(4);
	if(className === "fa-minus"){
		className = "fas fa-plus";
	} else {
		className = "fas fa-minus";
	}
	$(this).attr("class", className);
	$("input[type='text'").fadeToggle();
});