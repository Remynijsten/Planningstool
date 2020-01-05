var eventNumber = 1;
var gamename;
var totalevents;
var totalplayers;
var target;
var players;
var startuur;
var startminuut;
var einduur;
var eindminuut; 
var id;
var errormsg = [];
var explainer;
var value;

function create(configParameter, valueParameter){

	$.ajax({  
		type: 'GET',  
		url: 'variables.php',
		data: {
			'config' : configParameter,
			'value' : valueParameter
		},
		datatype: 'json',
		async : true,
		success: function(response) {
			var result = JSON.parse(response);

			startuur = result.starthour;
			startminuut = result.startminute;
			einduur = result.endhour;
			eindminuut = result.endminute;
			duration = result.duration;
			totalplayers = result.totalplayers;
			playtime = result.playtime;
			explaintime = result.explaintime;
			explainer = result.explainer;
			players = result.players;
			gamename = result.game;
			id = result.idnumber;

			var explainEvent = document.createElement("div");
			explainEvent.style.marginLeft = startminuut * 1.67 + "%";
			explainEvent.style.width = explaintime * 1.67 + "%";
			explainEvent.style.height = "12vh";
			explainEvent.style.zIndex = "10";
			explainEvent.style.cursor = "pointer";
			explainEvent.style.position = "absolute";
			explainEvent.style.borderRadius = "5%";
			explainEvent.style.opacity = "0.75";
			explainEvent.className = "explain" + id;
			explainEvent.style.background = "white";
			explainEvent.value = id;
			explainEvent.setAttribute("onclick", "openEdit(this)");

			switch (explainer){
				case "remy":
				explainEvent.style.marginTop =  "0vh";
				break;

				case "billy":
				explainEvent.style.marginTop = "12vh";
				break;

				case "harry":
				explainEvent.style.marginTop = "24vh";
				break;

				case "jack":
				explainEvent.style.marginTop = "36vh";
				break;

				case "thijmen":
				explainEvent.style.marginTop = "48vh";
				break;

				case "luigi":
				explainEvent.style.marginTop = "60vh";
				break;

				default:
				break;
			}

			switch (startuur){
				case "12":
				target = 0;
				break;

				case "13":
				target = 1;
				break;

				case "14":
				target = 2;
				break;

				case "15":
				target = 3;
				break;

				case "16":
				target = 4;
				break;

				case "17":
				target = 5;
				break; 
			}

			document.getElementsByClassName("gridcolumn")[target].append(explainEvent);

			for (x=0;x<totalplayers;x++){

				var event = document.createElement("div");
				event.style.marginLeft = (+startminuut + +explaintime) * 1.67 + "%";
				event.style.width = duration * 1.67 + "%";
				event.style.height = "12vh";
				event.style.zIndex = "10";
				event.style.cursor = "pointer";
				event.style.position = "absolute";
				event.style.borderRadius = "5%";
				event.style.opacity = "0.75";
				event.className = "event" + id;
				event.id = "gameEvent";
				event.style.background = "dodgerblue";
				event.value = id;
				event.setAttribute("onclick", "openEdit(this)");


				switch (players[x].trim()){
					case "remy":
					event.style.marginTop =  "0vh";

					break;

					case "billy":
					event.style.marginTop = "12vh";

					break;

					case "harry":
					event.style.marginTop = "24vh";

					break;

					case "jack":
					event.style.marginTop = "36vh";

					break;

					case "thijmen":
					event.style.marginTop = "48vh";
					
					break;

					case "luigi":
					event.style.marginTop = "60vh";

					break;

					default:
					break;
				}

				document.getElementsByClassName("gridcolumn")[target].append(event);	
			}
		}
	});
}