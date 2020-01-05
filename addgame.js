var selectedplayers = [];
var gamename;
var duration;
var minplayers;
var maxplayers;
var explaintime;
var explainer;
var totalduration;
var starthour;
var startminute;
var endhour;
var endminute;
var error;
var explainTrigger = 0;
var gameTrigger = 0;
var config = "";

$(".addevent").on("click", function(){
	$(".addgame").css("top", "0%");
	config = "add";
});

$("#selectgame").on("change", function(){
	gameTrigger = 1;
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
			totalduration = +item.explaintime + +item.duration;
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
	if(selectedplayers.length == maxplayers){
		errorDisplay("Dit spel heeft maximaal " + maxplayers + " spelers!");
	}

	else if (selectedplayers.includes($(this).attr('value')) == false){
		$(this).css("transform", "scale(1.1, 1.1)");
		$(this).css("opacity", "1");
		$(this).prev().css("opacity", "1");
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

$(".explainer").on("change", function(){
	explainer = $(this).val();
	explainTrigger = 1;
});

$(".times input").on("change input", function(){

	$(this).val().replace(/[^0-9]/g, '');

	starthour = $(".starthour").val();
	startminute = $(".startminute").val();

	if (starthour.length == 2){

		if (starthour < 12 || starthour > 18){
			$(".starthour").val("");
			errorDisplay("De speldag is van 12:00 tot 18:00 🙂");
		}
	}

	if (startminute.length == 2){

		if (startminute < 0 || startminute > 59){
			$(".startminute").val("");
			errorDisplay("Een uur heeft maar 59 minuten 🙂");
		}
	}

	if ($(this).val().length > 2){
		$(this).val("");
	}


	if (starthour.length == 2 && startminute.length == 2){
		var resulttime;
		var currentDate = new Date();
		currentDate.setMinutes(startminute);
		currentDate.setHours(starthour);
		var minutes = currentDate.getMinutes();
		currentDate = addMinutes(currentDate, totalduration);





		if(String(minutes).length == 1){
			minutes = "0" + minutes	;
		} 

		function addMinutes(date, minutes) {
			resulttime	=	( 	new Date(date.getTime() + minutes*60000)	);
		}
		
		resultHour = resulttime.getHours();
		resultMinutes = resulttime.getMinutes();

		endhour = resultHour;

		if (resultMinutes.toString().length == 1){
			resultMinutes = resultMinutes + "0";
		}

		endminute = resultMinutes;

		if (resultHour >= 18){
			errorDisplay("De speldag duurt maar tot 18:00!");
			setTimeout(function(){
				$(".starthour").val("");
				$(".startminute").val("");
			}, 2000);
			
		}else{
			$(".endminute").val(endminute);
			$(".endhour").val(endhour);	
		}
	}
});

$(".submitBTN").on("click", function(){
	errormsg = [];
	starttime = starthour + "" + startminute;
	endtime = endhour + "" + endminute;

	timecheck(selectedplayers, starttime, endtime);

	if (selectedplayers.length < minplayers){
		errorDisplay("Dit spel vereist " + minplayers + " spelers!");
	}	
	if (errormsg.length > 0){
		errorDisplay(errormsg);
	}
	if(explainTrigger == 0){
		errorDisplay("Er is geen uitlegger geselecteerd!")
	}
	if(gameTrigger == 0){
		errorDisplay("Er is geen spel geselecteerd!")
	}
	if (config == "add"){

		if (gameTrigger == 1 && explainTrigger == 1 && errormsg.length == 0 && selectedplayers.length >= minplayers && selectedplayers.length <= maxplayers){
			$.ajax({
				url: "insert.php",
				method: "POST",
				data: { 
					'game' : $('#selectgame').val(),
					'players' : selectedplayers,
					'starttime' : starthour + "" + startminute,
					'endtime' : endhour + "" + endminute,
					'explainer' : explainer,
					'explaintime' : explaintime,
					'duration'	: duration,
				},
				datatype: 'json',
				success: function(response){
					create();
				}
			});
			init();
			$(".addgame").css("top", "-75%");
		}
	}else if(config == "edit"){
		if (gameTrigger == 1 && explainTrigger == 1 && errormsg.length == 0 && selectedplayers.length >= minplayers && selectedplayers.length <= maxplayers){
		$.ajax({
			url: "alter.php",
			method: "POST",
			data: { 
				'game' : $('#selectgame').val(),
				'players' : selectedplayers,
				'starttime' : starthour + "" + startminute,
				'endtime' : endhour + "" + endminute,
				'explainer' : explainer,
				'value' : value,
				'explaintime' : explaintime,
				'duration' : duration
			},
			datatype: 'json',
			success: function(response){
				$(".event" + value).remove();
				$(".explain" + value).remove();
				create(config, value);

				init();
				$(".addgame").css("top", "-75%");

			}
		});
	}
	}
});


$(".closemenu").on("click", function(){
	$(".addgame").css("top", "-75%");
	init();
});

function timecheck(spelers, starttime, endtime){
	if (config == "add"){
		$.ajax({
			type: "GET",
			data: {
				'spelers' : JSON.stringify(spelers),
				'starttime' : starttime, 
				'endtime' : endtime,
			},
			datatype: 'json',
			url: 'timecheck.php',
			async : false,
			success: function(response){
				var result = JSON.parse(response);
				for (i=0;i<result.length;i++){
					errormsg.push(result[i]);
				}
			}
		});
	}else if(config == "edit"){
		$.ajax({
			type: "GET",
			data: {
				'spelers' : JSON.stringify(spelers),
				'starttime' : starttime, 
				'endtime' : endtime,
				'value' : value
			},
			datatype: 'json',
			url: 'alterCheck.php',
			async : false,
			success: function(response){
				var result = JSON.parse(response);
				for (i=0;i<result.length;i++){
					errormsg.push(result[i]);
				}
			}
		});
	}
}
	
function errorDisplay(message){
	if (Array.isArray(message) == true){
		for (i=0; i<message.length;i++){
			var el = document.createElement("DIV");
			el.className = "errors";
			el.style.opacity = "1";
			el.innerHTML = message[i];
			$(".addgame").append(el);

			setTimeout(function(){
				$(".errors").fadeTo("slow", 0);
			}, 3000);

			setTimeout(function(){
				$(".errors").remove();
			}, 3500);
		}
	}else{
		var el = document.createElement("DIV");
		el.className = "errors";
		el.style.opacity = "1";
		el.innerHTML = message;
		$(".addgame").append(el);

		setTimeout(function(){
			$(".errors").fadeTo("slow", 0);
		}, 3000);

		setTimeout(function(){
			$(".errors").remove();
		}, 3500);
	}
}

function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}

function init(){
	$("#selectgame").val("");
	$(".explainer").val("");
	$(".times input").val("");
	$(".selectavatar").css("transform", "scale(1, 1)");
	$(".selectavatar").css("opacity", "0.5");
	$(".removechar").css("opacity", "0");
	selectedplayers = [];
	errormsg = [];
	explainTrigger = 0;
	gameTrigger = 0;
	config = "";
}