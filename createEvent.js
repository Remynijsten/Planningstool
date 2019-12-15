var eventNumber = 1;

var dataString = {
	id : 1,
};

var totalevents;
var totalplayers;
var starthour;
var startminute;
var endhour;
var endminute;

//Create Schedule Event
function create(){
	for (event=0;event<2;event++){

		$.ajax({  
			type: 'GET',  
			url: 'variables.php', 
			data: dataString,
			dataType : 'json',
			async : true,
			success: function(response) {

				totalevents = response.totalevent;
				totalplayers = response.totalplayers;
				starthour = response.starthour;
				startminute = response.startminute;
				endhour = response.endhour;
				endminute=response.endminute;
				playtime = response.playtime;
				explaintime = response.explaintime;
				testplayer = response.players;
				testgame = response.game;

				for (x=0;x<totalplayers;x++){
					switch (starthour){
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
					
					var event = document.createElement("div");
					event.style.marginLeft = startminute * 1.67 + "%";
					event.style.width = playtime * 1.67 + "%";
					event.style.height = "12vh";
					event.style.zIndex = "10";
					event.style.cursor = "pointer";
					event.style.position = "absolute";
					event.style.border = "1px solid black";
					event.id = "event" + eventNumber;
				
					switch (testplayer[x].trim()){
						case "remy":
						event.style.marginTop =  "0vh";
						event.style.background = "orange";
						break;

						case "billy":
						event.style.marginTop = "12vh";
						event.style.background = "blue";
						break;

						case "harry":
						event.style.marginTop = "24vh";
						event.style.background = "yellow";
						break;

						case "jack":
						event.style.marginTop = "36vh";
						event.style.background = "brown";
						break;

						case "thijmen":
						event.style.marginTop = "48vh";
						event.style.background = "darkgrey";
						break;

						case "luigi":
						event.style.marginTop = "60vh";
						event.style.background = "darkgreen";
						break;

						default:
						break;
					}
					document.getElementsByClassName("gridcolumn")[target].append(event);
					eventNumber++;		
				}
			}
		});
		dataString.id++;
	}
}