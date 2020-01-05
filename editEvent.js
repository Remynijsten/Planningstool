$(".closeEdit").on("click", function(){
	$(".menu").css("display", "none");
});

var skillArray;
var skillText = "";
var plrArray;
var plrText = "";

$(document).on("mouseover",".gridcolumn div",function(){
	value = $(this).val();

	$(".event" + value).css({
		"transform": "scale(0.9, 0.9",
		"border": "1px solid black"
	});
	$(".explain" + value).css({
		"transform": "scale(0.9, 0.9",
		"border": "1px solid black"
	});

});

$(document).on("mouseout",".gridcolumn div",function(){
	value = $(this).val();
	$(".event" + value).css({
		"transform": "scale(1, 1",
		"border": "1px solid black"
	});
	$(".explain" + value).css({
		"transform": "scale(1, 1",
		"border": "1px solid white"
	});
});


function openEdit(e){
	value = e.value;

	$.ajax({
		data:{'value' : value},
		datatype: 'JSON',
		url: 'edit.php',
		success: function(response){
			var data = JSON.parse(response);

			explaintime = data.explaintime;
			duration = data.duration;
			totalduration = +explaintime + +duration;
			var imgsrc = "img/" + data.image;

			$(".gameTitle").html(data.game);
			$(".menu").css("top", "0%");


			var gameimg = document.createElement("img");
			gameimg.setAttribute("src", imgsrc);
			gameimg.className = "gameIMG";
			gameimg.style.display = "block";
			gameimg.style.margin = "3% auto";
			$(".menu").prepend(gameimg);
			
			$(".descr").html(data.descr);

			if (data.expansions != null){
				$(".expansions").css("display", "block");
				$(".exp").html(data.expansions);
			}

			skillArray = data.skills.split(";");

			for (i=0;i<skillArray.length;i++){
				skillText += skillArray[i] + "<br>";
			}
			$(".skl").html(skillText);

			$(".url").html(data.url);
			$(".url").attr("href", data.url);
			$(".url").attr("target", "_blank");


			$(".youtube").html(data.youtube);


			plrArray = data.players.split(",");

			for (i=0;i<plrArray.length;i++){
				plrText += plrArray[i] + "<br>";
			}

			$(".plr").html(plrText);

			$(".explainerTXT").html(data.explainer);

			$(".eventTime").html(data.starttime + " - " + data.endtime);

			

			$(".edit").on("click", function(){
				selectedplayers = [];
				alterEvent(data.game, data.explainer, plrArray, data.starttime, data.endtime);
			});
		}
	});
}

$(".delete").on("click", function(){
	closeEdit();
	setTimeout(function(){
		$(".confirm").css("display", "block");
	}, 500);
});

$(".confirmDelete").on("click", function(){
	$(".menu").css("display", "none");
	$(".event" + value).remove();
	$(".explain" + value).remove();

	$.ajax({
		data: { 'value' : value },
		datatype: 'text',
		url: 'remove.php',
		success: function(){
			var el = document.createElement("DIV");
			el.className = "deletemsg";
			el.style.opacity = "1";
			el.innerHTML = "Spel Verwijderd!";
			$(".table").append(el);

			setTimeout(function(){
				$(".deletemsg").fadeTo("slow", 0);
			}, 3000);

			setTimeout(function(){
				$(".deletemsg").remove();
			}, 3500);
		}
	});
	$(".confirm").css("display", "none");
});

$(".noDelete").on("click", function(e){
	$(".confirm").css("display", "none");
});

function closeEdit(){
	$(".menu").css("top", "-75%");
	$(".gameIMG").remove();
	skillText = "";
	plrText = "";
}


function alterEvent(gameFUN, explainerFUN, players, starttime, endtime){
		
		console.log(players);

		closeEdit();
		$(".addgame").css("top", "0%");
		config = "edit";

		$("#selectgame").val(gameFUN);
		gamename = gameFUN;
		gameTrigger = 1;
		$(".explainer").val(explainerFUN);
		explainer = explainerFUN;
		explainTrigger = 1;


		for (i=0; i<players.length;i++){
			selectedplayers.push(players[i]);
			$('.selectavatar[value="'+players[i]+'"]').css("transform", "scale(1.1, 1.1)");
			$('.selectavatar[value="'+players[i]+'"]').css("opacity", "1");
			$('.selectavatar[value="'+players[i]+'"]').prev().css("opacity", "1");
		}

		$(".starthour").val(starttime.substring(0, 2));
		$(".startminute").val(starttime.toString().slice(-2));
		starthour = $(".starthour").val();
		startminute = $(".startminute").val();

		$(".endhour").val(endtime.substring(0, 2));
		$(".endminute").val(endtime.toString().slice(-2));
		endhour = $(".endhour").val();
		endminute = $(".endminute").val();

}