var names = ["Remy", "Billy", "Harry", "Jack", "Thijmen", "Luigi"];

//($(this).val())

$("#selectgame").on("change", function(){

	

	for (x=1;x<7;x++){
		for (i=0;i<6;i++){
		var select = document.getElementById("player" + x);
		var option = document.createElement("option");
		option.value = names[i];
		option.textContent = names[i];
		select.appendChild(option);
		}
	}

	$("form").append(select);



});
