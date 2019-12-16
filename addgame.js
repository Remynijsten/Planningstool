var selectedplayers = [];
var gamename;
var duration;
var minplayers;
var maxplayers;
var explaintime;

$("#selectgame").on("change", function(){
	$(".avatar").css("display", "inline-block");
	$.ajax({
		url: "addgame.php",
		method: "POST",
		data: { 'selectedgame' : ($(this).val()) },
		datatype: 'json',
		async: true,
		success: function(response){
			item = JSON.parse(response);
			gamename = item.gamename;
			duration = item.duration;
			minplayers = item.minplayers;
			maxplayers = item.maxplayers;
			explaintime = item.explaintime;
		}
	});
});

$(".selectavatar").on("mouseover", function(){
	if (selectedplayers.includes($(this).attr('value')) == false){
		$(this).css("transform", "scale(1.1, 1.1)");
		$(this).css("opacity", "1");
	}
});

$(".selectavatar").on("mouseout", function(){
	if (selectedplayers.includes($(this).attr('value')) == false){
		$(this).css("transform", "scale(1, 1)");
		$(this).css("opacity", "0.5");
	}
});

$(".selectavatar").on("click", function(){
	$(this).css("transform", "scale(1.1, 1.1)");
	$(this).css("opacity", "1");
	$(this).prev().css("opacity", "1");
	if (selectedplayers.includes($(this).attr('value')) == true){
		console.log("allready includes");
	}else{
		selectedplayers.push($(this).attr('value'));
	}
});

$(".removechar").on("click", function(){
	$(this).next().css("transform", "scale(1, 1)");
	$(this).next().css("opacity", "0.5");

	var ii = selectedplayers.indexOf(($(this).next().attr('value')));
	selectedplayers.splice(ii, 1);
	$(this).css("opacity", "0");
});

$(".submitBTN").on("click", function(){

	if (selectedplayers.length < minplayers){
		$(".errors").css("opacity", "1");
		$(".errors").html("Dit spel vereist " + minplayers + " spelers!");
		setTimeout(function(){
			$(".errors").fadeTo("slow", 0);
		}, 2000);
	}

	if (selectedplayers.length > maxplayers){
		$(".errors").css("opacity", "1");
		$(".errors").html("Dit spel heeft maximaal " + maxplayers + " spelers!");
		setTimeout(function(){
			$(".errors").fadeTo("slow", 0);
		}, 2000);
	}
});


$(".explainer").on("change", function(){

	if (selectedplayers.includes($(this).val()) == true ){
		$(".errors").css("opacity", "1");
		$(".errors").html("De uitlegger is al geselecteerd als speler!");
		setTimeout(function(){
			$(".explainer").val("");
			$(".errors").fadeTo("slow", 0);
		}, 2000);
	}
});


$(".times input").on("change", function(){

	var starthour = $(".starthour").val();
	var startminute = $(".startminute").val();

	if (starthour.length == 2){
		if (starthour < 12 || starthour > 18){
			$(".starthour").val("");

			$(".errors").css("opacity", "1");
			$(".errors").html("De speldag is van 12:00 tot 18:00 🙂");
			setTimeout(function(){
				$(".errors").fadeTo("slow", 0);
			}, 2000);
		}
	}

	if (startminute.length == 2){
		if (startminute < 0 || startminute > 59){
			$(".startminute").val("");

			$(".errors").css("opacity", "1");
			$(".errors").html("Een uur heeft maar 59 minuten 🙂");
			setTimeout(function(){
				$(".errors").fadeTo("slow", 0);
			}, 2000);
		}
	}







	if ($(this).val().length > 2){
		$(this).val("");
	}


});













